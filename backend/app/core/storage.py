import boto3
from botocore.config import Config

from app.core.config import settings


def get_s3_client():
    return boto3.client(
        "s3",
        endpoint_url=settings.s3_endpoint_url,
        aws_access_key_id=settings.s3_access_key_id,
        aws_secret_access_key=settings.s3_secret_access_key,
        region_name=settings.s3_region,
        config=Config(s3={"addressing_style": "path"}, signature_version="s3v4"),
    )


def ensure_bucket_exists(bucket: str | None = None) -> None:
    bucket_name = bucket or settings.s3_bucket
    s3 = get_s3_client()
    existing_buckets = {entry["Name"] for entry in s3.list_buckets().get("Buckets", [])}
    if bucket_name not in existing_buckets:
        s3.create_bucket(Bucket=bucket_name)
