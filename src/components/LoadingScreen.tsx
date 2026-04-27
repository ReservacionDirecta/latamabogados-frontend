import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onEnter: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show the button as a fallback if the video takes more than 5 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <div className={`loading-screen ${isExiting ? 'fade-out' : ''}`}>
      <div className="loading-brand">
        <span className="loading-brand-latam">LATAM</span>
        <span className="loading-brand-abogados">ABOGADOS</span>
        <p className="loading-subtitle pulse-text">Dr. Marcus Ambrose</p>
      </div>

      {showButton ? (
        <button className="loading-enter-btn" onClick={handleEnter}>
          Ingresar al Sitio
        </button>
      ) : (
        <div className="loading-status-text">Cargando experiencia...</div>
      )}

      <div className="loading-progress-bar" style={{ width: '100%' }}></div>
    </div>
  );
};

export default LoadingScreen;
