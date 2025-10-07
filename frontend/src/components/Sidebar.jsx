import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>WeatherApp</h2>
      <nav>
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
      </nav>
    </div>
  );
}
