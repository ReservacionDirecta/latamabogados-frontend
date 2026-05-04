import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import './BookingModal.css';

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
    // Extract the field name from fields[name] format
    const fieldName = name.match(/\[(.*?)\]/)?.[1] || name;
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  // We use the MailerLite Form Action URL which handles CORS and security properly 
  // without exposing the secret API key in the frontend.
  const MAILERLITE_ACTION_URL = 'https://assets.mailerlite.com/jsonp/2310556/forms/186565633275594594/subscribe';

  const handleSubmit = async (e: React.FormEvent) => {
    // Note: If the MailerLite Universal Script is working correctly, 
    // it may intercept this form automatically if we use their specific classes.
    // Here we implement a manual fetch to the JSONP endpoint for maximum control.
    e.preventDefault();
    setStatus('loading');

    const params = new URLSearchParams();
    params.append('fields[email]', formData.email);
    params.append('fields[name]', formData.name);
    params.append('fields[last_name]', formData.last_name);
    params.append('fields[phone]', formData.phone);
    params.append('fields[city]', formData.city);
    params.append('fields[country]', formData.country);
    params.append('fields[specialty]', formData.specialty);
    params.append('fields[website]', formData.website);
    params.append('groups[]', '186565645473678409');
    params.append('ajax', '1');

    try {
      // Using no-cors or JSONP approach via form submission to a hidden iframe 
      // or simple fetch if the endpoint supports it.
      // For MailerLite JSONP, we can use a standard form submit if we don't mind a redirect,
      // but for SPA we prefer this:
      const response = await fetch(MAILERLITE_ACTION_URL, {
        method: 'POST',
        body: params,
        mode: 'no-cors' // This avoids CORS preflight but we won't see the response body
      });

      // Since mode is 'no-cors', we assume success if no error is thrown
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({
          email: '', name: '', last_name: '', phone: '', city: '', country: '', specialty: '', website: ''
        });
      }, 3000);
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
          <p className="modal-subtitle">Formatos dinámicos diseñados para optimizar recursos y fomentar el aprendizaje colectivo.</p>
        </div>

        <div className="ma-modal-body" style={{ padding: '20px 0' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <CheckCircle size={60} color="#10B981" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '10px' }}>¡SOLICITUD ENVIADA!</h3>
              <p style={{ color: '#666' }}>Hemos recibido tus datos correctamente. Te contactaremos pronto.</p>
            </div>
          ) : (
            <>
              <ul className="ma-features" style={{ marginBottom: '30px' }}>
                <li style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span className="ma-icon" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 0a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm8 2c-2.67 0-8 1.34-8 4v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2c0-2.66-5.33-4-8-4ZM8 13c-.29 0-.62.01-.97.04A5.94 5.94 0 0 1 10 17v2H1a1 1 0 0 1-1-1v-1c0-2.66 5.33-4 8-4Z"></path></svg>
                    </span>
                    <div>
                      <span><strong>CLASES CON SUS COLEGAS:</strong> <span className="ma-price-tag">$25 USD</span> POR HORA A CADA PARTICIPANTE. SESIONES DISEÑADAS PARA BUFETES O GRUPOS CON INVERSIÓN COMPARTIDA.</span>
                      <p style={{ fontSize: '0.85rem', marginTop: '8px', color: '#666', fontStyle: 'italic' }}>
                        Nota: Se requiere un mínimo de 3 participantes por sesión.
                      </p>
                    </div>
                  </div>
                </li>

                <li style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span className="ma-icon" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M19 4h-1V2a1 1 0 0 0-2 0v2H8V2a1 1 0 0 0-2 0v2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10h16Zm0-10H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></path></svg>
                    </span>
                    <div>
                      <span><strong>CURSOS SABATINOS:</strong> <span className="ma-price-tag">$25 USD</span> POR HORA. PROGRAMAS EN LÍNEA. CUPOS LIMITADOS.</span>
                      <p style={{ marginTop: '8px', color: '#666', fontStyle: 'italic' }}>
                        NOTA: Debe inscribirse en la lista de espera para recibir la invitación cuando el próximo ciclo esté por comenzar.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="ma-economic-footer" style={{ padding: '25px', background: 'rgba(142, 61, 74, 0.03)', borderRadius: '16px', border: '1px solid rgba(142, 61, 74, 0.1)' }}>
                <p style={{ fontWeight: '800', marginBottom: '15px', fontSize: '0.85rem', textAlign: 'center', color: '#1e1f33', letterSpacing: '0.05em' }}>
                  SOLICITE SU INSCRIPCIÓN AL PRÓXIMO CICLO:
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
