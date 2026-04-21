import React from 'react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import HeroSection from '../components/HeroSection';

const TestLanding: React.FC = () => {
  return (
    <div className="test-landing-page">
      <HeaderBar />
      <HeroSection 
        customLabels={{
          service1: "LEER MÁS",
          service2: "LEER MÁS",
          authority: "LEER MÁS"
        }}
      />
      <FooterBar />
    </div>
  );
};

export default TestLanding;
