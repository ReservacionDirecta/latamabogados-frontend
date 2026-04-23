import React from 'react';
import { Download, ArrowLeft, ExternalLink, Newspaper, Gavel, Users, Shield, Zap, Film } from 'lucide-react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import SEO from '../components/SEO';
import './AgendarClase.css'; 
import './About.css';

const ArticlesPublications: React.FC = () => {
  return (
    <div className="agendar-page about-page">
      <SEO 
        title="Artículos y Publicaciones - Dr. Marcus Ambrose" 
        description="Explore la trayectoria mediática y académica del Dr. Marcus Ambrose. Artículos de periódico y ejemplos de escritos legales de su carrera profesional."
        keywords="artículos legales, publicaciones derecho, dr marcus ambrose noticias, escritos jurídicos"
      />
      <HeaderBar />
      
      <main className="agendar-main">
        <div className="container-narrow">
          <div className="ma-back-nav" style={{ marginBottom: '30px' }}>
            <a href="/acerca-de" className="back-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--latam-black)', textDecoration: 'none', fontWeight: 'bold' }}>
              <ArrowLeft size={18} /> REGRESAR A ACERCA DE
            </a>
          </div>

          <div className="ma-top">
            <h1 className="ma-title">Artículos y Publicaciones</h1>
          </div>

          <div className="ma-grid-single">
            {/* 1. Trayectoria y Noticias */}
            <div className="ma-card" style={{ marginBottom: '40px' }}>
              <h2 className="ma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Newspaper size={24} /> TRAYECTORIA Y NOTICIAS
              </h2>
              <div className="about-resources-grid">
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>ARTÍCULO DE PERIÓDICO EN LAS NOTICIAS DE LA COMUNIDAD</h4>
                    <p>Lea acerca de cómo Marcus Ambrose, considerado por muchos como idealista y visionario, trató de reformar el sistema legal.</p>
                    <a href="/Newspaper-Article.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      VER ARTÍCULO <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>AMBROSE PARA EL COMITÉ DE CAMPAÑA DE JUEZ</h4>
                    <p>Ambrose fue aclamado por los líderes políticos y cívicos en el estado de Florida, como el hombre que podría reformar el poder judicial y restaurar la profesión legal al estatus noble que una vez disfrutó.</p>
                    <a href="/Ambrose-For-Judge-Letter.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      VER CARTA <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Compromiso Social y Humanitario */}
            <div className="ma-card" style={{ marginBottom: '40px' }}>
              <h2 className="ma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Users size={24} /> COMPROMISO SOCIAL Y HUMANITARIO
              </h2>
              <div className="about-resources-grid">
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>NO TIENES QUE VIVIR COMO UN REFUGIADO</h4>
                    <p>Marcus Ambrose es un luchador humanitario y por la libertad. Lo arriesgó todo para ayudar a 33.000 cubanos recluidos en condiciones similares a las de un campo de concentración en la Bahía de Guantánamo.</p>
                    <a href="/no-refugee.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      LEER MÁS <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>ANDRÉS VARGAS GÓMEZ AGRADECE A MARCUS AMBROSE EN EL MIAMI HERALD</h4>
                    <p>El Sr. Vargas, figura histórica del exilio cubano, escribió un editorial agradeciendo a Ambrose por su sacrificio en nombre de la comunidad en la organización "Guantánamo No".</p>
                    <a href="/vargas-gomez-article.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      VER EDITORIAL <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Lucha por la Justicia y Ética */}
            <div className="ma-card" style={{ marginBottom: '40px' }}>
              <h2 className="ma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Shield size={24} /> LUCHA POR LA JUSTICIA Y ÉTICA
              </h2>
              <div className="about-resources-grid">
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>COMUNICADO DE PRENSA AMBROSE vs McDONALDS</h4>
                    <p>¡Ambrose lucha por los desvalidos! Lea sobre su saga de 10 años luchando contra McDonald’s y la corrupción corporativa para salvar la vida de un ex empleado.</p>
                    <a href="/ambrose-vs-mcdonalds.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      VER CASO <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>PROYECTO PARA LA JUSTICIA (BLUEPRINT FOR JUSTICE)</h4>
                    <p>Documento histórico que identificó problemas clave del sistema legal y ofreció soluciones pragmáticas. Recibió reconocimiento nacional.</p>
                    <a href="/blueprint-for-justice.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      VER PROYECTO <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Comunicación y Persuasión */}
            <div className="ma-card" style={{ marginBottom: '40px' }}>
              <h2 className="ma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Zap size={24} /> COMUNICACIÓN Y PERSUASIÓN
              </h2>
              <div className="about-resources-grid">
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>DIEZ CONSEJOS PRINCIPALES</h4>
                    <p>Ambrose ha enseñado a abogados litigantes el arte de la persuasión. Cualquiera que quiera aprender habilidades de comunicación sofisticadas puede beneficiarse.</p>
                    <a href="/top-ten-tips.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      VER CONSEJOS <Download size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Industrias Creativas y Entretenimiento */}
            <div className="ma-card" style={{ marginBottom: '40px' }}>
              <h2 className="ma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Film size={24} /> INDUSTRIAS CREATIVAS
              </h2>
              <div className="about-resources-grid">
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>VIVA LA REVOLUCIÓN EN HOLLYWOOD</h4>
                    <p>Como SAG Actor y abogado de entretenimiento, Marcus llamó a una revolución contra la corrupción en el negocio del espectáculo.</p>
                    <a href="/viva-la-revolucion.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      LEER MÁS <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>UN CONFLICTO DE INTERESES (WALL STREET)</h4>
                    <p>En 1984, escribió el guión "Un conflicto de intereses". Su historia fue adaptada sin autorización para la película ganadora del Oscar "Wall Street" (1987).</p>
                    <a href="/conflict-of-interest.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      VER HISTORIA <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>ACTUACIÓN (SAG-AFTRA)</h4>
                    <p>Ambrose es un actor de Sag-Aftra. Visualice su talento en diversas escenas cinematográficas.</p>
                    <button onClick={() => {/* show video logic */}} className="ma-btn-black" style={{ width: 'fit-content' }}>
                      VER ACTUACIÓN <Film size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Ejemplos de Escritos Legales */}
            <div className="ma-card">
              <h2 className="ma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Gavel size={24} /> EJEMPLOS DE ESCRITOS LEGALES
              </h2>
              <div className="about-resources-grid">
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>ESCRITO DE APERTURA DEL APELANTE</h4>
                    <p>Ejemplo de un escrito formal de apertura presentado en procesos de apelación en tribunales estadounidenses.</p>
                    <a href="/APPELLANTa__S_OPENING_BRIEF.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      VER ESCRITO <Download size={14} />
                    </a>
                  </div>
                </div>
                <div className="resource-item">
                  <div className="resource-content">
                    <h4>ESCRITO DE RÉPLICA COMBINADA</h4>
                    <p>Escrito de réplica combinada del apelante y del contrarespondedor, demostrando argumentación jurídica avanzada.</p>
                    <a href="/COMBINED-BRIEF.pdf" target="_blank" rel="noopener noreferrer" className="ma-btn-black" style={{ width: 'fit-content' }}>
                      VER ESCRITO <Download size={14} />
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

export default ArticlesPublications;
