from pydantic import BaseModel, Field


class WeatherMetrics(BaseModel):
    wind_speed_mps: float = Field(ge=0)
    gust_speed_mps: float = Field(ge=0)
    wind_direction_degrees: float = Field(ge=0, le=360)


class WeatherResponse(BaseModel):
    spot_id: str
    source: str = "cache"
    metrics: WeatherMetrics

    @property
    def is_flyable(self) -> bool:
        return self.metrics.wind_speed_mps < 6.7 and (self.metrics.gust_speed_mps - self.metrics.wind_speed_mps) < 2.2