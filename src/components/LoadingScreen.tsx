import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onEnter: () => void;
  isReady: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onEnter, isReady }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (isReady) {
      setShowButton(true);
    }
  }, [isReady]);

  // Fallback timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 8000);
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

      <div className="loading-controls">
        {showButton ? (
          <button className="loading-enter-btn animate-reveal-in" onClick={handleEnter}>
            INGRESAR CON AUDIO
          </button>
        ) : (
          <div className="loading-status">
            <div className="loading-spinner"></div>
            <p className="loading-status-text">Cargando experiencia jurídica...</p>
          </div>
        )}
      </div>

      <div className="loading-footer">
        <p>Optimizado para una experiencia premium</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
