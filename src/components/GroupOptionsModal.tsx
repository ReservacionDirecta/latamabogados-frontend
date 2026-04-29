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

          <div className="ma-economic-footer" style={{ padding: '30px', background: 'rgba(142, 61, 74, 0.05)', borderRadius: '12px', border: '1px dashed var(--latam-maroon)' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '20px', fontSize: '0.9rem', textAlign: 'center' }}>
              INSCRÍBASE PARA RECIBIR LA INVITACIÓN AL PRÓXIMO PROGRAMA GRUPAL:
            </p>
            
            {/* Mailchimp Embedded Form */}
            <form 
              action="https://digital.us3.list-manage.com/subscribe/post?u=f3fa97557584c7cc93a85c09c&amp;id=0bacb30ae9&amp;f_id=0060c7e5f0" 
              method="post" 
              target="_blank" 
              className="ma-mailchimp-form"
            >
              <input type="hidden" name="tags" value="10768030" />
              <div style={{ display: 'grid', gap: '15px' }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '4px', color: '#555' }}>Correo Electrónico <span style={{ color: '#8e3d4a' }}>*</span></label>
                  <input 
                    type="email" 
                    name="EMAIL" 
                    className="required email" 
                    placeholder="nombre@correo.com" 
                    required 
                    style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '4px', color: '#555' }}>Nombre <span style={{ color: '#8e3d4a' }}>*</span></label>
                    <input 
                      type="text" 
                      name="FNAME" 
                      placeholder="Juan" 
                      required 
                      style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '4px', color: '#555' }}>Apellido <span style={{ color: '#8e3d4a' }}>*</span></label>
                    <input 
                      type="text" 
                      name="LNAME" 
                      placeholder="Pérez" 
                      required 
                      style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '4px', color: '#555' }}>Teléfono <span style={{ color: '#8e3d4a' }}>*</span></label>
                  <input 
                    type="tel" 
                    name="PHONE" 
                    placeholder="Ej. +52 1 234..." 
                    required 
                    style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '4px', color: '#555' }}>Ciudad <span style={{ color: '#8e3d4a' }}>*</span></label>
                    <input 
                      type="text" 
                      name="CITY" 
                      placeholder="Ej. Bogotá" 
                      required 
                      style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '4px', color: '#555' }}>País <span style={{ color: '#8e3d4a' }}>*</span></label>
                    <input 
                      type="text" 
                      name="COUNTRY" 
                      placeholder="Ej. Colombia" 
                      required 
                      style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '4px', color: '#555' }}>Especialidad (Opcional)</label>
                  <input 
                    type="text" 
                    name="SPECIALITY" 
                    placeholder="Ej. Abogado Corporativo" 
                    style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '4px', color: '#555' }}>Tipo de Clase de Interés <span style={{ color: '#8e3d4a' }}>*</span></label>
                  <select name="INTEREST" required style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', background: 'white' }}>
                    <option value="">Seleccione una opción</option>
                    <option value="Clase Grupal">Clase Grupal (Entre semana)</option>
                    <option value="Curso Sabatino">Curso Sabatino (Intensivo)</option>
                    <option value="Ambas">Ambas opciones</option>
                  </select>
                </div>

                {/* Hidden field for Mailchimp bot protection */}
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_f3fa97557584c7cc93a85c09c_0bacb30ae9" tabIndex={-1} value="" readOnly />
                </div>
                <button 
                  type="submit" 
                  className="ma-btn-black"
                  style={{ width: '100%', padding: '14px', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                >
                  SOLICITAR INCRIPCIÓN <Send size={18} />
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
