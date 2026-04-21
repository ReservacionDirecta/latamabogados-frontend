import React from 'react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import { FileText, Award, Book, ExternalLink, Download } from 'lucide-react';
import './AgendarClase.css'; // Reusing the high-quality layout system
import './About.css';

const About: React.FC = () => {
  return (
    <div className="agendar-page about-page">
      <HeaderBar />
      
      <main className="agendar-main">
        <div className="container-narrow">
          <div className="ma-top">
            <h2 className="ma-title">Quién es el <br /> Dr. Marcus Ambrose</h2>
            
            <div className="about-hero">
              <div className="about-photo-wrapper">
                <img 
                  src="/dr-marcus-ambrose-abogado-1.png" 
                  alt="Dr. Marcus Ambrose" 
                  className="about-photo"
                />
              </div>
              
              <div className="about-intro-text">
                <p className="ma-lead">
                  Es un <strong>Abogado Doctorado Estadounidense</strong> de primer nivel con más de 40 años de experiencia internacional. 
                  Cuenta con una Maestría en enseñanza de inglés jurídico, conversación y escritura profesional.
                </p>
                <p className="about-secondary-text">
                  Asimismo, es reconocido como autor de publicaciones jurídicas académicas, profesor de derecho y especialista en la enseñanza de inglés para el contexto profesional legal global.
                </p>
              </div>
            </div>
          </div>

          <div className="ma-grid-single">
            <div className="ma-card">
              <h3 className="ma-card-title">Trayectoria y Recursos</h3>
              
              <div className="about-resources-grid">
                {/* Publicaciones */}
                <div className="resource-item">
                  <div className="resource-icon"><Book size={24} /></div>
                  <div className="resource-content">
                    <h4>Publicaciones y Artículos</h4>
                    <p>Explore su trayectoria profesional a través de sus publicaciones académicas.</p>
                    <a href="/wp-content/uploads/2023/07/top-ten-tips.pdf" target="_blank" rel="noopener noreferrer" className="resource-link">
                      Ver publicaciones <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Escritos Legales */}
                <div className="resource-item">
                  <div className="resource-icon"><FileText size={24} /></div>
                  <div className="resource-content">
                    <h4>Ejemplos de Escritos</h4>
                    <p>Conozca ejemplos de sus escritos legales realizados para colegas y clientes.</p>
                    <a href="/ejemplos-de-escritos-legales" className="resource-link">
                      Ver ejemplos <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* CV y Diplomado */}
                <div className="resource-item">
                  <div className="resource-icon"><Award size={24} /></div>
                  <div className="resource-content">
                    <h4>CV y Diplomado</h4>
                    <p>Descargue el historial profesional y certificaciones del Dr. Ambrose.</p>
                    <div className="resource-actions">
                      <a href="/wp-content/uploads/2024/01/Ambrose-For-Judge-Letter.pdf" target="_blank" rel="noopener noreferrer" className="resource-link">
                        Descargar CV <Download size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ma-highlight" style={{ textAlign: 'center', marginTop: '40px' }}>
                <h2 style={{ color: 'var(--ma-accent-color)', fontSize: '24px', marginBottom: '15px' }}>Somos socialmente responsables</h2>
                <p style={{ fontSize: '16px', color: 'var(--ma-text-color)', marginBottom: '20px' }}>
                  Comprometidos con el desarrollo legal y social en Latinoamérica.
                </p>
                <a href="/nuestra-conciencia-social" className="ma-btn ma-btn-whatsapp" style={{ maxWidth: '200px', margin: '0 auto', backgroundColor: 'var(--ma-accent-color)' }}>
                  VER MÁS
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

export default About;
