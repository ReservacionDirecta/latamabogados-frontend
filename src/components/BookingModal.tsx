import React, { useState } from 'react';
import { X, Calendar, Clock, Globe, User, Briefcase, Mail, ExternalLink } from 'lucide-react';
import { trackEvent, trackConversion } from '../utils/analytics';
import './BookingModal.css';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'clase' | 'consulta';
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    city: '',
    country: '',
    specialty: '',
    date: '',
    time: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      trackEvent('booking_submit', { booking_type: type });

      // --- MailerLite: Save lead with source tag for list separation ---
      const MAILERLITE_ACTION_URL =
        "https://assets.mailerlite.com/jsonp/2310556/forms/186565633275594594/subscribe";
      const mlSource = type === 'clase' ? 'individual_class' : 'legal_consultation';
      const mlParams = new URLSearchParams();
      mlParams.append("fields[email]", formData.email);
      mlParams.append("fields[name]", formData.name);
      mlParams.append("fields[phone]", formData.phone);
      mlParams.append("fields[city]", formData.city);
      mlParams.append("fields[country]", formData.country);
      mlParams.append("fields[especialidad]", formData.specialty);
      mlParams.append("fields[pagina_web]", formData.website);
      mlParams.append("fields[source]", mlSource);
      mlParams.append("ajax", "1");
      mlParams.append("ml-submit", "1");
      mlParams.append("anticsrf", "true");

      // Fire-and-forget — don't block the WhatsApp redirect
      fetch(MAILERLITE_ACTION_URL, {
        method: "POST",
        body: mlParams,
        mode: "no-cors",
      }).catch((err) => console.warn("MailerLite submission failed:", err));

      // --- WhatsApp message ---
      const phoneNumber = "5219671234787";
      const introText = type === 'clase' 
        ? "Hola Dr. Marcus, me gustaría agendar una clase de inglés profesional."
        : "Hola Dr. Marcus, me gustaría agendar una consulta legal.";
      
      let message = `${introText}\n\n` +
        `*Mis datos:*\n` +
        `• Nombre: ${formData.name}\n` +
        `• Teléfono: ${formData.phone}\n` +
        `• Correo: ${formData.email}\n` +
        (formData.website ? `• Web: ${formData.website}\n` : '') +
        `• Ciudad: ${formData.city}\n` +
        `• País: ${formData.country}\n` +
        (formData.specialty ? `• Especialidad: ${formData.specialty}\n` : '');
      
      const dateLabel = type === 'clase' ? "Fecha aprox. de comenzar" : "Fecha sugerida";
      message += `• ${dateLabel}: ${formData.date}\n`;
      
      if (type === 'consulta' && formData.time) {
        message += `• Horario sugerido: ${formData.time}`;
      }
      
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
      
      trackEvent('whatsapp_redirect', { type: type });
      trackConversion(type === 'clase' ? 'booking_class_success' : 'booking_consultation_success');

      window.open(whatsappUrl, '_blank');
      
      if (type === 'clase') {
        setIsSubmitted(true);
      } else {
        onClose();
      }
    } catch (error) {
      console.error('Error submitting booking form:', error);
      setSubmitError('Ocurrió un error al procesar tu solicitud. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel animate-slide-up" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-header">
          <h2 className="modal-title">
            {type === 'clase' && isSubmitted ? '¡REGISTRO COMPLETADO!' : type === 'clase' ? 'Programar Clase de Inglés' : 'Programar Consulta Legal'}
          </h2>
          <p className="modal-subtitle">
            {type === 'clase' && isSubmitted 
              ? 'Te hemos redirigido a WhatsApp para continuar.' 
              : 'Por favor, completa tus datos para coordinar vía WhatsApp.'}
          </p>
        </div>

        {isSubmitted && type === 'clase' ? (
          <div style={{ padding: '20px 0', textAlign: 'center' }}>
            <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '12px', marginBottom: '25px', border: '1px solid #eee' }}>
              <h4 style={{ fontWeight: '800', fontSize: '1.1rem', color: '#1e1f33', marginBottom: '10px' }}>🎁 Tu PDF GRATIS</h4>
              <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '15px' }}>Descarga <strong>GRATIS</strong> nuestra guía "Common Law vs Civil Law" del Dr. Ambrose. ¡Sin costo alguno!</p>
              <a 
                href="/Common Law vs Civil Law - Dr. Marcus Ambrose - es.pdf" 
                download
                className="ma-btn-black"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px', 
                  fontSize: '0.9rem', 
                  fontWeight: '800', 
                  borderRadius: '8px', 
                  backgroundColor: 'var(--latam-maroon)', 
                  color: 'white', 
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(142, 61, 74, 0.2)'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                DESCARGAR PDF GRATIS
              </a>
            </div>

            <button 
              onClick={() => {
                onClose();
                setIsSubmitted(false);
                setFormData({
                  name: '', phone: '', email: '', website: '', city: '', country: '', specialty: '', date: '', time: ''
                });
              }}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: '#666', 
                textDecoration: 'underline', 
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Cerrar ventana
            </button>
          </div>
        ) : (
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-row">
            <div className="form-group">
              <label><User size={18} /> Nombre Completo <span className="label-required">Obligatorio</span></label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="Ej. Abogado Juan Pérez"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label><Mail size={18} /> Correo Electrónico <span className="label-required">Obligatorio</span></label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="nombre@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label><Globe size={18} /> Teléfono <span className="label-required">Obligatorio</span></label>
              <input 
                type="tel" 
                name="phone" 
                required 
                placeholder="Ej. +52 1 234..."
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label><ExternalLink size={18} /> Página Web (Opcional)</label>
              <input 
                type="url" 
                name="website" 
                placeholder="https://susitio.com"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label><Globe size={18} /> Ciudad <span className="label-required">Obligatorio</span></label>
              <input 
                type="text" 
                name="city" 
                required 
                placeholder="Ej. Bogotá"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label><Globe size={18} /> País <span className="label-required">Obligatorio</span></label>
              <input 
                type="text" 
                name="country" 
                required 
                placeholder="Ej. Colombia"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label><Briefcase size={18} /> Especialidad (Opcional)</label>
            <input 
              type="text" 
              name="specialty" 
              placeholder="Ej. Derecho Corporativo"
              value={formData.specialty}
              onChange={handleChange}
            />
          </div>

          <div className={type === 'clase' ? 'form-group' : 'form-row'}>
            <div className="form-group">
              <label><Calendar size={18} /> {type === 'clase' ? 'Fecha aproximada de comenzar' : 'Fecha sugerida'} <span className="label-required">Obligatorio</span></label>
              <input 
                type="date" 
                name="date" 
                required 
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            {type === 'consulta' && (
              <div className="form-group">
                <label><Clock size={18} /> Horario sugerido <span className="label-required">Obligatorio</span></label>
                <input 
                  type="time" 
                  name="time" 
                  required 
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          <p className="form-note" style={{ fontSize: '0.8rem', color: '#666', marginTop: '10px' }}>
            <span className="label-required">Obligatorio</span> Campos obligatorios
          </p>

          {submitError && (
            <p style={{ color: 'red', fontSize: '0.8rem', textAlign: 'center', marginBottom: '10px' }}>
              {submitError}
            </p>
          )}

          <button type="submit" className="modal-submit-btn" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1 }}>
            <i className="fab fa-whatsapp"></i> {isSubmitting ? 'Procesando...' : 'Enviar por WhatsApp'}
          </button>

          <p style={{ 
            fontSize: '0.75rem', 
            color: '#777', 
            textAlign: 'center', 
            marginTop: '12px', 
            marginBottom: '0px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '5px',
            fontWeight: '500'
          }}>
            <span>🔒</span> Jamás compartiremos sus datos
          </p>
        </form>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
