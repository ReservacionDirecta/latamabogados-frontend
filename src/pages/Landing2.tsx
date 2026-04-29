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

  // Bloquear scroll solo en esta página
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, []);

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
