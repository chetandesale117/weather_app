import React from 'react';

// The OpenWeatherMap 5-day forecast returns items every 3 hours.
// We'll simplify: show the next 5 unique days' midday forecast when available.
export default function ForecastList({ data }) {
  if (!data || !data.list) return null;

  const byDate = {};
  data.list.forEach(item => {
    const d = new Date(item.dt * 1000);
    const key = d.toISOString().slice(0,10);
    // choose the item closest to 12:00:00 for that day (approx)
    const targetHour = 12;
    const hourDiff = Math.abs(d.getHours() - targetHour);
    if (!byDate[key] || hourDiff < byDate[key].diff) {
      byDate[key] = { item, diff: hourDiff };
    }
  });

  const days = Object.keys(byDate).slice(0,5).map(k => byDate[k].item);

  return (
    <div className="forecast">
      <h3>5-day forecast</h3>
      <div className="forecast-grid">
        {days.map((it, idx) => {
          const d = new Date(it.dt * 1000);
          const icon = it.weather?.[0]?.icon;
          return (
            <div key={idx} className="fcard">
              <div className="date">{d.toLocaleDateString()}</div>
              <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
              <div>{Math.round(it.main.temp)}°C</div>
              <div className="small">{it.weather?.[0]?.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
