from fastapi import APIRouter

from app.api.endpoints import spots, weather

api_router = APIRouter(prefix="/api")
api_router.include_router(weather.router, tags=["weather"])
api_router.include_router(spots.router, tags=["spots"])
