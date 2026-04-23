import React, { useState } from 'react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import SEO from '../components/SEO';
import { FileText, Award, Book, ExternalLink, Download, X, ArrowLeft, Newspaper, Gavel } from 'lucide-react';
import './AgendarClase.css'; 
import './About.css';

const About: React.FC = () => {
  const [showDiploma, setShowDiploma] = useState(false);
  const [showVideo, setShowVideo] = useState(true); // Autoplay on enter

  return (
    <div className="agendar-page about-page">
      <SEO 
        title="Sobre Marcus Ambrose" 
        description="Conozca la trayectoria del Dr. Marcus Ambrose, Juris Doctor estadounidense y especialista en Inglés Jurídico con más de 40 años de experiencia internacional."
        keywords="marcus ambrose, abogado ee.uu, juris doctor, inglés jurídico, legal english expert, profesor de derecho"
      />
      <HeaderBar />
      
      <main className="agendar-main">
        <div className="container-narrow">
          <div className="ma-back-nav">
            <a href="/#inicio" className="back-link">
              <ArrowLeft size={16} /> Regresar al inicio
            </a>
          </div>

          <div className="ma-top">
            <h2 className="ma-title">QUIEN ES DR. MARCUS AMBROSE</h2>
            
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
                  EL ES UN ABOGADO DOCTORADO ESTADOUNIDENSE DE PRIMER NIVEL CON MÁS QUE 40 ANOS DE EXPERIENCIA INTERNACIONAL QUE CUENTA CON UNA MAESTRÍA EN ENSEÑANZA DE INGLES JURÍDICO, CONVERSACIÓN Y ESCRITURA PROFESIONAL
                </p>
                <p className="about-secondary-text">
                  ASIMISMO EL ES RECONOCIDO COMO AUTOR DE PUBLICACIONES JURÍDICAS ACADÉMICAS Y PROFESOR DE DERECHO Y ENSEÑANZA DE INGLÉS PROFESIONAL.
                </p>
              </div>
            </div>
          </div>

          <div className="ma-grid-single">
            {/* Trayectoria Principal */}
            <div className="ma-card">
              <h3 className="ma-card-title">Trayectoria y Recursos</h3>
              
              <div className="about-resources-grid">
                {/* Publicaciones */}
                <div className="resource-item">
                  <div className="resource-icon"><Book size={24} /></div>
                  <div className="resource-content">
                    <h4>Publicaciones y Artículos</h4>
                    <p>Lea sobre Dr. Marcus Ambrose y sus publicaciones y artículos de su trayectoria profesional.</p>
                    <a href="/top-ten-tips.pdf" target="_blank" rel="noopener noreferrer" className="resource-link">
                      Ver publicaciones <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Escritos Legales */}
                <div className="resource-item">
                  <div className="resource-icon"><FileText size={24} /></div>
                  <div className="resource-content">
                    <h4>Ejemplos de Escritos</h4>
                    <p>Conozca ejemplos de sus escritos legales hecho por colegas clientes.</p>
                    <a href="/ejemplos-de-escritos-legales" className="resource-link">
                      Ver ejemplos <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Trayectoria en Video */}
                <div className="resource-item video-resource">
                  <div className="resource-video-thumbnail" onClick={() => setShowVideo(true)}>
                    <img 
                      src="https://img.youtube.com/vi/d4AZZDYBYcw/maxresdefault.jpg" 
                      alt="Marcus Ambrose Trayectoria" 
                    />
                    <div className="video-play-overlay">
                      <div className="play-circle">
                        <div className="play-triangle"></div>
                      </div>
                    </div>
                  </div>
                  <div className="resource-content">
                    <h4>Trayectoria en Video</h4>
                    <p>Visualice un breve resumen de la destacada trayectoria internacional del Dr. Marcus Ambrose.</p>
                    <button 
                      onClick={() => setShowVideo(true)}
                      className="hero-cta-btn hero-cta-outline"
                      style={{ marginTop: '10px', fontSize: '14px', padding: '12px 24px' }}
                    >
                      VER VIDEO <ExternalLink size={14} />
                    </button>
                  </div>
                </div>

                <div className="resource-item">
                  <div className="resource-icon"><Award size={24} /></div>
                  <div className="resource-content">
                    <h4>CV y Diplomado</h4>
                    <p>Descargue el CV y visualice el diplomado del Dr. Marcus Ambrose.</p>
                    <div className="resource-actions">
                      <a href="/Marcus Ambrose CV.pdf" target="_blank" rel="noopener noreferrer" className="resource-link">
                        Descargar CV <Download size={14} />
                      </a>
                      <span style={{ margin: '0 8px', color: '#ccc' }}>|</span>
                      <button 
                        onClick={() => setShowDiploma(true)}
                        className="resource-link"
                        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
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
                  <a href="/Newspaper-Article.pdf" target="_blank" rel="noopener noreferrer" className="hero-cta-btn hero-cta-outline" style={{ fontSize: '14px', padding: '12px 24px' }}>
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
                  <a href="/Ambrose-For-Judge-Letter.pdf" target="_blank" rel="noopener noreferrer" className="hero-cta-btn hero-cta-outline" style={{ fontSize: '14px', padding: '12px 24px' }}>
                    VER CARTA DE CAMPAÑA <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="ma-highlight" style={{ textAlign: 'center', marginTop: '40px' }}>
                <h2 style={{ color: 'var(--ma-accent-color)', fontSize: '24px', marginBottom: '15px' }}>Somos socialmente responsables</h2>
                <p style={{ fontSize: '16px', color: 'var(--ma-text-color)', marginBottom: '20px' }}>
                  Comprometidos con el desarrollo legal y social en Latinoamérica.
                </p>
                <a href="/nuestra-conciencia-social" className="ma-btn ma-btn-whatsapp" style={{ maxWidth: '200px', margin: '0 auto', backgroundColor: '#ffcc00', color: '#000000', fontWeight: 'bold' }}>
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

        {/* Modal de Video YouTube */}
        {showVideo && (
          <div className="video-overlay" onClick={() => setShowVideo(false)}>
            <div className="video-modal" onClick={e => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setShowVideo(false)}>
                <X size={24} />
              </button>
              <div className="video-container-iframe">
                <iframe 
                  src="https://www.youtube.com/embed/d4AZZDYBYcw?autoplay=1&controls=1&rel=0" 
                  title="Marcus Ambrose Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
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
