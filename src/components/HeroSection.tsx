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

const HeroSection: React.FC<HeroSectionProps> = ({ customLabels }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section id="inicio" className="hero-section">
      {/* ── Fondo: video + imagen grisada ── */}
      <div className="hero-bg">
        <img
          className="hero-bg-image"
          src="/wp-content/uploads/revslider/inicio/latam-abogados-marcus-ambrose_1.jpeg"
          alt="Latam Abogados"
        />
        <video
          ref={videoRef}
          className="hero-bg-video"
          autoPlay muted loop playsInline preload="auto"
        >
          <source
            src="/wp-content/uploads/revslider/inicio/latam-abogados-marcus-ambrose.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-bg-overlay" />
      </div>

      {/* ── Contenido Vertical ── */}
      <div className="hero-content">
        <div className="hero-brand">
          <span className="hero-brand-latam">Latam</span>
          <span className="hero-brand-abogados"> Abogados</span>
        </div>

        <h2 className="hero-main-title">
          Especialista en Inglés Jurídico y Legal English
        </h2>

        {/* ── Stack de Servicios ── */}
        <div className="hero-services-grid">
          {/* Item 1 */}
          <div className="hero-service-card">
            <p className="hero-service-text">
              <strong>Domine el Inglés Jurídico y Legal English práctico para el contexto global</strong>
            </p>
            <a href="/agendar-clase-de-inges-profesional" className="hero-cta-btn hero-cta-primary">
              {customLabels?.service1 || "LEER MÁS"}
            </a>
          </div>

          {/* Item 2 */}
          <div className="hero-service-card">
            <p className="hero-service-text">
              Si usted tiene clientes, casos o asuntos relacionados en EE.UU, podemos ayudarles
            </p>
            <a href="/servicios" className="hero-cta-btn hero-cta-secondary">
              {customLabels?.service2 || "LEER MÁS"}
            </a>
          </div>
        </div>

        {/* ── SECCIÓN DE AUTORIDAD ── */}
        <div className="hero-authority-badge">
          <div className="authority-thumbnail">
            <img src="/dr-marcus-ambrose-abogado-1.png" alt="Dr. Marcus Ambrose" />
          </div>
          
          <div className="authority-main-content">
            <div className="authority-info">
              <p className="hero-doctor-name">Dr. Marcus Ambrose</p>
              <p className="hero-subtitle-bottom">Doctorado en leyes en EE.UU y Profesor</p>
              <p className="hero-experience-text">Más de 40 años de experiencia</p>
            </div>
            <div className="authority-action">
              <a href="/acerca-de" className="hero-cta-btn hero-cta-outline">
                {customLabels?.authority || "LEER MÁS"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
