import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
          alt="Latam Abogados"
          fetchPriority="high"
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
          {t('hero.main_title')}
        </h2>

        {/* ── Stack de Servicios ── */}
        <div className="hero-services-grid">
          {/* Item 1 */}
          <div className="hero-service-card">
            <p className="hero-service-text">
              <strong>{t('hero.service1_text')}</strong>
            </p>
            <a href="/agendar-clase-de-inges-profesional" className="hero-cta-btn hero-cta-primary">
              {t('hero.read_more')}
            </a>
          </div>

          {/* Item 2 */}
          <div className="hero-service-card">
            <p className="hero-service-text">
              <strong>{t('hero.service2_text')}</strong>
            </p>
            <a href="/agendar-consulta-legal" className="hero-cta-btn hero-cta-secondary">
              {t('hero.read_more')}
            </a>
          </div>
        </div>

        {/* ── INDICADOR DE SCROLL PREMIUM ── */}
        <div className="hero-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <p>{t('hero.discover')}</p>
        </div>

        {/* ── Badge de Autoridad (Reintegrado) ── */}
        <div className="hero-authority-badge">
          <div className="authority-thumbnail">
            <img 
              src="/dr-marcus-ambrose-abogado-1.png" 
              alt="Dr. Marcus Ambrose" 
              loading="lazy"
              width="80"
              height="80"
            />
          </div>
          <div className="authority-main-content">
            <div className="authority-info">
              <p className="hero-doctor-name">Dr. Marcus Ambrose</p>
              <p className="hero-subtitle-bottom">{t('hero.authority_subtitle')}</p>
              <p className="hero-experience-text">{t('hero.experience_text')}</p>
            </div>
            <div className="authority-action">
              <a href="/acerca-de" className="hero-cta-btn hero-cta-secondary">
                {t('hero.read_more')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
