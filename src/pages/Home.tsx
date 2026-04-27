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

  const handleVideoReady = () => {
    // Automatically hide loading and show video when it's ready to play
    setIsLoading(false);
    setShowVideo(true);
  };

  const handleManualEnter = () => {
    setIsLoading(false);
    setShowVideo(true);
  };

  return (
    <div className="home-page">
      <SEO 
        title={t('nav.home')} 
        description={t('hero.main_title')}
        keywords="inglés jurídico, legal english, abogado estados unidos, derecho usa, marcus ambrose"
      />
      
      {isLoading && <LoadingScreen onEnter={handleManualEnter} />}
      
      <WelcomeVideo 
        isVisible={showVideo || isLoading} // Keep it rendered to pre-load
        onClose={() => setShowVideo(false)} 
        onReady={handleVideoReady}
      />
      
      <HeaderBar />
      
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;
