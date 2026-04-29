import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderBar from '../components/HeaderBar';
import HeroSection from '../components/HeroSection';
import WelcomeVideo from '../components/WelcomeVideo';
import SEO from '../components/SEO';
import './Landing2.css';

const Landing2: React.FC = () => {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="landing2-page">
      <SEO 
        title={`${t('nav.home')} - Compact`} 
        description={t('hero.main_title')}
        keywords="inglés jurídico, legal english, abogado estados unidos, derecho usa, marcus ambrose"
      />
      
      <WelcomeVideo 
        isVisible={showVideo} 
        isActive={showVideo}
        onClose={() => setShowVideo(false)} 
      />
      
      <HeaderBar />
      
      <main className="landing2-main">
        <HeroSection onOpenVideo={() => setShowVideo(true)} />
      </main>
    </div>
  );
};

export default Landing2;
