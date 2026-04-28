import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderBar from '../components/HeaderBar';
import HeroSection from '../components/HeroSection';
import WelcomeVideo from '../components/WelcomeVideo';
import SEO from '../components/SEO';
import FooterBar from '../components/FooterBar';
import './Home.css';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="home-page">
      <SEO 
        title={t('nav.home')} 
        description={t('hero.main_title')}
        keywords="inglés jurídico, legal english, abogado estados unidos, derecho usa, marcus ambrose"
      />
      
      <WelcomeVideo 
        isVisible={showVideo} 
        isActive={showVideo}
        onClose={() => setShowVideo(false)} 
      />
      
      <HeaderBar />
      
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <HeroSection onOpenVideo={() => setShowVideo(true)} />
      </main>

      <FooterBar />
    </div>
  );
};

export default Home;
