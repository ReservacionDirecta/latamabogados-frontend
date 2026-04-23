import { useTranslation } from 'react-i18next';
import { Download, ArrowLeft, ExternalLink, Newspaper, Gavel, Users, Shield, Zap, Film } from 'lucide-react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import SEO from '../components/SEO';
import './AgendarClase.css'; 
import './About.css';

const ArticlesPublications: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="agendar-page about-page">
      <SEO 
        title={t('articles.title')} 
        description={t('articles.news_article_text')}
        keywords="artículos legales, publicaciones derecho, dr marcus ambrose noticias, escritos jurídicos"
      />
      <HeaderBar />
      
      <main className="agendar-main">
        <div className="container-narrow">
          <div className="ma-back-nav" style={{ marginBottom: '30px' }}>
            <a href="/acerca-de" className="back-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--latam-black)', textDecoration: 'none', fontWeight: 'bold' }}>
              <ArrowLeft size={18} /> {t('articles.back_to_about')}
            </a>
          </div>

          <div className="ma-top">
            <h1 className="ma-title">{t('articles.title')}</h1>
          </div>

          <div className="ma-grid-single">
            {/* 1. Trayectoria y Noticias */}
            <div className="ma-card" style={{ marginBottom: '40px' }}>
              <h2 className="ma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Newspaper size={24} /> {t('articles.trajectory_news')}
              </h2>
              <div className="about-resources-grid">
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>{t('articles.news_article_title')}</h4>
                    <p>{t('articles.news_article_text')}</p>
                    <a href="/Newspaper-Article.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      {t('articles.view_article')} <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>{t('articles.committee_title')}</h4>
                    <p>{t('articles.committee_text')}</p>
                    <a href="/Ambrose-For-Judge-Letter.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      {t('articles.view_letter')} <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Compromiso Social y Humanitario */}
            <div className="ma-card" style={{ marginBottom: '40px' }}>
              <h2 className="ma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Users size={24} /> {t('articles.social_commitment')}
              </h2>
              <div className="about-resources-grid">
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>{t('articles.refugee_title')}</h4>
                    <p>{t('articles.refugee_text')}</p>
                    <a href="/no-refugee.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      {t('articles.read_more')} <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>{t('articles.vargas_gomez_title')}</h4>
                    <p>{t('articles.vargas_gomez_text')}</p>
                    <a href="/vargas-gomez-article.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      {t('articles.view_editorial')} <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Lucha por la Justicia y Ética */}
            <div className="ma-card" style={{ marginBottom: '40px' }}>
              <h2 className="ma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Shield size={24} /> {t('articles.justice_ethics')}
              </h2>
              <div className="about-resources-grid">
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>{t('articles.mcdonalds_title')}</h4>
                    <p>{t('articles.mcdonalds_text')}</p>
                    <a href="/ambrose-vs-mcdonalds.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      {t('articles.view_case')} <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>{t('articles.blueprint_title')}</h4>
                    <p>{t('articles.blueprint_text')}</p>
                    <a href="/blueprint-for-justice.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      {t('articles.view_blueprint')} <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Comunicación y Persuasión */}
            <div className="ma-card" style={{ marginBottom: '40px' }}>
              <h2 className="ma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Zap size={24} /> {t('articles.communication_persuasion')}
              </h2>
              <div className="about-resources-grid">
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>{t('articles.ten_tips_title')}</h4>
                    <p>{t('articles.ten_tips_text')}</p>
                    <a href="/top-ten-tips.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      {t('articles.view_tips')} <Download size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Industrias Creativas y Entretenimiento */}
            <div className="ma-card" style={{ marginBottom: '40px' }}>
              <h2 className="ma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Film size={24} /> {t('articles.creative_industries')}
              </h2>
              <div className="about-resources-grid">
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>VIVA LA REVOLUCIÓN EN HOLLYWOOD</h4>
                    <p>Como SAG Actor y abogado de entretenimiento, Marcus llamó a una revolución contra la corrupción en el negocio del espectáculo.</p>
                    <a href="/viva-la-revolucion.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      LEER MÁS <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>{t('articles.wall_street_title')}</h4>
                    <p>{t('articles.wall_street_text')}</p>
                    <a href="/conflict-of-interest.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      {t('articles.view_story')} <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>{t('articles.acting_title')}</h4>
                    <p>{t('articles.acting_text')}</p>
                    <button onClick={() => {/* show video logic */}} className="ma-btn-black" style={{ width: 'fit-content' }}>
                      {t('articles.view_acting')} <Film size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Ejemplos de Escritos Legales */}
            <div className="ma-card">
              <h2 className="ma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Gavel size={24} /> {t('articles.legal_writings')}
              </h2>
              <div className="about-resources-grid">
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>{t('articles.appellant_brief_title')}</h4>
                    <p>{t('articles.appellant_brief_text')}</p>
                    <a href="/APPELLANTa__S_OPENING_BRIEF.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      {t('articles.view_brief')} <Download size={14} />
                    </a>
                  </div>
                </div>
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>{t('articles.combined_brief_title')}</h4>
                    <p>{t('articles.combined_brief_text')}</p>
                    <a href="/COMBINED-BRIEF.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      {t('articles.view_brief')} <Download size={14} />
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

export default ArticlesPublications;
