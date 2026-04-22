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
        {/* Main Brand Title */}
        <div className="hero-brand-main">
          <span className="hero-brand-latam">Latam</span>
          <span className="hero-brand-abogados"> Abogados</span>
        </div>

        {/* Support Heading */}
        <h2 className="hero-support-heading">
          Apoyamos a las barras y bufetes de abogados empresarios y profesionales
        </h2>

        {/* Dr. Marcus Ambrose Section */}
        <div className="hero-dr-section">
          <h3 className="hero-dr-name">Dr. Marcus Ambrose</h3>
          <div className="hero-dr-titles">
            <p className="hero-dr-subtitle">Doctorado en leyes internacionales y en EEUU.</p>
            <p className="hero-dr-subtitle">Profesor de Inglés jurídico, conversacional y escritura profesional.</p>
          </div>
          
          <div className="hero-main-cta">
            <a href="/acerca-de" className="hero-cta-yellow">
              {customLabels?.authority || "LEER MÁS"}
            </a>
          </div>
        </div>

        {/* Bottom Experience Section */}
        <div className="hero-bottom-experience">
          <h4 className="hero-exp-title">Más de 40 años de experiencia</h4>
          <p className="hero-exp-detail">
            Tenemos experiencia transnacional, sin límites geográficos, y contamos con amplia habilidad para respaldar a los abogados latinoamericanos trabajando estrechamente con sus clientes y buffetes internacionales en cuestiones relacionadas con los Estados Unidos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
