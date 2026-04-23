import { useTranslation } from 'react-i18next';
import { Download, ArrowLeft } from 'lucide-react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import SEO from '../components/SEO';
import './AgendarClase.css'; 
import './About.css';

const LegalWritings: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="agendar-page about-page">
      <SEO 
        title={t('legal_writings_page.title')} 
        description={t('legal_writings_page.lead')}
        keywords="escritos legales, appellant brief, argumentación legal, documentos jurídicos, dr marcus ambrose"
      />
      <HeaderBar />
      
      <main className="agendar-main">
        <div className="container-narrow">
          <div className="ma-back-nav">
            <a href="/acerca-de" className="back-link">
              <ArrowLeft size={16} /> {t('articles.back_to_about')}
            </a>
          </div>

          <div className="ma-top">
            <h2 className="ma-title">{t('legal_writings_page.title')}</h2>
            <p className="ma-lead">
              {t('legal_writings_page.lead')}
            </p>
          </div>

          <div className="ma-grid-single">
            <div className="ma-card">
              <h3 className="ma-card-title">{t('legal_writings_page.ref_docs')}</h3>
              
              <div className="about-resources-grid">
                <div className="resource-item">
                  <div className="resource-icon"><Download size={24} /></div>
                  <div className="resource-content">
                    <h4>{t('articles.appellant_brief_title')}</h4>
                    <p>{t('articles.appellant_brief_text')}</p>
                    <a href="/APPELLANTa__S_OPENING_BRIEF.pdf" target="_blank" rel="noopener noreferrer" className="resource-link">
                      {t('legal_writings_page.download_pdf')} <Download size={14} />
                    </a>
                  </div>
                </div>
                
                <div className="resource-item">
                  <div className="resource-icon"><Download size={24} /></div>
                  <div className="resource-content">
                    <h4>{t('articles.combined_brief_title')}</h4>
                    <p>{t('articles.combined_brief_text')}</p>
                    <a href="/COMBINED-BRIEF.pdf" target="_blank" rel="noopener noreferrer" className="resource-link">
                      {t('legal_writings_page.download_pdf')} <Download size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterBar />
    </div>
  );
};

export default LegalWritings;
