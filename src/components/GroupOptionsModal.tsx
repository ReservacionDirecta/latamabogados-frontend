import React from 'react';
import { X, Send } from 'lucide-react';
import './BookingModal.css';

interface GroupOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GroupOptionsModal: React.FC<GroupOptionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
                  <span><strong>CURSO SABATINO:</strong> <span className="ma-price-tag">$250 USD</span> POR CICLO. PROGRAMAS GRUPALES EN LÍNEA DE DIEZ SEMANAS.</span>
                  <p style={{ fontSize: '0.85rem', marginTop: '8px', color: '#666', fontStyle: 'italic' }}>
                    Nota: Estos programas inician únicamente 3 o 4 veces al año. Debe inscribirse en la lista de espera para recibir la invitación cuando el próximo ciclo esté por comenzar.
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <div className="ma-economic-footer" style={{ padding: '25px', background: 'rgba(142, 61, 74, 0.03)', borderRadius: '16px', border: '1px solid rgba(142, 61, 74, 0.1)' }}>
            <p style={{ fontWeight: '800', marginBottom: '15px', fontSize: '0.85rem', textAlign: 'center', color: '#1e1f33', letterSpacing: '0.05em' }}>
              SOLICITE SU INSCRIPCIÓN AL PRÓXIMO CICLO:
            </p>
            
            <form 
              action="https://latamabogados.us7.list-manage.com/subscribe/post?u=8f6aaf5ffbb8909d045957127&amp;id=fc7032e051&amp;f_id=00faa6e0f0" 
              method="post" 
              target="_blank" 
              className="ma-mailchimp-form"
            >
              <div style={{ display: 'grid', gap: '10px' }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', marginBottom: '3px', color: '#1e1f33', opacity: 0.8 }}>CORREO ELECTRÓNICO <span style={{ color: 'var(--latam-maroon)' }}>*</span></label>
                  <input type="email" name="EMAIL" placeholder="ejemplo@correo.com" required style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #eee', fontSize: '0.85rem', outline: 'none' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', marginBottom: '3px', color: '#1e1f33', opacity: 0.8 }}>NOMBRE <span style={{ color: 'var(--latam-maroon)' }}>*</span></label>
                    <input type="text" name="FNAME" placeholder="Juan" required style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #eee', fontSize: '0.85rem', outline: 'none' }} />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', marginBottom: '3px', color: '#1e1f33', opacity: 0.8 }}>APELLIDOS <span style={{ color: 'var(--latam-maroon)' }}>*</span></label>
                    <input type="text" name="LNAME" placeholder="Pérez" required style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #eee', fontSize: '0.85rem', outline: 'none' }} />
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', marginBottom: '3px', color: '#1e1f33', opacity: 0.8 }}>NÚMERO DE TELÉFONO <span style={{ color: 'var(--latam-maroon)' }}>*</span></label>
                  <input type="tel" name="PHONE" placeholder="+52 1..." required style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #eee', fontSize: '0.85rem', outline: 'none' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', marginBottom: '3px', color: '#1e1f33', opacity: 0.8 }}>CIUDAD</label>
                    <input type="text" name="CITY" placeholder="Ej. Bogotá" style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #eee', fontSize: '0.85rem', outline: 'none' }} />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', marginBottom: '3px', color: '#1e1f33', opacity: 0.8 }}>PAÍS</label>
                    <input type="text" name="COUNTRY" placeholder="Ej. Colombia" style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #eee', fontSize: '0.85rem', outline: 'none' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', marginBottom: '3px', color: '#1e1f33', opacity: 0.8 }}>ESPECIALIDAD</label>
                    <input type="text" name="SPEC" placeholder="Ej. Civil" style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #eee', fontSize: '0.85rem', outline: 'none' }} />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', marginBottom: '3px', color: '#1e1f33', opacity: 0.8 }}>PÁGINA WEB</label>
                    <input type="text" name="WEB" placeholder="https://..." style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #eee', fontSize: '0.85rem', outline: 'none' }} />
                  </div>
                </div>

                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_8f6aaf5ffbb8909d045957127_fc7032e051" tabIndex={-1} value="" readOnly />
                </div>

                <button 
                  type="submit" 
                  className="ma-btn-black"
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    fontSize: '0.9rem', 
                    fontWeight: '800', 
                    cursor: 'pointer', 
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
                    boxShadow: '0 4px 12px rgba(30, 31, 51, 0.15)'
                  }}
                >
                  ENVIAR SOLICITUD <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupOptionsModal;
