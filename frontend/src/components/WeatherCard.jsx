import React from 'react';

export default function WeatherCard({ data }) {
  const icon = data?.weather?.[0]?.icon;
  const desc = data?.weather?.[0]?.description;

  return (
    <div className="card">
      <h2>{data.name}, {data.sys?.country}</h2>
      <div className="row">
        <div className="temp">{Math.round(data.main?.temp)}°C</div>
        <div className="details">
          <div>{desc}</div>
          <div>Humidity: {data.main?.humidity}%</div>
          <div>Wind: {data.wind?.speed} m/s</div>
        </div>
        {icon && <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={desc} />}
      </div>
    </div>
  );
}
