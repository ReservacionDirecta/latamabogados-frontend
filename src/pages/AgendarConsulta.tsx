import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import BookingModal from '../components/BookingModal';
import SEO from '../components/SEO';
import './AgendarClase.css'; 

const AgendarConsulta: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="agendar-page">
      <SEO 
        title={t('agendar_consulta.title')} 
        description={t('agendar_consulta.lead')}
        keywords="consulta legal abogado usa, servicios legales estados unidos, abrir cuenta bancaria usa, constituir empresa usa"
      />
      <HeaderBar />
      
      <main className="agendar-main">
        <div className="container-narrow">
          <div className="ma-top-horizontal">
            <div className="ma-photo">
              <img src="/Dr. Marcus Ambrose.png" alt="Dr. Marcus Ambrose - Asesoría Legal Internacional" />
            </div>

            <div className="ma-header-content">
              <h2 className="ma-title">{t('agendar_consulta.title')}</h2>
            </div>
          </div>

          <p className="ma-lead-bottom">
            {t('agendar_consulta.lead')}
          </p>

          <div className="ma-grid-single">
            <div className="ma-card">
              <h3 className="ma-card-title">{t('agendar_consulta.services_title')}</h3>
              <p className="ma-intro">
                {t('agendar_consulta.services_intro')}
              </p>

              <ul className="ma-features">
                <li>
                  <span className="ma-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm1 17.93V20a1 1 0 0 1-2 0v-1.06a4.5 4.5 0 0 1-3.5-4.38 1 1 0 0 1 2 0 2.5 2.5 0 0 0 5 0c0-1.38-1.1-1.88-3-2.43-2.08-.61-4.5-1.37-4.5-4.07A4.48 4.48 0 0 1 11 3.06V2a1 1 0 0 1 2 0v1.06a4.5 4.5 0 0 1 3.5 4.38 1 1 0 0 1-2 0 2.5 2.5 0 0 0-5 0c0 1.13.89 1.55 2.82 2.12 2.16.64 4.68 1.45 4.68 4.38A4.48 4.48 0 0 1 13 18.93Z"></path></svg>
                  </span>
                  <span>{t('agendar_consulta.service_consult')}</span>
                </li>

                <li>
                  <span className="ma-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2a1 1 0 0 0-2 0v2H8V2a1 1 0 0 0-2 0v2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10h16Zm0-10H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></path></svg>
                  </span>
                  <span>{t('agendar_consulta.service_project')}</span>
                </li>

                <li>
                  <span className="ma-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                  </span>
                  <span>{t('agendar_consulta.service_corp')}</span>
                </li>
              </ul>

              <div className="ma-actions">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="ma-btn ma-btn-whatsapp"
                >
                  <i className="fab fa-whatsapp"></i> {t('agendar_consulta.cta')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type="consulta" 
      />

      <FooterBar />
    </div>
  );
};

export default AgendarConsulta;
