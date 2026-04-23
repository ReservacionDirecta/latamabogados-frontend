import { useTranslation } from 'react-i18next';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import SEO from '../components/SEO';
import './AgendarClase.css'; // Reusing the ma-* layout system
import './About.css';

const SocialConscience: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="agendar-page about-page">
      <SEO 
        title={t('social_conscience.title')} 
        description={t('social_conscience.lead')}
        keywords="responsabilidad social, dr marcus ambrose, casos pro bono, justicia social, humanitario"
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
            <h2 className="ma-title">{t('social_conscience.title')}</h2>
            <p className="ma-lead">
              {t('social_conscience.lead')}
            </p>
          </div>

          <div className="ma-grid-single">
            <div className="ma-card">
              <h3 className="ma-card-title">{t('social_conscience.humanitarian_title')}</h3>
              <p className="ma-intro">
                {t('social_conscience.humanitarian_intro')}
              </p>

              <div className="about-resources-grid">
                <a href="/Cuba.pdf" target="_blank" rel="noopener noreferrer" className="resource-item">
                  <div className="resource-icon"><ExternalLink size={24} /></div>
                  <div className="resource-content">
                    <h4>{t('social_conscience.cuba_title')}</h4>
                    <p>{t('social_conscience.cuba_text')}</p>
                  </div>
                </a>
                
                <a href="/Unknown.pdf" target="_blank" rel="noopener noreferrer" className="resource-item">
                  <div className="resource-icon"><ExternalLink size={24} /></div>
                  <div className="resource-content">
                    <h4>{t('social_conscience.miami_herald_title')}</h4>
                    <p>{t('social_conscience.miami_herald_text')}</p>
                  </div>
                </a>
                
                <a href="/Press-Release.pdf" target="_blank" rel="noopener noreferrer" className="resource-item">
                  <div className="resource-icon"><ExternalLink size={24} /></div>
                  <div className="resource-content">
                    <h4>{t('social_conscience.labor_justice_title')}</h4>
                    <p>{t('social_conscience.labor_justice_text')}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterBar />
    </div>
  );
};

export default SocialConscience;
