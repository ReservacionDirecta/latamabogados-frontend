import React, { useState } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onEnter: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    // Delay the actual removal to allow for fade-out animation
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

      <button className="loading-enter-btn" onClick={handleEnter}>
        Ingresar al Sitio
      </button>

      <div className="loading-progress-bar" style={{ width: '100%' }}></div>
    </div>
  );
};

export default LoadingScreen;
