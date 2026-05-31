from fastapi import APIRouter

from app.schemas.spot import Spot

router = APIRouter(prefix="/spots")


@router.get("", response_model=list[Spot])
async def list_spots() -> list[Spot]:
    return []