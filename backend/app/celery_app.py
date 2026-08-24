from celery import Celery

from app.core.config import settings

app = Celery(
    "tasks",
    broker=settings.redis_url,
    backend=settings.redis_url,
    include=["app.workers.capture_lookout"],
)

app.conf.beat_schedule = {
    "capture-lookout-every-5-min": {
        "task": "tasks.capture_lookout_image",
        "schedule": 300.0,
    }
}
app.conf.timezone = "UTC"
