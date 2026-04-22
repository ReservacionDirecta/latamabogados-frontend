import React from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import SEO from '../components/SEO';
import './AgendarClase.css'; // Reusing the ma-* layout system
import './About.css';

const SocialConscience: React.FC = () => {
  return (
    <div className="agendar-page about-page">
      <SEO 
        title="Nuestra Conciencia Social" 
        description="El compromiso del Dr. Marcus Ambrose con la justicia y la retribución social. Conozca su trayectoria humanitaria y casos pro-bono."
        keywords="responsabilidad social, dr marcus ambrose, casos pro bono, justicia social, humanitario"
      />
      <HeaderBar />
      
      <main className="agendar-main">
        <div className="container-narrow">
          <div className="ma-back-nav">
            <a href="/acerca-de" className="back-link">
              <ArrowLeft size={16} /> Regresar a Acerca de
            </a>
          </div>

          <div className="ma-top">
            <h2 className="ma-title">Nuestra Conciencia Social</h2>
            <p className="ma-lead">
              El Dr. Ambrose es un hombre de fe y empático que desea retribuir a aquellos que están en desventaja. Su compromiso con la justicia trasciende el ámbito puramente comercial.
            </p>
          </div>

          <div className="ma-grid-single">
            <div className="ma-card">
              <h3 className="ma-card-title">Trayectoria Humanitaria</h3>
              <p className="ma-intro">
                A lo largo de su carrera, el Dr. Marcus Ambrose ha liderado y participado en causas humanitarias y defensas pro-bono contra la injusticia.
              </p>

              <div className="about-resources-grid">
                <a href="/Cuba.pdf" target="_blank" rel="noopener noreferrer" className="resource-item">
                  <div className="resource-icon"><ExternalLink size={24} /></div>
                  <div className="resource-content">
                    <h4>Guantánamo, Cuba</h4>
                    <p>Artículos sobre la lucha en pro de los derechos en Guantánamo.</p>
                  </div>
                </a>
                
                <a href="/Unknown.pdf" target="_blank" rel="noopener noreferrer" className="resource-item">
                  <div className="resource-icon"><ExternalLink size={24} /></div>
                  <div className="resource-content">
                    <h4>Agradecimiento en Miami Herald</h4>
                    <p>Artículo escrito por Andres Vargas acerca de sus actos generosos (Miami Herald).</p>
                  </div>
                </a>
                
                <a href="/Press-Release.pdf" target="_blank" rel="noopener noreferrer" className="resource-item">
                  <div className="resource-icon"><ExternalLink size={24} /></div>
                  <div className="resource-content">
                    <h4>Justicia Laboral (vs McDonald's)</h4>
                    <p>Artículo sobre la batalla ganada en contra del abuso hacia una mujer hispana.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterBar />
    </div>
  );
};

export default SocialConscience;
