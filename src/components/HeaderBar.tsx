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
            <div style={{ marginRight: '20px' }} className="desktop-lang">
              <LanguageSwitcher />
            </div>
            <div className="ct-social-text">
              <span style={{ color: 'rgb(30, 31, 51)', fontWeight: 'bold' }}>{t('social.responsible')}</span>{' '}
              <Link to="/nuestra-conciencia-social" style={{ color: '#8e3d4a', fontWeight: 'bold', textDecoration: 'none' }}>{t('nav.see_more')} →</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
