from fastapi import APIRouter, HTTPException

from app.schemas.weather import WeatherResponse
from app.services.redis_cache import get_cached_weather, set_cached_weather
from app.services.weather_api import fetch_weather

router = APIRouter(prefix="/weather")


@router.get("/{spot_id}", response_model=WeatherResponse)
async def get_weather(spot_id: str) -> WeatherResponse:
    cached_weather = await get_cached_weather(spot_id)
    if cached_weather is not None:
        return cached_weather

    weather = await fetch_weather(spot_id)
    if weather is None:
        raise HTTPException(status_code=404, detail="Weather data not found")

    await set_cached_weather(spot_id, weather)
    return weather