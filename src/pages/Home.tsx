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
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoReady = () => {
    // Start exit animation
    setIsVideoReady(true);
    
    // Wait for animation to finish before unmounting
    setTimeout(() => {
      setIsLoading(false);
      setShowVideo(true);
    }, 800);
  };

  return (
    <div className="home-page">
      <SEO 
        title={t('nav.home')} 
        description={t('hero.main_title')}
        keywords="inglés jurídico, legal english, abogado estados unidos, derecho usa, marcus ambrose"
      />
      
      {isLoading && <LoadingScreen isReady={isVideoReady} />}
      
      <WelcomeVideo 
        isVisible={showVideo || isLoading} // Keep it rendered to pre-load
        isActive={showVideo}
        onClose={() => setShowVideo(false)} 
        onReady={handleVideoReady}
      />
      
      <HeaderBar />
      
      <main>
        <HeroSection onOpenVideo={() => setShowVideo(true)} />
      </main>
    </div>
  );
};

export default Home;
