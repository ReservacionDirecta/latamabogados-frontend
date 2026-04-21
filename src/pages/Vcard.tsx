import React from 'react';
import { Globe, Mail, Phone } from 'lucide-react';
import './Page.css';

const Vcard: React.FC = () => {
  return (
    <div className="page-wrapper animate-fade-in" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f7f7f7', minHeight: '80vh' }}>
      <div className="vcard-container glass-panel" style={{ maxWidth: '600px', width: '100%', padding: '40px', borderRadius: '35px', textAlign: 'center' }}>
        
        <img 
          src="/wp-content/uploads/2024/01/ambrose-marcus-abogado-1.jpg" 
          alt="Dr. Marcus Ambrose" 
          style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px', boxShadow: 'var(--shadow-md)' }}
        />
        
        <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>Dr. Marcus Ambrose</h1>
        <h2 style={{ fontSize: '18px', color: 'var(--text-light)', fontWeight: '500', marginBottom: '30px' }}>
          Especialista en procesos de inmigración de los EE.UU.
        </h2>
        
        <div style={{ height: '1px', backgroundColor: 'var(--surface-alt)', margin: '20px 0' }}></div>
        <p style={{ marginBottom: '20px', color: 'var(--secondary)', fontWeight: '600' }}>Datos de contacto</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <a href="https://www.latamabogados.com/" className="btn btn-primary" style={{ width: '100%' }}>
            <Globe size={20} /> Sitio Web
          </a>
          <a href="mailto:consulta@latamabogados.com" className="btn btn-primary" style={{ width: '100%' }}>
            <Mail size={20} /> Correo Electrónico
          </a>
          <a href="https://wa.me/5219671234787?text=Hola%20Dr.%20Marcus%2C%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20con%20usted%20desde%20su%20vCard." target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', backgroundColor: '#25D366' }}>
            <Phone size={20} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vcard;
