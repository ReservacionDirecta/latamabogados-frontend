import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderBar from '../components/HeaderBar';
import HeroSection from '../components/HeroSection';
import WelcomeVideo from '../components/WelcomeVideo';
import LoadingScreen from '../components/LoadingScreen';
import SEO from '../components/SEO';
import './Home.css';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [isScreenReady, setIsScreenReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Artificial delay for premium feel
    const timer = setTimeout(() => {
      setIsScreenReady(true);
      // Wait for fade out animation
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page">
      <SEO 
        title={t('nav.home')} 
        description={t('hero.main_title')}
        keywords="inglés jurídico, legal english, abogado estados unidos, derecho usa, marcus ambrose"
      />
      
      {isLoading && <LoadingScreen isReady={isScreenReady} />}
      
      <WelcomeVideo 
        isVisible={showVideo} 
        isActive={showVideo}
        onClose={() => setShowVideo(false)} 
      />
      
      <HeaderBar />
      
      <main>
        <HeroSection onOpenVideo={() => setShowVideo(true)} />
      </main>
    </div>
  );
};

export default Home;
