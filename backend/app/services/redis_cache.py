import json

from app.core.config import settings
from app.core.redis import redis_get, redis_set
from app.schemas.weather import WeatherMetrics, WeatherResponse


def _cache_key(spot_id: str) -> str:
    return f"weather:{spot_id}"


async def get_cached_weather(spot_id: str) -> WeatherResponse | None:
    cached_value = await redis_get(_cache_key(spot_id))
    if cached_value is None:
        return None

    payload = json.loads(cached_value)
    return WeatherResponse(
        spot_id=payload["spot_id"],
        source="cache",
        metrics=WeatherMetrics(**payload["metrics"]),
    )


async def set_cached_weather(spot_id: str, weather: WeatherResponse) -> None:
    payload = weather.model_dump(mode="json")
    await redis_set(_cache_key(spot_id), json.dumps(payload), settings.cache_ttl_seconds)