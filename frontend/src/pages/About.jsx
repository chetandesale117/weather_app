import React from "react";
import devImage from "../assets/dev.jpg";
import "../styles.css";

export default function About() {
  return (
    <div className="page-content about-page">
      <h1>About Developer</h1>
      <div className="about-card">
        <img src={devImage} alt="Developer" className="dev-img" />
        <div className="dev-info">
          <h2>Chetan Desale</h2>
          <p>Full Stack Developer | React, Node.js, MongoDB</p>
          <p>Email: chetan@example.com</p>
          <p>Passionate about building innovative web applications.</p>
        </div>
      </div>
    </div>
  );
}
