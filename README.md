# Paragliding Weather App

Monorepo scaffold for a paragliding weather tool with a FastAPI backend, React + TypeScript frontend, Redis caching, Docker orchestration, and CI.

## Implementation Plan

The repo follows a frontend-first approach:

1. Landing page: Hero image with navigation.
2. Frontend pages: Spots directory, spot detail views, components.
3. Web server & backend: FastAPI, Redis caching, weather endpoints.
4. Integration: Wire frontend to backend, add flyability logic.

## Issue Map

- Issue #1: Hero landing page with main photo.
- Issue #2: Navigation and layout components.
- Issue #3: Spots directory page.
- Issue #4: Unit conversion utilities (m/s → knots/mph, degrees → cardinal).
- Issue #5: Windy embed iframe component.
- Issue #6: Spot detail page.
- Issue #7: Backend health check and Redis lifespan.
- Issue #8: Weather data contract (Pydantic schemas).
- Issue #9: Cache-aside weather endpoint with Redis TTL.
- Issue #10: Custom useWeatherData hook.
- Issue #11: Flyability algorithm and status display.

## Layout

- `backend/`: async FastAPI service and Redis cache helpers.
- `frontend/`: Vite React app with weather UI and shared types.
- `docker-compose.yml`: local orchestration for api, web, and redis.
- `.github/workflows/ci.yml`: push CI for backend and frontend tests.