import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  isReady: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isReady }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isReady) {
      setIsExiting(true);
    }
  }, [isReady]);

  return (
    <div className={`loading-screen ${isExiting ? 'fade-out' : ''}`}>
      <div className="loading-brand">
        <span className="loading-brand-latam">LATAM</span>
        <span className="loading-brand-abogados">ABOGADOS</span>
        <p className="loading-subtitle pulse-text">Dr. Marcus Ambrose</p>
      </div>

      <div className="loading-status">
        <div className="loading-spinner"></div>
        <p className="loading-status-text">Cargando experiencia jurídica...</p>
      </div>

      <div className="loading-footer">
        <p>Optimizado para una experiencia premium</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
