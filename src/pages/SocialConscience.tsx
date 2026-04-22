import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Page.css';

const SocialConscience: React.FC = () => {
  return (
    <div className="page-wrapper animate-fade-in">
      <div className="page-header" style={{ backgroundImage: 'url(/wp-content/uploads/2023/07/bg-ambrose.png)' }}>
        <div className="container">
          <h1>Nuestra Conciencia Social</h1>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="container py-5">
        <div className="content-single border-container">
          <div className="content-main">
            <h2>Nuestra Responsabilidad Social</h2>
            <p>
              El Dr. Ambrose es un hombre de fe y empático que desea retribuir a aquellos que están en desventaja. Su compromiso con la justicia trasciende el ámbito puramente comercial.
            </p>
            
            <h2 className="mt-4">Trayectoria Humanitaria</h2>
            <p>A lo largo de su carrera, el Dr. Marcus Ambrose ha liderado y participado en causas humanitarias y defensas pro-bono contra la injusticia.</p>
            
            <div className="publication-list">
              <a href="/wp-content/uploads/2024/01/Cuba.pdf" target="_blank" rel="noopener noreferrer" className="doc-link glass-panel">
                <ExternalLink size={24} className="doc-icon" />
                <div className="doc-info">
                  <h4>Guantánamo, Cuba</h4>
                  <span>Artículos sobre la lucha en pro de los derechos en Guantánamo.</span>
                </div>
              </a>
              
              <a href="/wp-content/uploads/2024/01/Unknown.pdf" target="_blank" rel="noopener noreferrer" className="doc-link glass-panel">
                <ExternalLink size={24} className="doc-icon" />
                <div className="doc-info">
                  <h4>Agradecimiento en Miami Herald</h4>
                  <span>Artículo escrito por Andres Vargas acerca de sus actos generosos (Miami Herald).</span>
                </div>
              </a>
              
              <a href="/wp-content/uploads/2024/01/Press-Release.pdf" target="_blank" rel="noopener noreferrer" className="doc-link glass-panel">
                <ExternalLink size={24} className="doc-icon" />
                <div className="doc-info">
                  <h4>Justicia Laboral (vs McDonald's)</h4>
                  <span>Artículo sobre la batalla ganada en contra del abuso hacia una mujer hispana.</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialConscience;
