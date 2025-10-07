import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import axios from "axios";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiBase = import.meta.env.VITE_API_BASE || "http://localhost:5000";

  const fetchByCity = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const w = await axios.get(`${apiBase}/api/weather/${encodeURIComponent(city)}`);
      setWeather(w.data);
      const f = await axios.get(`${apiBase}/api/forecast/${encodeURIComponent(city)}`);
      setForecast(f.data);
    } catch (err) {
      setError(err.response?.data?.error || err.message);
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchByCoords = async (lat, lon) => {
    try {
      setLoading(true);
      setError(null);
      const w = await axios.get(`${apiBase}/api/weather/coords?lat=${lat}&lon=${lon}`);
      setWeather(w.data);
      if (w.data?.name) {
        const f = await axios.get(`${apiBase}/api/forecast/${encodeURIComponent(w.data.name)}`);
        setForecast(f.data);
      } else {
        setForecast(null);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              weather={weather}
              forecast={forecast}
              fetchByCity={fetchByCity}
              fetchByCoords={fetchByCoords}
              loading={loading}
              error={error}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
