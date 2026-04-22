import React, { useState } from 'react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import { FileText, Award, Book, ExternalLink, Download, X, ArrowLeft, Newspaper, Gavel } from 'lucide-react';
import './AgendarClase.css'; // Reusing the high-quality layout system
import './About.css';

const About: React.FC = () => {
  const [showDiploma, setShowDiploma] = useState(false);

  return (
    <div className="agendar-page about-page">
      <HeaderBar />
      
      <main className="agendar-main">
        <div className="container-narrow">
          <div className="ma-back-nav">
            <a href="/#inicio" className="back-link">
              <ArrowLeft size={16} /> Regresar al inicio
            </a>
          </div>

          <div className="ma-top">
            <h2 className="ma-title">Sobre Marcus Ambrose</h2>
            <p className="ma-lead">
              El Doctor Marcus Ambrose ha tenido una vida colorida y experiencias extraordinarias que son difíciles de creer. 
            </p>
            
            <div className="about-hero">
              <div className="about-photo-wrapper">
                <div className="photo-container">
                  <img 
                    src="/dr-marcus-ambrose-abogado-1.png" 
                    alt="Dr. Marcus Ambrose" 
                    className="about-photo"
                  />
                  <button 
                    className="doctorate-tag"
                    onClick={() => setShowDiploma(true)}
                  >
                    <Award size={14} /> Doctorado
                  </button>
                </div>
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
            {/* Trayectoria Principal */}
            <div className="ma-card">
              <h3 className="ma-card-title">Trayectoria y Recursos</h3>
              
              <div className="about-resources-grid">
                {/* CV y VCard */}
                <div className="resource-item">
                  <div className="resource-icon"><FileText size={24} /></div>
                  <div className="resource-content">
                    <h4>Perfil Profesional</h4>
                    <p>Descargue el CV completo y la tarjeta de contacto del Dr. Ambrose.</p>
                    <div className="resource-actions">
                      <a href="/wp-content/uploads/2024/01/MA-CV-Webpage.pdf" target="_blank" rel="noopener noreferrer" className="resource-link">
                        Descargar CV <Download size={14} />
                      </a>
                      <span style={{ margin: '0 8px', color: '#ccc' }}>|</span>
                      <a href="/vcard" className="resource-link">
                        Ver VCard <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>

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

                {/* Diplomado */}
                <div className="resource-item">
                  <div className="resource-icon"><Award size={24} /></div>
                  <div className="resource-content">
                    <h4>Certificaciones</h4>
                    <p>Visualización del título de Juris Doctor obtenido en EE.UU.</p>
                    <div className="resource-actions">
                      <button 
                        onClick={() => setShowDiploma(true)}
                        className="resource-link"
                        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                      >
                        Ver Diplomado <Award size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secciones de Noticias y Campaña */}
            <div className="ma-card about-extra-card">
              <h3 className="ma-card-title">Impacto y Liderazgo</h3>
              
              <div className="about-editorial-grid">
                {/* Artículo de Periódico */}
                <div className="editorial-item">
                  <div className="editorial-header">
                    <Newspaper size={28} />
                    <h4>ARTÍCULO DE PERIÓDICO EN LAS NOTICIAS DE LA COMUNIDAD</h4>
                  </div>
                  <p>
                    Lea acerca de cómo Marcus Ambrose, considerado por muchos como idealista y visionario, trató de reformar el sistema legal.
                  </p>
                  <a href="/wp-content/uploads/2024/01/Newspaper-Article.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn ma-btn-outline">
                    LEER ARTÍCULO <ExternalLink size={14} />
                  </a>
                </div>

                <div className="ma-divider"></div>

                {/* Campaña para Juez */}
                <div className="editorial-item">
                  <div className="editorial-header">
                    <Gavel size={28} />
                    <h4>AMBROSE PARA EL COMITÉ DE CAMPAÑA DE JUEZ</h4>
                  </div>
                  <p>
                    Ambrose fue aclamado por los líderes políticos y cívicos en el estado de Florida, como el hombre que podría reformar el poder judicial y restaurar la profesión legal al estatus noble que una vez disfrutó.
                  </p>
                  <a href="/wp-content/uploads/2024/01/Ambrose-For-Judge-Letter.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn ma-btn-outline">
                    VER CARTA DE CAMPAÑA <ExternalLink size={14} />
                  </a>
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

        {/* Modal del Diploma */}
        {showDiploma && (
          <div className="diploma-overlay" onClick={() => setShowDiploma(false)}>
            <div className="diploma-modal" onClick={e => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setShowDiploma(false)}>
                <X size={24} />
              </button>
              <div className="diploma-header">
                <h3>Juris Doctor Diploma</h3>
              </div>
              <div className="diploma-body">
                <img src="/diplom.jpeg" alt="Juris Doctor Diploma" />
              </div>
            </div>
          </div>
        )}
      </main>

      <FooterBar />
    </div>
  );
};

export default About;
