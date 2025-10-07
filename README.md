# Weather App Starter (React + Node.js)

## Features
- React (Vite) frontend
- Express backend with endpoints:
  - `GET /api/weather/:city` — current weather by city name
  - `GET /api/forecast/:city` — 5-day forecast by city name
  - `GET /api/weather/coords?lat=...&lon=...` — current weather by coordinates
- Uses OpenWeatherMap API (you must provide an API key)

## Quick start

1. Copy `.env.example` in `backend/` to `backend/.env` and set your `OPENWEATHER_API_KEY`.

2. Install backend deps and run:

```bash
cd backend
npm install
npm run dev   # requires nodemon (devDeps included), or use npm start
```

3. Install frontend deps and run:

```bash
cd frontend
npm install
npm run dev
```

4. Open the frontend (Vite will show the local URL, usually http://localhost:5173).
   The frontend defaults to calling `http://localhost:5000` for API requests. If your backend runs on a different host/port, set `VITE_API_BASE` in `frontend/.env`.

## Notes
- This starter uses plain CSS to keep setup minimal.
- For production, secure your API key and consider server-side caching.
