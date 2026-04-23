import React from 'react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import SEO from '../components/SEO';
import './AgendarClase.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="agendar-page">
      <SEO 
        title="Aviso de Privacidad - Latam Abogados" 
        description="Aviso de Privacidad de Latam Abogados. Conozca cómo protegemos y tratamos sus datos personales."
      />
      <HeaderBar />
      
      <main className="agendar-main">
        <div className="container-narrow">
          <div className="ma-top">
            <h1 className="ma-title">Aviso de Privacidad</h1>
          </div>

          <div className="ma-card" style={{ textAlign: 'left', lineHeight: '1.8' }}>
            <p><strong>Última actualización: Abril 2026</strong></p>
            
            <p>En <strong>Latam Abogados</strong>, valoramos su privacidad y estamos comprometidos a proteger sus datos personales. Este aviso describe cómo recopilamos, utilizamos y compartimos su información.</p>

            <h3 style={{ marginTop: '30px' }}>1. Información que recopilamos</h3>
            <p>Recopilamos información que usted nos proporciona directamente cuando:</p>
            <ul>
              <li>Agenda una consulta legal o una clase.</li>
              <li>Se comunica con nosotros a través de correo electrónico o WhatsApp.</li>
              <li>Descarga recursos de nuestro sitio web.</li>
            </ul>

            <h3 style={{ marginTop: '30px' }}>2. Uso de la información</h3>
            <p>Utilizamos su información para:</p>
            <ul>
              <li>Proveer los servicios legales y educativos solicitados.</li>
              <li>Enviar confirmaciones de citas y materiales relacionados.</li>
              <li>Mejorar la experiencia de nuestro sitio web.</li>
              <li>Cumplir con obligaciones legales en los Estados Unidos y México.</li>
            </ul>

            <h3 style={{ marginTop: '30px' }}>3. Protección de datos</h3>
            <p>Implementamos medidas de seguridad técnicas y administrativas para proteger sus datos contra acceso no autorizado, pérdida o alteración.</p>

            <h3 style={{ marginTop: '30px' }}>4. Sus derechos</h3>
            <p>Usted tiene derecho a acceder, rectificar o cancelar el uso de sus datos personales. Para ejercer estos derechos, puede contactarnos en <strong>marcus@latamabogados.com</strong>.</p>

            <h3 style={{ marginTop: '30px' }}>5. Cambios en este aviso</h3>
            <p>Nos reservamos el derecho de actualizar este aviso en cualquier momento. Los cambios se publicarán en esta página con la fecha de actualización correspondiente.</p>
          </div>
        </div>
      </main>

      <FooterBar />
    </div>
  );
};

export default PrivacyPolicy;
