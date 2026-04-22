import React from 'react';
import { Download, ArrowLeft } from 'lucide-react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import SEO from '../components/SEO';
import './AgendarClase.css'; 
import './About.css';

const LegalWritings: React.FC = () => {
  return (
    <div className="agendar-page about-page">
      <SEO 
        title="Ejemplos de Escritos Legales" 
        description="Explore ejemplos reales de escritos legales presentados ante tribunales superiores por el Dr. Marcus Ambrose. Estándares de argumentación y formato profesional."
        keywords="escritos legales, appellant brief, argumentación legal, documentos jurídicos, dr marcus ambrose"
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
            <h2 className="ma-title">Ejemplos de escritos legales</h2>
            <p className="ma-lead">
              A continuación, el Dr. Marcus Ambrose comparte escritos legales reales (con información confidencial editada) para demostrar el estándar y calidad de argumentación y formato utilizados en tribunales superiores de los EE.UU.
            </p>
          </div>

          <div className="ma-grid-single">
            <div className="ma-card">
              <h3 className="ma-card-title">Documentos de Referencia</h3>
              
              <div className="about-resources-grid">
                <div className="resource-item">
                  <div className="resource-icon"><Download size={24} /></div>
                  <div className="resource-content">
                    <h4>ESCRITO DE APERTURA DEL APELANTE</h4>
                    <p>Ejemplo de un "Appellant's Opening Brief" presentado ante la corte de apelaciones.</p>
                    <a href="/APPELLANTa__S_OPENING_BRIEF.pdf" target="_blank" rel="noopener noreferrer" className="resource-link">
                      Descargar PDF <Download size={14} />
                    </a>
                  </div>
                </div>
                
                <div className="resource-item">
                  <div className="resource-icon"><Download size={24} /></div>
                  <div className="resource-content">
                    <h4>ESCRITO DE RÉPLICA COMBINADA</h4>
                    <p>Ejemplo de un "Combined Brief" demostrando estrategias de respuesta legal compleja.</p>
                    <a href="/COMBINED-BRIEF.pdf" target="_blank" rel="noopener noreferrer" className="resource-link">
                      Descargar PDF <Download size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterBar />
    </div>
  );
};

export default LegalWritings;
