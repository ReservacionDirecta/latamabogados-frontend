import React from 'react';
import './FooterBar.css';

/**
 * FooterBar — Réplica del footer de Blocksy del sitio WordPress
 * Fondo maroon, logo blanco, anti-spam, copyright, links legales, social
 */
const FooterBar: React.FC = () => {
  return (
    <footer id="footer-bar" className="ct-footer">
      {/* ── TOP ROW ── */}
      <div className="ct-footer-top">
        <div className="ct-container">
          <div className="ct-footer-logo">
            <img
              src="/wp-content/uploads/2024/01/logo-footer-1-1.png"
              alt="LatamAbogados.com"
            />
          </div>
        </div>
      </div>

      {/* ── BOTTOM ROW ── */}
      <div className="ct-footer-bottom">
        <div className="ct-container">
          <div className="ct-footer-copy">
            <p>Latam Abogados. Todos los derechos reservados <b>© {new Date().getFullYear()}</b></p>
          </div>
          <div className="ct-footer-legal">
            <p>
              Avisos legales: - <a href="#">Aviso de Privacidad</a> - <a href="#">Cookie</a>
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
