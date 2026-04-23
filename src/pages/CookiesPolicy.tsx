import { useTranslation } from 'react-i18next';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import SEO from '../components/SEO';
import './AgendarClase.css';

const CookiesPolicy: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="agendar-page">
      <SEO 
        title={`${t('cookies.title')} - Latam Abogados`} 
        description={t('cookies.intro')}
      />
      <HeaderBar />
      
      <main className="agendar-main">
        <div className="container-narrow">
          <div className="ma-top">
            <h1 className="ma-title">{t('cookies.title')}</h1>
          </div>

          <div className="ma-card" style={{ textAlign: 'left', lineHeight: '1.8' }}>
            <p><strong>{t('cookies.what_are_cookies_title')}</strong></p>
            <p>{t('cookies.what_are_cookies_text')}</p>

            <h3 style={{ marginTop: '30px' }}>{t('cookies.how_we_use_title')}</h3>
            <ul>
              <li><strong>{t('cookies.essential')}</strong> {t('cookies.essential_text')}</li>
              <li><strong>{t('cookies.analytics')}</strong> {t('cookies.analytics_text')}</li>
              <li><strong>{t('cookies.marketing')}</strong> {t('cookies.marketing_text')}</li>
            </ul>

            <h3 style={{ marginTop: '30px' }}>{t('cookies.control_title')}</h3>
            <p>{t('cookies.control_text')}</p>

            <h3 style={{ marginTop: '30px' }}>3. Cookies de terceros</h3>
            <p>En algunos casos, utilizamos cookies proporcionadas por terceros de confianza (como servicios de video o mapas) para enriquecer la experiencia del usuario.</p>

            <h3 style={{ marginTop: '30px' }}>4. Actualizaciones</h3>
            <p>Esta política puede ser modificada periódicamente para reflejar cambios en el uso de cookies en nuestro sitio web.</p>
          </div>
        </div>
      </main>

      <FooterBar />
    </div>
  );
};

export default CookiesPolicy;
