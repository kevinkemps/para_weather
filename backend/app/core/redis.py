from typing import Any

from redis.asyncio import Redis

from app.core.config import settings

redis_client: Redis | None = None


async def init_redis() -> None:
    global redis_client
    if redis_client is None:
        redis_client = Redis.from_url(settings.redis_url, decode_responses=True)
        await redis_client.ping()


async def close_redis() -> None:
    global redis_client
    if redis_client is not None:
        await redis_client.aclose()
        redis_client = None


async def get_redis() -> Redis:
    if redis_client is None:
        await init_redis()
    assert redis_client is not None
    return redis_client


async def redis_get(key: str) -> Any:
    client = await get_redis()
    return await client.get(key)


async def redis_set(key: str, value: str, ttl_seconds: int) -> None:
    client = await get_redis()
    await client.set(key, value, ex=ttl_seconds)