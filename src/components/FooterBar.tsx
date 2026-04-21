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
          <div className="ct-footer-anti-spam">
            <p>
              Nunca le enviaremos spam a su correo electrónico, y nunca
              venderemos o comunicaremos su dirección de correo electrónico a los spammers.
            </p>
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
          <div className="ct-footer-socials">
            <a href="https://www.facebook.com/latamabogados1/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 20 20"><path d="M20,10.1c0-5.5-4.5-10-10-10S0,4.5,0,10.1c0,5,3.7,9.1,8.4,9.9v-7H5.9v-2.9h2.5V7.9C8.4,5.4,9.9,4,12.2,4c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L13.9,13h-2.3v7C16.3,19.2,20,15.1,20,10.1z"/></svg>
            </a>
            <a href="https://wa.link/up33uh" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 20 20"><path d="M10,0C4.5,0,0,4.5,0,10c0,1.9,0.5,3.6,1.4,5.1L0.1,20l5-1.3C6.5,19.5,8.2,20,10,20c5.5,0,10-4.5,10-10S15.5,0,10,0zM6.6,5.3c0.2,0,0.3,0,0.5,0c0.2,0,0.4,0,0.6,0.4c0.2,0.5,0.7,1.7,0.8,1.8c0.1,0.1,0.1,0.3,0,0.4C8.3,8.2,8.3,8.3,8.1,8.5C8,8.6,7.9,8.8,7.8,8.9C7.7,9,7.5,9.1,7.7,9.4c0.1,0.2,0.6,1.1,1.4,1.7c0.9,0.8,1.7,1.1,2,1.2c0.2,0.1,0.4,0.1,0.5-0.1c0.1-0.2,0.6-0.7,0.8-1c0.2-0.2,0.3-0.2,0.6-0.1c0.2,0.1,1.4,0.7,1.7,0.8s0.4,0.2,0.5,0.3c0.1,0.1,0.1,0.6-0.1,1.2c-0.2,0.6-1.2,1.1-1.7,1.2c-0.5,0-0.9,0.2-3-0.6c-2.5-1-4.1-3.6-4.2-3.7c-0.1-0.2-1-1.3-1-2.6c0-1.2,0.6-1.8,0.9-2.1C6.1,5.4,6.4,5.3,6.6,5.3z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
