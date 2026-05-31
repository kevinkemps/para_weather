from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    app_name: str = "Paragliding Weather API"
    redis_url: str = "redis://localhost:6379/0"
    cache_ttl_seconds: int = 600


settings = Settings()