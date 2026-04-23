import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import SEO from '../components/SEO';
import { Book, Download, X } from 'lucide-react';
import './AgendarClase.css'; 
import './About.css';

const About: React.FC = () => {
  const { t } = useTranslation();
  const [showDiploma, setShowDiploma] = useState(false);
  const [showVideo, setShowVideo] = useState(false); // Disabled autoplay on enter
  const [showQR, setShowQR] = useState(false);

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
            <h2 className="ma-title">{t('about.title')}</h2>
            
            <div className="about-hero">
              <div className="about-photo-wrapper">
                <div className="photo-container">
                  <img 
                    src="/dr-marcus-ambrose-abogado-1.png" 
                    alt="Dr. Marcus Ambrose" 
                    className="about-photo"
                  />
                  
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
                  href="/Marcus Ambrose CV.pdf" 
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

        {/* Modal del Diploma */}
        {showDiploma && (
          <div className="diploma-overlay" onClick={() => setShowDiploma(false)}>
            <div className="diploma-modal" onClick={e => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setShowDiploma(false)}>
                <X size={24} />
              </button>
              <div className="diploma-header">
                <h3>Juris Doctor Diploma</h3>
              </div>
              <div className="diploma-body">
                <img src="/diplom.jpeg" alt="Juris Doctor Diploma" />
              </div>
            </div>
          </div>
        )}

        {/* Modal de Video YouTube */}
        {showVideo && (
          <div className="video-overlay" onClick={() => setShowVideo(false)}>
            <div className="video-modal" onClick={e => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setShowVideo(false)}>
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
            <div className="video-modal" style={{ maxWidth: '400px', background: 'white', padding: '20px', borderRadius: '12px' }} onClick={e => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setShowQR(false)}>
                <X size={24} />
              </button>
              <div style={{ textAlign: 'center' }}>
                <img src="/qr-vcard.png" alt="QR Large" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <p style={{ marginTop: '15px', fontWeight: 'bold', color: 'var(--latam-black)' }}>{t('about.scan_save')}</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <FooterBar />
    </div>
  );
};

export default About;
