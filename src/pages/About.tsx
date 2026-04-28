import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import SEO from '../components/SEO';
import { Book, Download, X } from 'lucide-react';
import WelcomeVideo from '../components/WelcomeVideo';
import './AgendarClase.css'; 
import './About.css';

const About: React.FC = () => {
  const { t } = useTranslation();
  const [showYouTube, setShowYouTube] = useState(false);
  const [showWelcomeVideo, setShowWelcomeVideo] = useState(false);
  const [showQR, setShowQR] = useState(false);

  React.useEffect(() => {
    // Show welcome video automatically on About page
    const timer = setTimeout(() => {
      setShowWelcomeVideo(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="agendar-page about-page">
      <SEO 
        title={t('about.title')} 
        description={t('about.lead')}
        keywords="marcus ambrose, abogado ee.uu, juris doctor, inglés jurídico, legal english expert, profesor de derecho"
      />
      <HeaderBar />
      
      <main className="agendar-main">
        <div className="container-narrow">

          <div className="ma-top">
            <h2 className="ma-title" dangerouslySetInnerHTML={{ __html: t('about.title') }}></h2>
            
            <div className="about-hero">
              <div className="about-photo-wrapper">
                <div className="photo-container">
                  <img 
                    src="/dr-marcus-ambrose-abogado-1.png" 
                    alt="Dr. Marcus Ambrose" 
                    className="about-photo"
                  />
                  <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}>
                    <button onClick={() => setShowWelcomeVideo(true)} className="hero-btn-intro" style={{ background: 'white' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                      VER INTRO
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="about-intro-text">
                
                <p className="ma-lead">
                  {t('about.lead')}
                </p>
                <p className="about-secondary-text">
                  {t('about.secondary_text')}
                </p>
              </div>
            </div>
          </div>

          <div className="ma-grid-single">
            {/* Trayectoria Principal */}
            <div className="ma-card">
              <h3 className="ma-card-title">{t('about.professional_trajectory')}</h3>
              
              <div className="about-buttons-row">
                <a 
                  href="/Marcus Ambrose CV + Diploma.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ma-btn-black"
                >
                  <Download size={20} /> {t('about.download_cv')}
                </a>

                <a 
                  href="/articulos-y-publicaciones" 
                  className="ma-btn-black"
                >
                  <Book size={20} /> {t('about.read_publications')}
                </a>
              </div>

              {/* VCard Box with QR */}
              <div className="vcard-card">
                <div className="vcard-content">
                  <div className="vcard-qr-wrapper" onClick={() => setShowQR(true)} style={{ cursor: 'pointer' }}>
                    <img src="/qr-vcard.png" alt="QR VCard Dr. Marcus Ambrose" className="vcard-qr" />
                  </div>
                  <div className="vcard-info">
                    <h4 className="vcard-title">{t('about.digital_contact')}</h4>
                    <p className="vcard-text">{t('about.digital_contact_text')}</p>
                    <a 
                      href="/marcus-ambrose.vcf" 
                      className="ma-btn-black"
                      style={{ marginTop: '15px' }}
                    >
                      <Download size={20} /> {t('about.download_vcard')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Secciones de Noticias y Campaña */}
          </div>
        </div>

        <WelcomeVideo 
          isVisible={showWelcomeVideo}
          isActive={showWelcomeVideo}
          onClose={() => setShowWelcomeVideo(false)} 
        />

        {/* Modal de Video YouTube */}
        {showYouTube && (
          <div className="video-overlay" onClick={() => setShowYouTube(false)}>
            <div className="video-modal" onClick={e => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setShowYouTube(false)}>
                <X size={24} />
              </button>
              <div className="video-container-iframe">
                <iframe 
                  src="https://www.youtube.com/embed/d4AZZDYBYcw?autoplay=0&controls=1&rel=0" 
                  title="Marcus Ambrose Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
        {/* Modal QR Enlarged */}
        {showQR && (
          <div className="video-overlay" onClick={() => setShowQR(false)}>
            <div className="video-modal qr-expanded-modal" onClick={e => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setShowQR(false)}>
                <X size={24} />
              </button>
              <img src="/qr-vcard.png" alt="QR Large" className="qr-expanded-img" />
            </div>
          </div>
        )}
      </main>

      <FooterBar />
    </div>
  );
};

export default About;
