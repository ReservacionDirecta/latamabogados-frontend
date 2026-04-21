import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderBar.css';

/**
 * HeaderBar — Réplica del header de Blocksy del sitio WordPress
 * Top bar: social icons + "Somos socialmente responsables"
 * Main bar: Logo + nav links + CTA button
 */
const HeaderBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header id="header" className="ct-header">
      {/* ── TOP BAR ── */}
      
      {/* ── MAIN NAV BAR ── */}
      <div className="ct-header-main">
        <div className="ct-container">
          <div className="ct-main-start">
            <Link to="/" className="site-logo-container">
              <img
                src="/wp-content/uploads/2024/01/latam-abogados-marcus-ambrose-5.png"
                alt="LATAM ABOGADOS"
                className="default-logo"
              />
            </Link>
          </div>
          <div className="ct-main-end">
            <nav className="header-menu" aria-label="Menú de cabecera">
              <ul className="menu">
                <li className={location.pathname === '/' ? 'current' : ''}>
                  <Link to="/" className="ct-menu-link">INICIO</Link>
                </li>
                <li className={location.pathname === '/vcard' ? 'current' : ''}>
                  <Link to="/vcard" className="ct-menu-link">VCARD</Link>
                </li>
                <li className={location.pathname === '/servicios' ? 'current' : ''}>
                  <Link to="/servicios" className="ct-menu-link">SERVICIOS</Link>
                </li>
                <li className={location.pathname === '/contacto' ? 'current' : ''}>
                  <Link to="/contacto" className="ct-menu-link">CONTACTO</Link>
                </li>
              </ul>
            </nav>
            <Link to="/agendar-clase-de-inges-profesional" className="ct-button-ghost" aria-label="Programar Clase de Ingles">
              Programar Clase de Ingles
            </Link>
            {/* Mobile hamburger */}
            <button
              className="ct-mobile-trigger"
              aria-label="Menú"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg width="18" height="18" viewBox="0 0 15 15"><path d="M1 15a1 1 0 01-.71-.29 1 1 0 010-1.41l5.8-5.8-5.8-5.8A1 1 0 011.7.29l5.8 5.8 5.8-5.8a1 1 0 011.41 1.41l-5.8 5.8 5.8 5.8a1 1 0 01-1.41 1.41l-5.8-5.8-5.8 5.8A1 1 0 011 15z"/></svg>
              ) : (
                <svg width="18" height="14" viewBox="0 0 18 14"><rect y="0" width="18" height="1.7" rx="1"/><rect y="6.15" width="18" height="1.7" rx="1"/><rect y="12.3" width="18" height="1.7" rx="1"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU PANEL ── */}
      {mobileMenuOpen && (
        <div className="ct-mobile-menu-panel">
          <nav>
            <ul>
              <li><Link to="/vcard" className="ct-menu-link">VCARD</Link></li>
              <li><Link to="/servicios" className="ct-menu-link">SERVICIOS</Link></li>
              <li><Link to="/contacto" className="ct-menu-link">CONTACTO</Link></li>
            </ul>
          </nav>
          <Link to="/agendar-clase-de-inges-profesional" className="ct-button-ghost mobile-cta">
            Programar Clase de Ingles
          </Link>
        </div>
      )}
    </header>
  );
};

export default HeaderBar;
