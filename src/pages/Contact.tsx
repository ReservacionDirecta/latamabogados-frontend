import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import './Page.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Connect this to Formspree or custom backend API
    // Placeholder logic for now
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <div className="page-wrapper animate-fade-in">
      <div className="page-header" style={{ backgroundImage: 'url(/wp-content/uploads/2023/07/bg-ambrose.png)' }}>
        <div className="container">
          <h1>Contacto</h1>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="container py-5">
        <div className="content-grid border-container">
          <div className="content-sidebar">
            <div className="sidebar-box glass-panel">
              <h3>Información Directa</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <Mail size={20} color="var(--primary)" />
                  <div>
                    <strong>Correo</strong><br/>
                    <a href="mailto:consulta@latamabogados.com">consulta@latamabogados.com</a>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <Phone size={20} color="var(--primary)" />
                  <div>
                    <strong>WhatsApp / Teléfono</strong><br/>
                    <a href="https://wa.me/5219671234787?text=Hola%20Dr.%20Marcus%2C%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20con%20usted%20desde%20su%20sitio%20web." target="_blank" rel="noopener noreferrer">+52 1 967 123 4787</a>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={20} color="var(--primary)" />
                  <div>
                    <strong>Modalidad</strong><br/>
                    <span>Atención Internacional (Virtual)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="content-main">
            <h2>Ponte en contacto con el Dr. Ambrose</h2>
            <p>Llena el siguiente formulario para estar en contacto y solicitar información sobre cómo podemos ayudarte con tu situación legal o proceso migratorio hacia EE.UU.</p>
            
            {submitSuccess ? (
              <div className="glass-panel text-center" style={{ padding: '40px', backgroundColor: '#e8f5e9', borderLeft: '4px solid #4caf50' }}>
                <h3 style={{ color: '#2e7d32', marginBottom: '10px' }}>¡Mensaje Enviado con Éxito!</h3>
                <p>Gracias por contactarnos. El equipo del Dr. Ambrose revisará tu mensaje y se pondrá en contacto pronto.</p>
                <button className="btn btn-outline mt-4" onClick={() => setSubmitSuccess(false)}>Enviar otro mensaje</button>
              </div>
            ) : (
              <form className="contact-form mt-4" onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Nombre completo *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px' }} 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Teléfono de contacto</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px' }} 
                    />
                  </div>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Correo electrónico *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px' }} 
                  />
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Mensaje o consulta *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required 
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical' }} 
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ width: '100%', fontSize: '1.1rem', padding: '15px' }}>
                  {isSubmitting ? 'Enviando...' : <><Send size={20} /> Enviar Mensaje</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
