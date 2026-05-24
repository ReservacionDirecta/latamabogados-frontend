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

  // Bloquear scroll solo en esta página (base fundacional del dueño), permitiendo scroll ÚNICAMENTE en versión horizontal (landscape) de dispositivos móviles/tablets
  React.useEffect(() => {
    const handleResize = () => {
      const isMobileOrTablet = window.innerWidth <= 1024 && window.innerHeight <= 1024;
      const isLandscape = window.innerWidth > window.innerHeight;
      const shouldScroll = isMobileOrTablet && isLandscape;
      
      if (shouldScroll) {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.height = '';
      } else {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.height = '100%';
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
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
