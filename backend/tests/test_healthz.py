import asyncio
import importlib
import sys
from pathlib import Path


def test_healthz_returns_ok(monkeypatch):
    monkeypatch.setenv("DATABASE_URL", "sqlite+pysqlite:///:memory:")
    monkeypatch.setenv("S3_ACCESS_KEY_ID", "test")
    monkeypatch.setenv("S3_SECRET_ACCESS_KEY", "test")
    monkeypatch.setenv("S3_BUCKET", "test-bucket")
    monkeypatch.setenv("S3_ENDPOINT_URL", "http://localhost:3900")

    sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
    main = importlib.import_module("main")

    assert asyncio.run(main.healthz()) == {"status": "ok"}
