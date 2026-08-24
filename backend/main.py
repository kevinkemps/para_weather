from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.api.router import api_router
from app.core.db import Base, engine
from app.core.redis import close_redis, init_redis
from app.core.storage import ensure_bucket_exists


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_redis()
    ensure_bucket_exists()
    from app.models import image  # noqa: F401

    Base.metadata.create_all(bind=engine)
    try:
        yield
    finally:
        await close_redis()


app = FastAPI(title="Paragliding Weather API", lifespan=lifespan)

app.include_router(api_router)


@app.get("/healthz")
async def healthz() -> dict[str, str]:
    return {"status": "ok"}
