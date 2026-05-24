import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import FreeMaterialModal from './FreeMaterialModal';

const FloatingBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if user already dismissed it in this session (ignore in local development for easier testing)
    const dismissed = sessionStorage.getItem('bannerDismissed');
    const isDev = import.meta.env.DEV;
    if (dismissed && !isDev) {
      setIsDismissed(true);
      return;
    }

    // Hide banner on the registration page so it doesn't overlap
    if (location.pathname === '/agendar-clase-de-inges-profesional') {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Reduced delay to 2 seconds for better UX and faster testing

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('bannerDismissed', 'true');
  };

  if ((!isVisible || isDismissed) && !isModalOpen) return null;

  return (
    <>
      {isVisible && !isDismissed && (
        <div className="ma-floating-banner">
          <button 
            onClick={handleClose}
            className="ma-banner-close"
            aria-label="Cerrar banner"
          >
            <X size={16} />
          </button>

          {/* Contenedor de la imagen */}
          <div className="ma-banner-img-container">
            <img 
              src="/mpabe9cg-y-CIVIL-LAW-2.png" 
              alt="Common Law vs Civil Law" 
              className="ma-banner-img"
            />
          </div>

          {/* Contenedor del contenido y CTA */}
          <div className="ma-banner-content">
            <h4 className="ma-banner-title">
              🎁 PDF 100% GRATIS
            </h4>
            <p className="ma-banner-text">
              Descarga <strong>GRATIS</strong> la guía <strong>"Common Law vs Civil Law"</strong> del Dr. Ambrose al registrarte. ¡Sin costo alguno!
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="ma-btn-black ma-banner-btn"
              style={{ border: 'none', cursor: 'pointer', width: '100%' }}
            >
              DESCARGAR GRATIS
            </button>
          </div>

          <style>{`
            .ma-floating-banner {
              position: fixed;
              bottom: 20px;
              right: 20px;
              backgroundColor: #ffffff;
              border-radius: 16px;
              box-shadow: 0 10px 30px rgba(0,0,0,0.22);
              z-index: 9999;
              overflow: hidden;
              animation: slideUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              display: flex;
              background: #fff;
              border: 1px solid rgba(0,0,0,0.08);
            }

            .ma-banner-close {
              position: absolute;
              top: 10px;
              right: 10px;
              background: rgba(255,255,255,0.9);
              border: none;
              border-radius: 50%;
              width: 28px;
              height: 28px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              z-index: 10;
              color: #333;
              box-shadow: 0 2px 6px rgba(0,0,0,0.15);
              transition: background 0.2s ease;
            }

            .ma-banner-close:hover {
              background: #ffffff;
            }

            .ma-banner-title {
              margin: 0 0 6px 0;
              font-size: 1.05rem;
              font-weight: 800;
              color: #1e1f33;
            }

            .ma-banner-text {
              margin: 0 0 14px 0;
              font-size: 0.85rem;
              color: #555;
              line-height: 1.4;
            }

            .ma-banner-btn {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 12px;
              background-color: var(--latam-maroon, #8e3d4a);
              color: white;
              border-radius: 8px;
              text-decoration: none;
              font-weight: bold;
              font-size: 0.85rem;
              transition: opacity 0.2s ease, transform 0.1s ease;
              text-align: center;
            }

            .ma-banner-btn:hover {
              opacity: 0.92;
            }

            .ma-banner-btn:active {
              transform: scale(0.98);
            }

            /* --- DESKTOP VIEW (Tarjetas verticales, imagen natural encima con hover animado) --- */
            @media (min-width: 768px) {
              .ma-floating-banner {
                width: 380px; /* Aumenta un ~20% el tamaño del pop-up en escritorio */
                flex-direction: column;
                align-items: stretch;
                transition: box-shadow 0.3s ease, transform 0.3s ease;
              }

              .ma-floating-banner:hover {
                box-shadow: 0 14px 38px rgba(0,0,0,0.28);
                transform: translateY(-4px);
              }

              .ma-banner-img-container {
                width: 100%;
                display: block;
                background: #fff;
                max-height: 0;
                opacity: 0;
                overflow: hidden;
                transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
              }

              .ma-floating-banner:hover .ma-banner-img-container {
                max-height: 500px; /* Escalado a juego con el ancho mayor */
                opacity: 1;
                border-bottom: 1px solid #f0f0f0;
              }

              .ma-banner-img {
                width: 100%;
                height: auto;
                max-height: 480px; /* Escalado a juego con el ancho mayor */
                display: block;
                object-fit: contain;
                object-position: center top;
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;
                transform: scale(0.96);
                transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
              }

              .ma-floating-banner:hover .ma-banner-img {
                transform: scale(1);
              }

              .ma-banner-content {
                padding: 24px;
              }
            }

            /* --- MOBILE VIEW (Compacto horizontal, miniatura natural al lado con hover animado) --- */
            @media (max-width: 767px) {
              .ma-floating-banner {
                left: 15px;
                right: 15px;
                bottom: 15px;
                width: auto;
                flex-direction: row;
                align-items: center;
                border-radius: 14px;
                transition: box-shadow 0.3s ease;
              }

              .ma-banner-img-container {
                flex-shrink: 0;
                width: 0;
                opacity: 0;
                overflow: hidden;
                display: flex;
                align-items: center;
                padding: 15px 0;
                transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, padding 0.4s ease;
              }

              .ma-floating-banner:hover .ma-banner-img-container {
                width: 110px;
                opacity: 1;
                padding: 15px 0 15px 15px;
              }

              .ma-banner-img {
                width: 100%;
                height: auto;
                display: block;
                object-fit: contain;
                border-radius: 6px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                transform: scale(0.9);
                transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
              }

              .ma-floating-banner:hover .ma-banner-img {
                transform: scale(1);
              }

              .ma-banner-content {
                padding: 15px 15px 15px 12px;
                flex-grow: 1;
              }

              .ma-banner-title {
                font-size: 0.95rem;
                margin-bottom: 4px;
              }

              .ma-banner-text {
                font-size: 0.75rem;
                margin-bottom: 10px;
              }

              .ma-banner-btn {
                padding: 10px;
                font-size: 0.75rem;
              }

              .ma-banner-close {
                top: 8px;
                right: 8px;
                width: 24px;
                height: 24px;
              }
            }

            @keyframes slideUp {
              from {
                transform: translateY(120px);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }
          `}</style>
        </div>
      )}

      <FreeMaterialModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default FloatingBanner;
