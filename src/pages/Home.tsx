import { useTranslation } from 'react-i18next';
import HeaderBar from '../components/HeaderBar';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import './Home.css';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="home-page">
      <SEO 
        title={t('nav.home')} 
        description={t('hero.main_title')}
        keywords="inglés jurídico, legal english, abogado estados unidos, derecho usa, marcus ambrose"
      />
      <HeaderBar />
      
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;
