Start with config files needed.
Phase 1: The "Skeleton" (Environment & CI)
Goal: Establish the monorepo orchestration so tests can actually run.
Setup Workspace: Initialize the root directory, /backend, and /frontend folders.
Docker Orchestration: Create a docker-compose.yml that defines api, web, and redis.
CI Configuration: (Optional but recommended) Set up a GitHub Action to run pytest and vitest on every push to ensure no regressions.
Install Dependencies:
Backend: fastapi, uvicorn, redis, pydantic-settings, httpx, pytest, pytest-asyncio.
Frontend: vite, react, typescript, vitest, tailwind, @testing-library/react.
Phase 2: Backend Core (FastAPI + Redis)
Method: Red → Green → Refactor (using pytest)
1. Health & Connection (Issue #2)
Status: Run pytest tests/test_main.py. Expected: FAIL.
Action: Implement main.py with the /healthz endpoint and the Redis connection lifespan.
Result: Tests pass. Redis is verified as the primary cache.
2. The Data Contract (Issue #3)
Action: Define Pydantic models in schemas/weather.py. These act as the "source of truth" for both the API and the frontend types.
Logic: Implement the weather_api.py service to fetch from external providers.
3. Cache-Aside Implementation (Issue #4)
Status: Run pytest tests/test_weather.py. Expected: FAIL.
Action: Implement the GET /api/weather/{spot_id} endpoint.
Logic:
Check Redis for weather:{spot_id}.
If missing, fetch from weather_api.py.
Store in Redis with a 10-minute TTL (EX 600).
Result: Tests pass. System is now "Redis-aware."
Phase 3: Frontend Foundation (React + TS)
Method: Red → Green → Refactor (using vitest)
1. Utility Hardening (Issue #8)
Status: Run vitest conversions.test.ts. Expected: FAIL.
Action: Write the math logic in utils/conversions.ts for m/s to Knots/Mph and degree-to-cardinal strings.
Result: Core logic is mathematically sound before any UI is built.
2. The Windy Canvas (Issue #7)
Status: Run vitest WindyEmbed.test.tsx. Expected: FAIL.
Action: Build the WindyEmbed component.
Implementation:
Construct the iframe URL using URLSearchParams.
Hardcode the loading="lazy" attribute.
Ensure the iframe title matches the test's regex.
Result: Visual core is ready for integration.
Phase 4: Integration & Flyability Logic
Goal: Connect the verified pieces into a functional paragliding tool.
1. Spot Detail View
Build a page that fetches weather from your FastAPI backend using a custom useWeatherData hook.
Display the raw metrics (Wind, Gusts) using the verified conversion utils.
2. Flyability Algorithm (Backend)
Add a method to your Pydantic schema that calculates is_flyable based on paragliding-specific thresholds (e.g., wind <15 mph, gust spread <5 mph).
TDD Note: Add a new test case to test_weather.py that provides "dangerous" wind speeds and asserts is_flyable: false.