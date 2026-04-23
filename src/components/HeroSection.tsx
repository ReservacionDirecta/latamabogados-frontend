import React, { useRef, useEffect } from 'react';
import './HeroSection.css';

/**
 * HeroSection — Réplica fiel del Revolution Slider 6.6.14
 * + la banda inferior "Más de 40 años de experiencia"
 */
interface HeroSectionProps {
  customLabels?: {
    service1?: string;
    service2?: string;
    authority?: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="inicio" className="hero-section">
      {/* ── Fondo: imagen grisada ── */}
      <div className="hero-bg">
        <img
          className="hero-bg-image"
          src="/wp-content/uploads/hero-bg.png"
          alt="Latam Abogados Background"
          style={{ transform: `translateY(${offset * 0.4}px) scale(1.1)` }}
        />
      </div>

      {/* ── Contenido Vertical Principal ── */}
      <div className="hero-content">
        <div className="hero-brand">
          <span className="hero-brand-latam">Latam</span>
          <span className="hero-brand-abogados"> Abogados</span>
        </div>

        <h2 className="hero-main-title">
          Apoyamos a abogados latinoamericanos
        </h2>

        {/* ── Stack de Servicios ── */}
        <div className="hero-services-grid">
          {/* Item 1 */}
          <div className="hero-service-card">
            <p className="hero-service-text">
              <strong>Aprenda inglés jurídico, conversacional y escritura profesional práctico</strong>
            </p>
            <a href="/agendar-clase-de-inges-profesional" className="hero-cta-btn hero-cta-primary">
              LEER MÁS
            </a>
          </div>

          {/* Item 2 */}
          <div className="hero-service-card">
            <p className="hero-service-text">
              <strong>Si usted tiene clientes, casos o asuntos relacionados en EE.UU. podemos ayudarles</strong>
            </p>
            <a href="/agendar-consulta-legal" className="hero-cta-btn hero-cta-secondary">
              LEER MÁS
            </a>
          </div>
        </div>

        {/* ── INDICADOR DE SCROLL PREMIUM ── */}
        <div className="hero-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <p>DESCUBRIR</p>
        </div>

        {/* ── Badge de Autoridad (Reintegrado) ── */}
        <div className="hero-authority-badge">
          <div className="authority-thumbnail">
            <img 
              src="/dr-marcus-ambrose-abogado-1.png" 
              alt="Dr. Marcus Ambrose" 
            />
          </div>
          <div className="authority-main-content">
            <div className="authority-info">
              <p className="hero-doctor-name">Dr. Marcus Ambrose</p>
              <p className="hero-subtitle-bottom">DOCTORADO EN LEYES EN EE.UU Y PROFESOR</p>
              <p className="hero-experience-text">MÁS DE 40 AÑOS DE EXPERIENCIA</p>
            </div>
            <div className="authority-action">
              <a href="/acerca-de" className="hero-cta-btn hero-cta-secondary">
                LEER MÁS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
