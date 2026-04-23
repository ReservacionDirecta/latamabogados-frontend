import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './HeaderBar.css';

/**
 * HeaderBar — Réplica del header de Blocksy del sitio WordPress
 * Top bar: social icons + "Somos socialmente responsables"
 * Main bar: Logo + nav links + CTA button
 */
const HeaderBar: React.FC = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Lock scroll when menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header id="header" className={`ct-header ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      {/* ── MAIN NAV BAR ── */}
      <div className="ct-header-main">
        <div className="ct-container">
          <div className="ct-main-start">
            <Link to="/" className="site-logo-container">
              <img
                src="/wp-content/uploads/2024/01/latam-abogados-marcus-ambrose-5.png"
                alt="LATAM ABOGADOS"
                className="default-logo"
                width="289"
                height="40"
              />
            </Link>
            {location.pathname !== '/' && (
              <Link to="/" className="ct-back-to-home">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                {t('contact.back_to_start').toUpperCase()}
              </Link>
            )}
          </div>
          <div className="ct-main-end">
            <div style={{ marginRight: '20px' }}>
              <LanguageSwitcher />
            </div>
            <div className="ct-social-text">
              <span style={{ color: 'rgb(30, 31, 51)', fontWeight: 'bold' }}>{t('social.responsible')}</span>{' '}
              <Link to="/nuestra-conciencia-social" style={{ color: '#8e3d4a', fontWeight: 'bold', textDecoration: 'none' }}>{t('nav.see_more')} →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU PANEL ── */}
      <div className="ct-mobile-menu-panel">
        <button 
          className="ct-mobile-close" 
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Cerrar menú"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <nav className="mobile-nav">
          <ul>
            <li className={location.pathname === '/' ? 'current' : ''}>
              <Link to="/">{t('nav.home').toUpperCase()}</Link>
            </li>
            <li className={location.pathname === '/vcard' ? 'current' : ''}>
              <Link to="/vcard">VCARD</Link>
            </li>
            <li className={location.pathname === '/contacto' ? 'current' : ''}>
              <Link to="/contacto">{t('nav.contact').toUpperCase()}</Link>
            </li>
          </ul>
        </nav>

        <div className="mobile-actions">
          <Link to="/agendar-clase-de-inges-profesional" className="ct-button-ghost mobile-cta">
            {t('nav.classes')}
          </Link>

          <div className="mobile-responsibility">
            <span className="resp-text">Somos socialmente responsables.</span>{' '}
            <Link to="/nuestra-conciencia-social" className="resp-link">Ver más →</Link>
          </div>

          <div className="mobile-login-section">
            <span className="login-label">{t('nav.login').toUpperCase()}</span>
            <div className="login-icon-box">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8e3d4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
          </div>

          <div className="mobile-socials">
            <a href="https://www.facebook.com/latamabogados1/" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#8e3d4a"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://wa.link/up33uh" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#8e3d4a"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
