import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import BookingModal from '../components/BookingModal';
import GroupOptionsModal from '../components/GroupOptionsModal';
import SEO from '../components/SEO';
import './AgendarClase.css';

const AgendarClase: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);

  return (
    <div className="agendar-page">
      <SEO 
        title={t('agendar_clase.title')} 
        description={t('agendar_clase.lead')}
        keywords="clases inglés jurídico, legal english online, curso inglés para abogados, aprender inglés legal, dr marcus ambrose"
      />
      <HeaderBar />
      
      <main className="agendar-main">
        <div className="container-narrow">
          <div className="ma-top-horizontal">
            <div className="ma-photo">
              <img src="/clase de ingles legal online.png" alt="Clase de Inglés Jurídico y Legal English Online - Dr. Marcus Ambrose" />
            </div>

            <div className="ma-header-content">
              <h2 className="ma-title" dangerouslySetInnerHTML={{ __html: t('agendar_clase.title') }} />
            </div>
          </div>

          <p className="ma-lead-bottom">
            {t('agendar_clase.lead')}
          </p>

          <div className="ma-grid-single">
            <div className="ma-card ma-comparison-card" style={{ marginBottom: '50px' }}>
              <h3 className="ma-card-title" dangerouslySetInnerHTML={{ __html: t('agendar_clase.why_choose') }} />
              <div className="ma-comparison-wrapper">
                <table className="ma-comparison-table">
                  <thead>
                    <tr>
                      <th>{t('agendar_clase.table_feature')}</th>
                      <th>{t('agendar_clase.table_latam')}</th>
                      <th>{t('agendar_clase.table_competence')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{t('agendar_clase.feature1')}</td>
                      <td><span className="ma-check">✅</span> SI</td>
                      <td><span className="ma-cross">❌</span> NO</td>
                    </tr>
                    <tr>
                      <td>{t('agendar_clase.feature2')}</td>
                      <td><span className="ma-check">✅</span> SI</td>
                      <td><span className="ma-cross">❌</span> NO</td>
                    </tr>
                    <tr>
                      <td>{t('agendar_clase.feature3')}</td>
                      <td><span className="ma-check">✅</span> SI</td>
                      <td><span className="ma-cross">❌</span> NO</td>
                    </tr>
                    <tr>
                      <td>{t('agendar_clase.feature4')}</td>
                      <td><span className="ma-check">✅</span> SI</td>
                      <td><span className="ma-cross">❌</span> NO</td>
                    </tr>
                    <tr>
                      <td>{t('agendar_clase.feature5')}</td>
                      <td><span className="ma-check">✅</span> SI</td>
                      <td><span className="ma-cross">❌</span> NO</td>
                    </tr>
                    <tr>
                      <td>{t('agendar_clase.feature6')}</td>
                      <td><span className="ma-check">✅</span> SI</td>
                      <td><span className="ma-cross">❌</span> NO</td>
                    </tr>
                    <tr>
                      <td>{t('agendar_clase.feature7')}</td>
                      <td><span className="ma-check">✅</span> SI</td>
                      <td><span className="ma-cross">❌</span> NO</td>
                    </tr>
                    <tr>
                      <td>{t('agendar_clase.feature8')}</td>
                      <td><span className="ma-check">✅</span> INDIVIDUAL</td>
                      <td><span className="ma-cross">❌</span> NO</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="ma-card">
              <h3 className="ma-card-title">{t('agendar_clase.individual_title')}</h3>
              <p className="ma-intro">
                {t('agendar_clase.individual_intro')}
              </p>

              <ul className="ma-features">
                <li>
                  <span className="ma-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm1 17.93V20a1 1 0 0 1-2 0v-1.06a4.5 4.5 0 0 1-3.5-4.38 1 1 0 0 1 2 0 2.5 2.5 0 0 0 5 0c0-1.38-1.1-1.88-3-2.43-2.08-.61-4.5-1.37-4.5-4.07A4.48 4.48 0 0 1 11 3.06V2a1 1 0 0 1 2 0v1.06a4.5 4.5 0 0 1 3.5 4.38 1 1 0 0 1-2 0 2.5 2.5 0 0 0-5 0c0 1.13.89 1.55 2.82 2.12 2.16.64 4.68 1.45 4.68 4.38A4.48 4.48 0 0 1 13 18.93Z"></path></svg>
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: t('agendar_clase.price_promo') }} />
                </li>

                <li>
                  <span className="ma-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2a1 1 0 0 0-2 0v2H8V2a1 1 0 0 0-2 0v2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10h16Zm0-10H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></path></svg>
                  </span>
                  <span>{t('agendar_clase.min_hours')}</span>
                </li>

                <li>
                  <span className="ma-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 6a1 1 0 0 1 1 1v4.38l2.45 1.41a1 1 0 1 1-1 1.74l-2.95-1.7A1 1 0 0 1 11 13V7a1 1 0 0 1 1-1Zm0-4a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"></path></svg>
                  </span>
                  <span>{t('agendar_clase.flexible_hours')}</span>
                </li>

                <li>
                  <span className="ma-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 0a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm8 2c-2.67 0-8 1.34-8 4v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2c0-2.66-5.33-4-8-4ZM8 13c-.29 0-.62.01-.97.04A5.94 5.94 0 0 1 10 17v2H1a1 1 0 0 1-1-1v-1c0-2.66 5.33-4 8-4Z"></path></svg>
                  </span>
                  <span>{t('agendar_clase.share_hours')}</span>
                </li>

                <li>
                  <span className="ma-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                  </span>
                  <span>{t('agendar_clase.all_levels')}</span>
                </li>
              </ul>

              <div className="ma-footnote" style={{ fontSize: '0.85em' }}>
                {t('agendar_clase.footnote')}
              </div>

              <div className="ma-actions">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="ma-btn ma-btn-whatsapp"
                >
                  <i className="fab fa-whatsapp"></i> {t('agendar_clase.cta')}
                </button>
              </div>
            </div>
          </div>

            <div className="ma-budget-cta" style={{ marginTop: '30px', textAlign: 'center', padding: '20px', background: 'white', borderRadius: '12px', border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.05rem', color: 'var(--latam-black)' }}>{t('agendar_clase.budget_prompt')}</span>
              <button 
                onClick={() => setIsGroupModalOpen(true)}
                className="ma-btn ma-btn-whatsapp"
                style={{ background: '#f8d210', color: '#000', fontWeight: 'bold', fontSize: '0.85rem', padding: '10px 20px', borderRadius: '4px', textTransform: 'uppercase' }}
              >
                {t('agendar_clase.budget_cta')}
              </button>
            </div>
        </div>
      </main>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type="clase" 
      />

      <GroupOptionsModal 
        isOpen={isGroupModalOpen}
        onClose={() => setIsGroupModalOpen(false)}
      />

      <FooterBar />
    </div>
  );
};

export default AgendarClase;
