import React from "react";
import { useNavigate } from "react-router-dom";
import useSound from "../hooks/useSound";
import clickSound from "../assets/sounds/click.wav"; // Ensure correct path and file extension
import "../App.css";

function LandingPage() {
  const navigate = useNavigate();
  const playClick = useSound(clickSound);

  const handleStart = () => {
    playClick();
    setTimeout(() => {
      navigate("/home");
    }, 300); // delay so click sound plays before redirect
  };

  return (
    <div className="landing-page">
      <div className="landing-particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div className="landing-button-container">
        <button className="start-button" onClick={handleStart}>
          Let's Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
