import React from 'react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <SEO 
        title="Inicio" 
        description="Domine el Inglés Jurídico y Legal English práctico con el Dr. Marcus Ambrose. Más de 40 años de experiencia en leyes de EE.UU. y educación legal global."
        keywords="inglés jurídico, legal english, abogado estados unidos, derecho usa, marcus ambrose"
      />
      <HeaderBar />
      
      <main>
        <HeroSection />
      </main>

      <FooterBar />
    </div>
  );
};

export default Home;
