import React from 'react';
import { Globe, Mail, Phone, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { trackEvent } from '../utils/analytics';
import './VCard.css';

const Vcard: React.FC = () => {
  return (
    <div className="vcard-page animate-fade-in">
      <SEO 
        title="Tarjeta de Contacto Digital" 
        description="Tarjeta de contacto digital del Dr. Marcus Ambrose. Especialista en Inmigración y Inglés Jurídico."
        keywords="vcard, contacto marcus ambrose, abogado ee.uu contacto"
      />
      <div className="vcard-container glass-panel">
        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
          <a href="/#inicio" className="back-link">
            <ArrowLeft size={16} /> Regresar
          </a>
        </div>

        <img 
          src="/wp-content/uploads/2024/01/ambrose-marcus-abogado-1.jpg" 
          alt="Dr. Marcus Ambrose" 
          className="vcard-photo"
        />
        
        <h1 className="vcard-name">Dr. Marcus Ambrose</h1>
        <h2 className="vcard-tagline">
          Especialista en procesos de inmigración de los EE.UU.
        </h2>
        
        <div className="vcard-divider"></div>
        <p className="vcard-label">Datos de contacto</p>

        <div className="vcard-actions">
          <a href="https://www.latamabogados.com/" className="vcard-btn vcard-btn-primary">
            <Globe size={20} /> Sitio Web
          </a>
          <a href="mailto:consulta@latamabogados.com" className="vcard-btn vcard-btn-primary">
            <Mail size={20} /> Correo Electrónico
          </a>
          <a 
            href="https://wa.me/5219671234787?text=Hola%20Dr.%20Marcus%2C%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20con%20usted%20desde%20su%20vCard." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="vcard-btn vcard-btn-whatsapp"
            onClick={() => trackEvent('whatsapp_click', { location: 'vcard_page' })}
          >
            <Phone size={20} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vcard;
