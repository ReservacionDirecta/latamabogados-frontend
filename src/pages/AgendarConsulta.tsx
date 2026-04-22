import React, { useState } from 'react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import BookingModal from '../components/BookingModal';
import SEO from '../components/SEO';
import './AgendarClase.css'; 

const AgendarConsulta: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="agendar-page">
      <SEO 
        title="Agendar Consulta Legal" 
        description="Programar una consulta legal con el Dr. Marcus Ambrose. Asesoría jurídica en EE.UU., procesos migratorios y servicios corporativos internacionales."
        keywords="consulta legal abogado usa, servicios legales estados unidos, abrir cuenta bancaria usa, constituir empresa usa"
      />
      <HeaderBar />
      
      <main className="agendar-main">
        <div className="container-narrow">
          <div className="ma-top">
            <div className="ma-photo">
              <img src="/Dr. Marcus Ambrose.png" alt="Dr. Marcus Ambrose - Asesoría Legal Internacional" />
            </div>

            <h2 className="ma-title">Programar Consulta o <br /> Servicio Legal</h2>

            <p className="ma-lead">
              Si usted esta buscando a consultar o contratar un abogado estadounidense, cuyas tarifas por hora son excesivamente altas, usted puede beneficiarse de honorarios legales muy accesibles de Latam Abogados.
            </p>
          </div>

          <div className="ma-grid-single">
            <div className="ma-card">
              <h3 className="ma-card-title">Nuestros Servicios Legales</h3>
              <p className="ma-intro">
                Brindamos asesoría jurídica especializada y gestión corporativa en EE.UU. con un enfoque práctico y económico para clientes latinoamericanos.
              </p>

              <ul className="ma-features">
                <li>
                  <span className="ma-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm1 17.93V20a1 1 0 0 1-2 0v-1.06a4.5 4.5 0 0 1-3.5-4.38 1 1 0 0 1 2 0 2.5 2.5 0 0 0 5 0c0-1.38-1.1-1.88-3-2.43-2.08-.61-4.5-1.37-4.5-4.07A4.48 4.48 0 0 1 11 3.06V2a1 1 0 0 1 2 0v1.06a4.5 4.5 0 0 1 3.5 4.38 1 1 0 0 1-2 0 2.5 2.5 0 0 0-5 0c0 1.13.89 1.55 2.82 2.12 2.16.64 4.68 1.45 4.68 4.38A4.48 4.48 0 0 1 13 18.93Z"></path></svg>
                  </span>
                  <span><strong>CONSULTAS LEGALES 1/2 HORA:</strong> $1000 MXN o $50 USD.</span>
                </li>

                <li>
                  <span className="ma-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2a1 1 0 0 0-2 0v2H8V2a1 1 0 0 0-2 0v2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10h16Zm0-10H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></path></svg>
                  </span>
                  <span><strong>CONTRATACIÓN POR PROYECTOS:</strong> $2000 MXN o $100 USD POR HORA—5 horas mínimas.</span>
                </li>

                <li>
                  <span className="ma-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                  </span>
                  <span><strong>SERVICIOS CORPORATIVOS:</strong> FORMAMOS SOCIEDADES ANÓNIMAS Y ABRIMOS CUENTAS BANCARIAS EN EE.UU DESDE $500 USD, MAS GASTOS.</span>
                </li>
              </ul>

              <div className="ma-highlight">
                Gestión legal eficiente en EE.UU. diseñada para abogados y empresarios de Latinoamérica.
              </div>

              <div className="ma-actions">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="ma-btn ma-btn-whatsapp"
                >
                  <i className="fab fa-whatsapp"></i> Programe su consulta ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type="consulta" 
      />

      <FooterBar />
    </div>
  );
};

export default AgendarConsulta;
