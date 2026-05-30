from app.schemas.weather import WeatherMetrics, WeatherResponse


async def fetch_weather(spot_id: str) -> WeatherResponse | None:
    return WeatherResponse(
        spot_id=spot_id,
        source="upstream",
        metrics=WeatherMetrics(
            wind_speed_mps=4.2,
            gust_speed_mps=5.0,
            wind_direction_degrees=270,
        ),
    )