from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.api.router import api_router
from app.core.redis import close_redis, init_redis


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_redis()
    try:
        yield
    finally:
        await close_redis()


app = FastAPI(title="Paragliding Weather API", lifespan=lifespan)

app.include_router(api_router)


@app.get("/healthz")
async def healthz() -> dict[str, str]:
    return {"status": "ok"}