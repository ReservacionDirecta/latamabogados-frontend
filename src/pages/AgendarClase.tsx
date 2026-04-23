import React, { useState } from 'react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import BookingModal from '../components/BookingModal';
import SEO from '../components/SEO';
import './AgendarClase.css';

const AgendarClase: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="agendar-page">
      <SEO 
        title="Agendar Clase de Inglés Profesional" 
        description="Reserve su clase personalizada de Inglés Jurídico y Legal English con el Dr. Marcus Ambrose. Formación práctica para abogados con proyección internacional."
        keywords="clases inglés jurídico, legal english online, curso inglés para abogados, aprender inglés legal, dr marcus ambrose"
      />
      <HeaderBar />
      
      <main className="agendar-main">
        <div className="container-narrow">
          <div className="ma-top-horizontal">
            <div className="ma-photo">
              <img src="/clase de ingles legal online.png" alt="Clase de Inglés Jurídico y Legal English Online - Dr. Marcus Ambrose" />
            </div>

            <div className="ma-header-content">
              <h2 className="ma-title">APRENDA INGLÉS PROFESIONAL CON DR. MARCUS AMBROSE</h2>
            </div>
          </div>

          <p className="ma-lead-bottom">
            LA HABILIDAD DE HABLAR E ESCRIBIR INGLÉS PROFESIONAL SE HA CONVERTIDO EN UNA HERRAMIENTA INDISPENSABLE PARA ABOGADOS LATINOAMERICANOS CON CLIENTES, ASUNTOS Y COLEGAS INTERNACIONALES
          </p>

          <div className="ma-grid-single">
            <div className="ma-card">
              <h3 className="ma-card-title">Clases individuales en Google Meet con el Dr. Marcus Ambrose</h3>
              <p className="ma-intro">
                EL CURSO ESTÁ DISEÑADO A MEDIDA DE SUS METAS Y NECESIDADES PARA UN CONTEXTO JURÍDICO PROFESIONAL EN UN CONTEXTO PRÁCTICO.
              </p>

              <ul className="ma-features">
                <li>
                  <span className="ma-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm1 17.93V20a1 1 0 0 1-2 0v-1.06a4.5 4.5 0 0 1-3.5-4.38 1 1 0 0 1 2 0 2.5 2.5 0 0 0 5 0c0-1.38-1.1-1.88-3-2.43-2.08-.61-4.5-1.37-4.5-4.07A4.48 4.48 0 0 1 11 3.06V2a1 1 0 0 1 2 0v1.06a4.5 4.5 0 0 1 3.5 4.38 1 1 0 0 1-2 0 2.5 2.5 0 0 0-5 0c0 1.13.89 1.55 2.82 2.12 2.16.64 4.68 1.45 4.68 4.38A4.48 4.48 0 0 1 13 18.93Z"></path></svg>
                  </span>
                  <span>PRECIO PROMOCIONAL: $50 USD POR HORA **</span>
                </li>

                <li>
                  <span className="ma-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2a1 1 0 0 0-2 0v2H8V2a1 1 0 0 0-2 0v2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10h16Zm0-10H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></path></svg>
                  </span>
                  <span>MÍNIMO 10 HORAS PAGADAS POR ADELANTADO</span>
                </li>

                <li>
                  <span className="ma-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 6a1 1 0 0 1 1 1v4.38l2.45 1.41a1 1 0 1 1-1 1.74l-2.95-1.7A1 1 0 0 1 11 13V7a1 1 0 0 1 1-1Zm0-4a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"></path></svg>
                  </span>
                  <span>HORARIOS Y DÍAS FLEXIBLES</span>
                </li>

                <li>
                  <span className="ma-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 0a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm8 2c-2.67 0-8 1.34-8 4v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2c0-2.66-5.33-4-8-4ZM8 13c-.29 0-.62.01-.97.04A5.94 5.94 0 0 1 10 17v2H1a1 1 0 0 1-1-1v-1c0-2.66 5.33-4 8-4Z"></path></svg>
                  </span>
                  <span>SE PUEDEN COMPARTIR HORAS PROGRAMADAS CON OTROS MIEMBROS DE SU BUFETE.</span>
                </li>

                <li>
                  <span className="ma-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                  </span>
                  <span>CLASES PARA HABLANTES DE INGLÉS: DESDE PRINCIPIANTES HASTA AVANZADO</span>
                </li>
              </ul>

              

              <div className="ma-footnote" style={{ fontSize: '0.85em' }}>
                ** EL PRECIO PROMOCIONAL SE MANTIENE VIGENTE CON PAQUETES DE CLASES DE 10-50 HORAS PREPAGADOS. DESPUES EL COSTO AUMENTARÁ. SE PUEDE COMPARTIR EL PAQUETE CON OTROS MIEMBROS DE SU BUFETE.
              </div>

              <div className="ma-actions">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="ma-btn ma-btn-whatsapp"
                >
                  <i className="fab fa-whatsapp"></i> Programe clases ahora
                </button>
              </div>
            </div>

            <div className="ma-card ma-comparison-card">
              <h3 className="ma-card-title">POR QUÉ ELEGIR LATAM ABOGADOS</h3>
              <div className="ma-comparison-wrapper">
                <table className="ma-comparison-table">
                  <thead>
                    <tr>
                      <th>CARACTERÍSTICA</th>
                      <th>LATAM ABOGADOS</th>
                      <th>LA COMPETENCIA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PROFESOR DOCTORADO EN DERECHO (VERSUS LAICO)</td>
                      <td><span className="ma-check">✅</span> SI</td>
                      <td><span className="ma-cross">❌</span> NO</td>
                    </tr>
                    <tr>
                      <td>40 AÑOS DE EXPERIENCIA LEGAL INTERNACIONAL</td>
                      <td><span className="ma-check">✅</span> SI</td>
                      <td><span className="ma-cross">❌</span> NO</td>
                    </tr>
                    <tr>
                      <td>MAESTRÍA EN ENSEÑANZA DE INGLÉS</td>
                      <td><span className="ma-check">✅</span> SI</td>
                      <td><span className="ma-cross">❌</span> NO</td>
                    </tr>
                    <tr>
                      <td>CLASES HECHAS A MEDIDA (VERSUS RÍGIDAS)</td>
                      <td><span className="ma-check">✅</span> SI</td>
                      <td><span className="ma-cross">❌</span> NO</td>
                    </tr>
                    <tr>
                      <td>SESIONES PRIVADAS Y PERSONALIZADAS (VERSUS PRE-GRABADAS)</td>
                      <td><span className="ma-check">✅</span> SI</td>
                      <td><span className="ma-cross">❌</span> NO</td>
                    </tr>
                    <tr>
                      <td>ENSEÑANZA PRÁCTICA Y ÚTIL (VERSUS TEÓRICA)</td>
                      <td><span className="ma-check">✅</span> SI</td>
                      <td><span className="ma-cross">❌</span> NO</td>
                    </tr>
                    <tr>
                      <td>SESIONES DE 1 HORA COMPLETA (VERSUS 50 MIN)</td>
                      <td><span className="ma-check">✅</span> SI</td>
                      <td><span className="ma-cross">❌</span> NO</td>
                    </tr>
                    <tr>
                      <td>MODALIDAD EXCLUSIVA (INDIVIDUAL VERSUS GRUPAL)</td>
                      <td><span className="ma-check">✅</span> INDIVIDUAL</td>
                      <td><span className="ma-cross">❌</span> NO</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type="clase" 
      />

      <FooterBar />
    </div>
  );
};

export default AgendarClase;
