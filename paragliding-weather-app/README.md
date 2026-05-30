# Paragliding Weather App

Monorepo scaffold for a paragliding weather tool with a FastAPI backend, React + TypeScript frontend, Redis caching, Docker orchestration, and CI.

## Implementation Plan

The repo follows the staged plan captured in `plan.md`:

1. Skeleton: workspace, config, Docker, and CI.
2. Backend core: health check, Redis lifespan, weather schemas, cache-aside weather endpoint.
3. Frontend foundation: conversion utilities and Windy embed component.
4. Integration: spot detail view, weather hook, and flyability logic.

## Issue Map

- Issue #2: backend health and Redis connection lifecycle.
- Issue #3: weather data contract and upstream fetch service.
- Issue #4: cache-aside weather retrieval with Redis TTL.
- Issue #7: Windy iframe embed.
- Issue #8: unit conversion utilities.

## Layout

- `backend/`: async FastAPI service and Redis cache helpers.
- `frontend/`: Vite React app with weather UI and shared types.
- `docker-compose.yml`: local orchestration for api, web, and redis.
- `.github/workflows/ci.yml`: push CI for backend and frontend tests.