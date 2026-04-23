import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './FooterBar.css';

/**
 * FooterBar — Réplica del footer de Blocksy del sitio WordPress
 * Fondo maroon, logo blanco, anti-spam, copyright, links legales, social
 */
const FooterBar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer id="footer-bar" className="ct-footer">
      {/* ── TOP ROW ── */}
      <div className="ct-footer-top">
        <div className="ct-container">
          <div className="ct-footer-logo">
            <img
              src="/wp-content/uploads/2024/01/logo-footer-1-1.png"
              alt="LatamAbogados.com"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ── BOTTOM ROW ── */}
      <div className="ct-footer-bottom">
        <div className="ct-container">
          <div className="ct-footer-copy">
            <p>Latam Abogados. {t('footer.rights')} <b>© {new Date().getFullYear()}</b></p>
          </div>
          <div className="ct-footer-legal">
            <p>
              {t('footer.legal_notices')}: - <a href="/aviso-de-privacidad">{t('footer.privacy')}</a> - <a href="/politica-de-cookies">{t('footer.cookies')}</a>
            </p>
          </div>
          <div className="ct-footer-back-to-top">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="ma-btn-black"
              style={{ padding: '8px 16px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <ArrowUp size={14} /> {t('nav.home').toUpperCase()}
            </button>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
