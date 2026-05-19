import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import './BookingModal.css';

declare global {
  interface Window {
    fbq: any;
  }
}

interface GroupOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GroupOptionsModal: React.FC<GroupOptionsModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    last_name: '',
    phone: '',
    city: '',
    country: '',
    specialty: '',
    website: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fieldName = name.match(/\[(.*?)\]/)?.[1] || name;
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  // Helper to hash data using SHA-256 for Meta CAPI compliance
  const sha256 = async (message: string) => {
    if (!message) return null;
    const msgBuffer = new TextEncoder().encode(message.trim().toLowerCase());
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const MAILERLITE_ACTION_URL = 'https://assets.mailerlite.com/jsonp/2310556/forms/186565633275594594/subscribe';
  const FACEBOOK_ACCESS_TOKEN = 'EAASzhKZCH3lEBRcwPlDUOP9NHzQxBMU5MDcyzK0fZA0QvDQcvaMfjTZB4sxs9SClpXhd1yhzyJUonIZBxAGUuAHnasx5nsbgZCoIdsbsVWbzCEYEZCYJWZCWDuqmzNwfLdySqZCvITzUe7nLZBuK6IbATm13G1eURHyt4u4xPoPw7STizGsYutNldjMbVjJj2sv6jFwZDZD';
  const PIXEL_ID = '4357457554583645';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // 1. MailerLite Submission
    const mlParams = new URLSearchParams();
    mlParams.append('fields[email]', formData.email);
    mlParams.append('fields[name]', formData.name);
    mlParams.append('fields[last_name]', formData.last_name);
    mlParams.append('fields[phone]', formData.phone);
    mlParams.append('fields[city]', formData.city);
    mlParams.append('fields[country]', formData.country);
    mlParams.append('fields[specialty]', formData.specialty);
    mlParams.append('fields[website]', formData.website);
    mlParams.append('groups[]', '186565645473678409');
    mlParams.append('ajax', '1');

    try {
      // Parallel submission: MailerLite + Facebook Pixel + Facebook CAPI
      const mlRequest = fetch(MAILERLITE_ACTION_URL, { method: 'POST', body: mlParams, mode: 'no-cors' });
      
      // Facebook Pixel (Browser-side)
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Inscripción Clases Grupales',
          value: 25.00,
          currency: 'USD'
        });
      }

      // Facebook CAPI (Server-side simulation from Frontend)
      const hashedEmail = await sha256(formData.email);
      const hashedPhone = await sha256(formData.phone);
      
      const capiRequest = fetch(`https://graph.facebook.com/v17.0/${PIXEL_ID}/events?access_token=${FACEBOOK_ACCESS_TOKEN}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [{
            event_name: 'Lead',
            event_time: Math.floor(Date.now() / 1000),
            action_source: 'website',
            user_data: {
              em: [hashedEmail],
              ph: hashedPhone ? [hashedPhone] : []
            },
            custom_data: {
              currency: 'USD',
              value: '25.00'
            }
          }]
        })
      });

      await Promise.allSettled([mlRequest, capiRequest]);

      setStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel animate-slide-up" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-header">
          <h2 className="modal-title">MODALIDADES DE COLABORACIÓN GRUPAL</h2>
          <p className="modal-subtitle">Formatos dinámicos diseñados para optimizar recursos y <br /> fomentar el aprendizaje colectivo.</p>
        </div>

        <div className="ma-modal-body" style={{ padding: '20px 0' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <CheckCircle size={60} color="#10B981" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '10px' }}>¡SOLICITUD ENVIADA!</h3>
              <p style={{ color: '#666', marginBottom: '25px' }}>Hemos recibido tus datos correctamente. Te contactaremos pronto.</p>
              
              <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '12px', marginBottom: '25px', border: '1px solid #eee' }}>
                <h4 style={{ fontWeight: '800', fontSize: '1.1rem', color: '#1e1f33', marginBottom: '10px' }}>🎁 Tu Regalo Especial</h4>
                <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '15px' }}>Como agradecimiento por tu interés, puedes descargar nuestra guía gratuita.</p>
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
                  DESCARGAR PDF
                </a>
              </div>

              <button 
                onClick={() => {
                  onClose();
                  setStatus('idle');
                  setFormData({
                    email: '', name: '', last_name: '', phone: '', city: '', country: '', specialty: '', website: ''
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
            <>
              <ul className="ma-features" style={{ marginBottom: '30px', textAlign: 'justify', textJustify: 'inter-word' }}>
                <li style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span className="ma-icon" style={{ flexShrink: 0, marginTop: '4px', color: 'var(--latam-maroon)' }}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 0a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm8 2c-2.67 0-8 1.34-8 4v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2c0-2.66-5.33-4-8-4ZM8 13c-.29 0-.62.01-.97.04A5.94 5.94 0 0 1 10 17v2H1a1 1 0 0 1-1-1v-1c0-2.66 5.33-4 8-4Z"></path></svg>
                    </span>
                    <div>
                      <span style={{ fontSize: '0.95rem', fontWeight: '500', lineHeight: '1.4', display: 'block', textTransform: 'uppercase' }}>
                        <strong style={{ fontWeight: '800', color: '#1e1f33' }}>CLASES CON SUS COLEGAS:</strong> <span className="ma-price-tag">$25 USD</span> POR HORA A CADA PARTICIPANTE. SESIONES DISEÑADAS PARA BUFETES O GRUPOS CON INVERSIÓN COMPARTIDA.
                      </span>
                      <p style={{ fontSize: '0.8rem', marginTop: '6px', color: '#777', fontWeight: '600', textTransform: 'uppercase' }}>
                        Nota: Se requiere un mínimo de 3 participantes por sesión.
                      </p>
                    </div>
                  </div>
                </li>

                <li style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span className="ma-icon" style={{ flexShrink: 0, marginTop: '4px', color: 'var(--latam-maroon)' }}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M19 4h-1V2a1 1 0 0 0-2 0v2H8V2a1 1 0 0 0-2 0v2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10h16Zm0-10H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></path></svg>
                    </span>
                    <div>
                      <span style={{ fontSize: '0.95rem', fontWeight: '500', lineHeight: '1.4', display: 'block', textTransform: 'uppercase' }}>
                        <strong style={{ fontWeight: '800', color: '#1e1f33' }}>CURSOS SABATINOS:</strong> <span className="ma-price-tag">$25 USD</span> POR HORA. PROGRAMAS EN LÍNEA. CUPOS LIMITADOS.
                      </span>
                      <p style={{ fontSize: '0.8rem', marginTop: '6px', color: '#777', fontWeight: '600', textTransform: 'uppercase' }}>
                        NOTA: Para recibir promociones, contenido gratuito y la invitación al próximo ciclo antes de que inicie, debes inscribirte en la lista de espera. 🎁
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="ma-economic-footer" style={{ padding: '25px', background: 'rgba(142, 61, 74, 0.03)', borderRadius: '16px', border: '1px solid rgba(142, 61, 74, 0.1)' }}>
                <p style={{ fontWeight: '800', marginBottom: '15px', fontSize: '0.85rem', textAlign: 'center', color: '#1e1f33', letterSpacing: '0.05em' }}>
                  SOLICITE SU INSCRIPCIÓN AL PRÓXIMO CICLO Y OBTENGA SU:
                </p>
                
                <form onSubmit={handleSubmit} className="ma-mailchimp-form">
                  <div style={{ display: 'grid', gap: '10px' }}>
                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', marginBottom: '3px', color: '#1e1f33', opacity: 0.8 }}>CORREO ELECTRÓNICO <span style={{ color: 'var(--latam-maroon)' }}>*</span></label>
                      <input type="email" name="fields[email]" value={formData.email} onChange={handleInputChange} placeholder="ejemplo@correo.com" required style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #eee', fontSize: '0.85rem', outline: 'none' }} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div className="form-group">
                        <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', marginBottom: '3px', color: '#1e1f33', opacity: 0.8 }}>NOMBRE <span style={{ color: 'var(--latam-maroon)' }}>*</span></label>
                        <input type="text" name="fields[name]" value={formData.name} onChange={handleInputChange} placeholder="Juan" required style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #eee', fontSize: '0.85rem', outline: 'none' }} />
                      </div>
                      <div className="form-group">
                        <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', marginBottom: '3px', color: '#1e1f33', opacity: 0.8 }}>APELLIDOS <span style={{ color: 'var(--latam-maroon)' }}>*</span></label>
                        <input type="text" name="fields[last_name]" value={formData.last_name} onChange={handleInputChange} placeholder="Pérez" required style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #eee', fontSize: '0.85rem', outline: 'none' }} />
                      </div>
                    </div>

                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', marginBottom: '3px', color: '#1e1f33', opacity: 0.8 }}>NÚMERO DE TELÉFONO <span style={{ color: 'var(--latam-maroon)' }}>*</span></label>
                      <input type="tel" name="fields[phone]" value={formData.phone} onChange={handleInputChange} placeholder="+52 1..." required style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #eee', fontSize: '0.85rem', outline: 'none' }} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div className="form-group">
                        <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', marginBottom: '3px', color: '#1e1f33', opacity: 0.8 }}>CIUDAD</label>
                        <input type="text" name="fields[city]" value={formData.city} onChange={handleInputChange} placeholder="Ej. Bogotá" style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #eee', fontSize: '0.85rem', outline: 'none' }} />
                      </div>
                      <div className="form-group">
                        <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', marginBottom: '3px', color: '#1e1f33', opacity: 0.8 }}>PAÍS</label>
                        <input type="text" name="fields[country]" value={formData.country} onChange={handleInputChange} placeholder="Ej. Colombia" style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #eee', fontSize: '0.85rem', outline: 'none' }} />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div className="form-group">
                        <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', marginBottom: '3px', color: '#1e1f33', opacity: 0.8 }}>ESPECIALIDAD</label>
                        <input type="text" name="fields[specialty]" value={formData.specialty} onChange={handleInputChange} placeholder="Ej. Civil" style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #eee', fontSize: '0.85rem', outline: 'none' }} />
                      </div>
                      <div className="form-group">
                        <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', marginBottom: '3px', color: '#1e1f33', opacity: 0.8 }}>PÁGINA WEB</label>
                        <input type="text" name="fields[website]" value={formData.website} onChange={handleInputChange} placeholder="https://..." style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #eee', fontSize: '0.85rem', outline: 'none' }} />
                      </div>
                    </div>

                    {status === 'error' && (
                      <p style={{ color: 'red', fontSize: '0.75rem', textAlign: 'center', marginTop: '5px' }}>
                        Ocurrió un error. Por favor intenta de nuevo.
                      </p>
                    )}

                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="ma-btn-black"
                      style={{ 
                        width: '100%', 
                        padding: '12px', 
                        fontSize: '0.9rem', 
                        fontWeight: '800', 
                        cursor: status === 'loading' ? 'not-allowed' : 'pointer', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        gap: '10px', 
                        marginTop: '10px', 
                        borderRadius: '12px', 
                        backgroundColor: '#1e1f33', 
                        color: 'white', 
                        border: 'none',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 4px 12px rgba(30, 31, 51, 0.15)',
                        opacity: status === 'loading' ? 0.7 : 1
                      }}
                    >
                      {status === 'loading' ? 'ENVIANDO...' : 'ENVIAR SOLICITUD'} <Send size={18} />
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
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupOptionsModal;
