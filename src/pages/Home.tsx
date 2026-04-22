import React from 'react';
import HeaderBar from '../components/HeaderBar';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <SEO 
        title="Inicio" 
        description="APRENDA INGLÉS JURÍDICO, CONVERSACIONAL Y ESCRITURA PROFESIONAL PRACTICO"
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
