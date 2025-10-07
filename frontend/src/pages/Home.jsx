import React from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastList from "../components/ForecastList";
import "../styles.css";

export default function Home({ weather, forecast, fetchByCity, fetchByCoords, loading, error }) {
  return (
    <div className="page-content home-page">
      {/* Search bar */}
      <SearchBar onSearch={fetchByCity} onLocate={fetchByCoords} />

      {/* Loading and error messages */}
      {loading && <p className="status-message">Loading...</p>}
      {error && <p className="status-message error">{error}</p>}

      {/* Current weather card */}
      {weather && <WeatherCard data={weather} />}

      {/* Forecast list */}
      {forecast && <ForecastList data={forecast} />}
    </div>
  );
}
