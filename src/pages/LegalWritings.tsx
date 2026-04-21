import React from 'react';
import { Download } from 'lucide-react';
import './Page.css';

const LegalWritings: React.FC = () => {
  return (
    <div className="page-wrapper animate-fade-in">
      <div className="page-header" style={{ backgroundImage: 'url(/wp-content/uploads/2023/07/bg-ambrose.png)' }}>
        <div className="container">
          <h1>Ejemplos de escritos legales</h1>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="container py-5">
        <div className="content-main" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="text-center mb-4">
            A continuación, el Dr. Marcus Ambrose comparte escritos legales reales (con información confidencial editada) para demostrar el estándar y calidad de argumentación y formato utilizados en tribunales superiores.
          </p>
          
          <div className="publication-list">
            <div className="glass-panel" style={{ padding: '30px', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>ESCRITO DE APERTURA DEL APELANTE</h2>
              <p className="mb-3">
                Ejemplo de un "Appellant's Opening Brief" presentado ante la corte de apelaciones.
              </p>
              <a href="/wp-content/uploads/2024/01/APPELLANTa__S_OPENING_BRIEF.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Download size={18} /> Ver Documento PDF
              </a>
            </div>

            <div className="glass-panel" style={{ padding: '30px' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>ESCRITO DE RÉPLICA COMBINADA DEL APELANTE Y DEL CONTRARESPONDEDOR</h2>
              <p className="mb-3">
                Ejemplo de un "Combined Brief" demostrando estrategias de respuesta legal compleja.
              </p>
              <a href="/wp-content/uploads/2024/01/COMBINED-BRIEF.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Download size={18} /> Ver Documento PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalWritings;
