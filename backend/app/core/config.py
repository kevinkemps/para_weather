from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    app_name: str = "Paragliding Weather API"
    redis_url: str = "redis://localhost:6379/0"
    cache_ttl_seconds: int = 600

    rtsp_url: str | None = None
    rtsp_username: str = "admin"
    rtsp_password: str = "password"
    rtsp_host: str = "192.168.1.179"
    rtsp_port: str = "554"

    s3_endpoint_url: str = "http://localhost:3900"
    s3_access_key_id: str
    s3_secret_access_key: str
    s3_bucket: str = "cam-images"
    s3_region: str = "garage"

    database_url: str


settings = Settings()
