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
  const videoRef = useRef<HTMLVideoElement>(null);
  const welcomeVideoRef = useRef<HTMLVideoElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const [hasPlayed, setHasPlayed] = React.useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    // Intersection Observer for scroll-triggered video
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          setIsVideoPlaying(true);
          setHasPlayed(true);
        }
      },
      { threshold: 0.5 } // More sensitive: trigger at 50% visible
    );

    if (badgeRef.current) {
      observer.observe(badgeRef.current);
    }

    return () => observer.disconnect();
  }, [hasPlayed]);

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

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
              <strong>Si usted tiene clientes, casos o asuntos relacionados en EE.UU., podemos ayudarles</strong>
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

        {/* ── Badge de Autoridad ── */}
        <div className="hero-authority-badge" ref={badgeRef}>
          <div className="authority-thumbnail">
            {isVideoPlaying ? (
              <video
                ref={(el) => {
                  welcomeVideoRef.current = el;
                  if (el) el.play().catch(() => {});
                }}
                className="authority-welcome-video"
                autoPlay
                playsInline
                onEnded={handleVideoEnd}
              >
                <source src="/dr. marcus video intro.mp4" type="video/mp4" />
              </video>
            ) : (
              <img 
                src="/dr-marcus-ambrose-abogado-1.png" 
                alt="Dr. Marcus Ambrose" 
                className="fade-in"
              />
            )}
          </div>
          <div className="authority-main-content">
            <div className="authority-info">
              <p className="hero-doctor-name">Dr. Marcus Ambrose</p>
              <p className="hero-subtitle-bottom">DOCTORADO EN LEYES EN EE.UU Y PROFESOR</p>
              <p className="hero-experience-text">MÁS DE 40 AÑOS DE EXPERIENCIA</p>
            </div>
            <div className="authority-action">
              <a href="/acerca-de" className="hero-cta-btn hero-cta-outline">
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
