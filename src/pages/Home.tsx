import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderBar from '../components/HeaderBar';
import HeroSection from '../components/HeroSection';
import WelcomeVideo from '../components/WelcomeVideo';
import LoadingScreen from '../components/LoadingScreen';
import SEO from '../components/SEO';
import './Home.css';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowVideo(true); // Trigger video after interaction
  };

  return (
    <div className="home-page">
      <SEO 
        title={t('nav.home')} 
        description={t('hero.main_title')}
        keywords="inglés jurídico, legal english, abogado estados unidos, derecho usa, marcus ambrose"
      />
      
      {isLoading && <LoadingScreen onEnter={handleLoadingComplete} />}
      
      <WelcomeVideo 
        isVisible={showVideo} 
        onClose={() => setShowVideo(false)} 
      />
      
      <HeaderBar />
      
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;
