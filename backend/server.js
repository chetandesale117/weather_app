import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.OPENWEATHER_API_KEY;
if (!API_KEY) {
  console.warn("Warning: OPENWEATHER_API_KEY not set in environment. See .env.example");
}

// Current weather by city name
app.get('/api/weather/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
    const resp = await axios.get(url);
    res.json(resp.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message, details: err.response?.data || null });
  }
});

// Forecast (5 day / 3 hour) by city name
app.get('/api/forecast/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
    const resp = await axios.get(url);
    res.json(resp.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message, details: err.response?.data || null });
  }
});

// Current weather by coordinates (lat, lon)
app.get('/api/weather/coords', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    if (!lat || !lon) return res.status(400).json({ error: "Missing lat or lon" });
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    const resp = await axios.get(url);
    res.json(resp.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message, details: err.response?.data || null });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
