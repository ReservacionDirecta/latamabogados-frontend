import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, ArrowLeft } from 'lucide-react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import SEO from '../components/SEO';
import { trackEvent, trackConversion } from '../utils/analytics';
import './AgendarClase.css'; 
import './About.css';

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
    
    trackEvent('form_start', { form_id: 'contact_form' });

    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      trackEvent('form_submission', { form_id: 'contact_form' });
      trackConversion('contact_success');
    }, 1500);
  };

  return (
    <div className="agendar-page about-page">
      <SEO 
        title="Contacto" 
        description="Póngase en contacto con el Dr. Marcus Ambrose para consultas legales o información sobre clases de Inglés Jurídico."
        keywords="contacto abogado, marcus ambrose, consulta legal, bufete internacional"
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
            <h2 className="ma-title">Contacto</h2>
            <p className="ma-lead">
              Ponte en contacto con el Dr. Ambrose para solicitar información sobre cómo podemos ayudarte con tu situación legal o proceso migratorio hacia EE.UU.
            </p>
          </div>

          <div className="ma-grid-single">
            <div className="ma-card">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="contact-grid-mobile">
                {/* Info Column */}
                <div>
                  <h3 className="ma-card-title">Información Directa</h3>
                  <ul className="ma-features" style={{ marginTop: '20px' }}>
                    <li style={{ alignItems: 'flex-start' }}>
                      <span className="ma-icon"><Mail size={20} /></span>
                      <div>
                        <strong>Correo</strong><br/>
                        <a href="mailto:consulta@latamabogados.com" style={{ color: 'var(--ma-accent-color)', textDecoration: 'none' }}>consulta@latamabogados.com</a>
                      </div>
                    </li>
                    <li style={{ alignItems: 'flex-start' }}>
                      <span className="ma-icon"><Phone size={20} /></span>
                      <div>
                        <strong>WhatsApp / Teléfono</strong><br/>
                        <a 
                          href="https://wa.me/5219671234787" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ color: 'var(--ma-accent-color)', textDecoration: 'none' }}
                          onClick={() => trackEvent('whatsapp_click', { location: 'contact_page' })}
                        >
                          +52 1 967 123 4787
                        </a>
                      </div>
                    </li>
                    <li style={{ alignItems: 'flex-start' }}>
                      <span className="ma-icon"><MapPin size={20} /></span>
                      <div>
                        <strong>Modalidad</strong><br/>
                        <span>Atención Internacional (Virtual)</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Form Column */}
                <div>
                  <h3 className="ma-card-title">Envíanos un mensaje</h3>
                  {submitSuccess ? (
                    <div className="ma-highlight" style={{ backgroundColor: '#e8f5e9', color: '#2e7d32' }}>
                      <h4 style={{ marginBottom: '10px' }}>¡Mensaje Enviado!</h4>
                      <p>Gracias por contactarnos. Le responderemos a la brevedad.</p>
                      <button className="ma-btn ma-btn-outline" style={{ marginTop: '15px' }} onClick={() => setSubmitSuccess(false)}>Enviar otro</button>
                    </div>
                  ) : (
                    <form className="ma-form" onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                      <div style={{ marginBottom: '15px' }}>
                        <input 
                          type="text" 
                          name="name" 
                          placeholder="Nombre completo *" 
                          required 
                          value={formData.name}
                          onChange={handleInputChange}
                          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                        />
                      </div>
                      <div style={{ marginBottom: '15px' }}>
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="Correo electrónico *" 
                          required 
                          value={formData.email}
                          onChange={handleInputChange}
                          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                        />
                      </div>
                      <div style={{ marginBottom: '15px' }}>
                        <textarea 
                          name="message" 
                          placeholder="Tu consulta *" 
                          rows={4} 
                          required 
                          value={formData.message}
                          onChange={handleInputChange}
                          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                        ></textarea>
                      </div>
                      <button type="submit" className="ma-btn ma-btn-whatsapp" disabled={isSubmitting} style={{ width: '100%', backgroundColor: 'var(--ma-accent-color)' }}>
                        {isSubmitting ? 'Enviando...' : <><Send size={18} /> Enviar Mensaje</>}
                      </button>
                    </form>
                  )}
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

export default Contact;
