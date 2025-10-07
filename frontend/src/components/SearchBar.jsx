import React, { useState } from 'react';

export default function SearchBar({ onSearch, onLocate }) {
  const [city, setCity] = useState('');

  const submit = (e) => {
    e?.preventDefault();
    if (!city.trim()) return;
    onSearch(city.trim());
  };

  return (
    <form className="searchbar" onSubmit={submit}>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name (e.g., London)"
      />
      <button type="submit">Search</button>
      <button type="button" onClick={onLocate}>Use my location</button>
    </form>
  );
}
