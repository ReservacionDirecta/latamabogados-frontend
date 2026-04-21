import React from 'react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import HeroSection from '../components/HeroSection';
import { ChevronDown, BookOpen, FileText, Download, Award } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <HeaderBar />
      
      <main>
        <HeroSection />

        
      </main>

      <FooterBar />
    </div>
  );
};

export default Home;
