import { useTranslation } from 'react-i18next';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import SEO from '../components/SEO';
import './AgendarClase.css';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="agendar-page">
      <SEO 
        title={`${t('privacy.title')} - Latam Abogados`} 
        description={t('privacy.intro')}
      />
      <HeaderBar />
      
      <main className="agendar-main">
        <div className="container-narrow">
          <div className="ma-top">
            <h1 className="ma-title">{t('privacy.title')}</h1>
          </div>

          <div className="ma-card" style={{ textAlign: 'left', lineHeight: '1.8' }}>
            <p><strong>{t('privacy.last_updated')}</strong></p>
            
            <p>{t('privacy.intro')}</p>

            <h3 style={{ marginTop: '30px' }}>{t('privacy.section1_title')}</h3>
            <p>{t('privacy.section1_text')}</p>
            <ul>
              <li>{t('privacy.item1_1')}</li>
              <li>{t('privacy.item1_2')}</li>
              <li>{t('privacy.item1_3')}</li>
            </ul>

            <h3 style={{ marginTop: '30px' }}>{t('privacy.section2_title')}</h3>
            <p>{t('privacy.section2_text')}</p>
            <ul>
              <li>{t('privacy.item2_1')}</li>
              <li>{t('privacy.item2_2')}</li>
              <li>{t('privacy.item2_3')}</li>
              <li>{t('privacy.item2_4')}</li>
            </ul>

            <h3 style={{ marginTop: '30px' }}>{t('privacy.section3_title')}</h3>
            <p>{t('privacy.section3_text')}</p>

            <h3 style={{ marginTop: '30px' }}>{t('privacy.section4_title')}</h3>
            <p>{t('privacy.section4_text')}</p>

            <h3 style={{ marginTop: '30px' }}>{t('privacy.section5_title')}</h3>
            <p>{t('privacy.section5_text')}</p>
          </div>
        </div>
      </main>

      <FooterBar />
    </div>
  );
};

export default PrivacyPolicy;
