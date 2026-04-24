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
            <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
              <span className="ma-icon" style={{ flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 0a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm8 2c-2.67 0-8 1.34-8 4v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2c0-2.66-5.33-4-8-4ZM8 13c-.29 0-.62.01-.97.04A5.94 5.94 0 0 1 10 17v2H1a1 1 0 0 1-1-1v-1c0-2.66 5.33-4 8-4Z"></path></svg>
              </span>
              <span><strong>CLASES CON SUS COLEGAS:</strong> <span className="ma-price-tag">$25 USD</span> POR HORA A CADA PARTICIPANTE. SESIONES DISEÑADAS PARA BUFETES O GRUPOS CON INVERSIÓN COMPARTIDA.</span>
            </li>

            <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
              <span className="ma-icon" style={{ flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M19 4h-1V2a1 1 0 0 0-2 0v2H8V2a1 1 0 0 0-2 0v2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10h16Zm0-10H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></path></svg>
              </span>
              <div>
                <span><strong>CURSO SABATINO:</strong> <span className="ma-price-tag">$200 USD</span> POR CICLO. PROGRAMAS GRUPALES EN LÍNEA DE DIEZ SEMANAS.</span>
                <p style={{ fontSize: '0.85rem', marginTop: '8px', color: '#666', fontStyle: 'italic' }}>
                  Nota: Estos programas inician únicamente 3 o 4 veces al año. Debe inscribirse en la lista de espera para recibir la invitación cuando el próximo ciclo esté por comenzar.
                </p>
              </div>
            </li>
          </ul>

          <div className="ma-economic-footer" style={{ padding: '30px', background: 'rgba(142, 61, 74, 0.05)', borderRadius: '12px', border: '1px dashed var(--latam-maroon)' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '20px', fontSize: '0.9rem', textAlign: 'center' }}>
              INSCRÍBASE PARA RECIBIR LA INVITACIÓN AL PRÓXIMO PROGRAMA GRUPAL:
            </p>
            
            {/* Mailchimp Embedded Form */}
            <form 
              action="https://hostingersite.us22.list-manage.com/subscribe/post?u=56094605988597099f66878b1&amp;id=9876543210" 
              method="post" 
              target="_blank" 
              className="ma-mailchimp-form"
            >
              <div style={{ display: 'grid', gap: '15px' }}>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="EMAIL" 
                    className="required email" 
                    placeholder="Correo Electrónico" 
                    required 
                    style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <input 
                    type="text" 
                    name="FNAME" 
                    placeholder="Nombre" 
                    required 
                    style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
                  />
                  <input 
                    type="text" 
                    name="LNAME" 
                    placeholder="Apellido" 
                    required 
                    style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
                  />
                </div>
                {/* Hidden field for Mailchimp bot protection */}
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_56094605988597099f66878b1_9876543210" tabIndex={-1} value="" />
                </div>
                <button 
                  type="submit" 
                  className="ma-btn-black"
                  style={{ width: '100%', padding: '14px', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                >
                  SOLICITAR INSCRIPCIÓN <Send size={18} />
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
