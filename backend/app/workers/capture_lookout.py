from datetime import datetime, timezone

import cv2
from celery import shared_task
from celery.exceptions import SoftTimeLimitExceeded
from celery.utils.log import get_task_logger

from app.core.config import settings
from app.core.db import SessionLocal
from app.core.storage import get_s3_client
from app.models.image import ImageRecord

logger = get_task_logger(__name__)

LOCATION_TAG = "lookout"


def _build_rtsp_url() -> str:
    if settings.rtsp_url:
        return settings.rtsp_url
    return (
        f"rtsp://{settings.rtsp_username}:{settings.rtsp_password}"
        f"@{settings.rtsp_host}:{settings.rtsp_port}/cam/realmonitor?channel=1&subtype=0"
    )


def _grab_jpeg_frame() -> bytes:
    rtsp_url = _build_rtsp_url()
    cap = cv2.VideoCapture(rtsp_url, cv2.CAP_FFMPEG)
    # Force a shallow internal buffer so .read() returns a live frame
    # instead of one that's been queued up for a second or more.
    cap.set(cv2.CAP_PROP_BUFFERSIZE, 1)

    try:
        if not cap.isOpened():
            raise RuntimeError("Could not open RTSP stream")

        ok, frame = cap.read()
        if not ok or frame is None:
            raise RuntimeError("Failed to read frame from RTSP stream")

        ok, buf = cv2.imencode(".jpg", frame, [cv2.IMWRITE_JPEG_QUALITY, 90])
        if not ok:
            raise RuntimeError("Failed to JPEG-encode frame")

        return buf.tobytes()
    finally:
        cap.release()


@shared_task(
    name="tasks.capture_lookout_image",
    bind=True,
    max_retries=3,
    default_retry_delay=15,
    time_limit=60,       # hard kill — protects against cv2 hanging on a dead stream
    soft_time_limit=45,  # lets us log/clean up before the hard kill
)
def capture_lookout_image(self):
    try:
        image_bytes = _grab_jpeg_frame()
    except (RuntimeError, SoftTimeLimitExceeded) as exc:
        logger.warning("Capture failed: %s", exc)
        raise self.retry(exc=exc)

    captured_at = datetime.now(timezone.utc)
    object_key = (
        f"{LOCATION_TAG}/{captured_at:%Y/%m/%d}/{captured_at:%Y%m%dT%H%M%S%f}.jpg"
    )

    s3 = get_s3_client()
    s3.put_object(
        Bucket=settings.s3_bucket,
        Key=object_key,
        Body=image_bytes,
        ContentType="image/jpeg",
        Metadata={"location": LOCATION_TAG},
    )

    session = SessionLocal()
    try:
        record = ImageRecord(
            location=LOCATION_TAG,
            bucket=settings.s3_bucket,
            object_key=object_key,
            content_type="image/jpeg",
            size_bytes=len(image_bytes),
            captured_at=captured_at,
        )
        session.add(record)
        session.commit()
        image_id = record.id
    except Exception:
        session.rollback()
        # DB write failed after the object landed in Garage — remove it so
        # the bucket and the pointer table don't silently drift apart.
        try:
            s3.delete_object(Bucket=settings.s3_bucket, Key=object_key)
        except Exception:
            logger.exception("Failed to roll back orphaned S3 object %s", object_key)
        raise
    finally:
        session.close()

    logger.info(
        "Stored %s (%d bytes) as image %s", object_key, len(image_bytes), image_id
    )
    return {
        "id": image_id,
        "bucket": settings.s3_bucket,
        "key": object_key,
        "location": LOCATION_TAG,
        "captured_at": captured_at.isoformat(),
    }
