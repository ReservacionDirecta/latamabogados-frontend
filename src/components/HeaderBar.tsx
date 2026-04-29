import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    // Use navigate(-1) to go back in history
    navigate(-1);
  };

  return (
    <header id="header" className="ct-header">
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
              <div 
                role="button"
                onClick={handleBack} 
                className="ct-back-to-home"
                style={{ cursor: 'pointer' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                {t('contact.back_to_start').toUpperCase()}
              </div>
            )}
          </div>
          <div className="ct-main-end">
            <div className="header-lang-container">
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
