import React, { useState } from 'react';
import { X, Calendar, Clock, Globe, User, Briefcase } from 'lucide-react';
import './BookingModal.css';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'clase' | 'consulta';
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    specialty: '',
    date: '',
    time: '',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "5219671234787";
    const introText = type === 'clase' 
      ? "Hola Dr. Marcus, me gustaría agendar una clase de inglés profesional."
      : "Hola Dr. Marcus, me gustaría agendar una consulta legal.";
    
    // Constructing the message with clear line breaks
    const message = `${introText}\n\n` +
      `*Mis datos:*\n` +
      `• Nombre: ${formData.name}\n` +
      `• País: ${formData.country}\n` +
      `• Especialidad: ${formData.specialty}\n` +
      `• Fecha sugerida: ${formData.date}\n` +
      `• Horario sugerido: ${formData.time}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel animate-slide-up" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-header">
          <h2 className="modal-title">
            {type === 'clase' ? 'Programar Clase de Inglés' : 'Programar Consulta Legal'}
          </h2>
          <p className="modal-subtitle">Por favor, completa tus datos para coordinar vía WhatsApp.</p>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label><User size={18} /> Nombre Completo</label>
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="Ej. Abogado Juan Pérez"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label><Globe size={18} /> País</label>
              <input 
                type="text" 
                name="country" 
                required 
                placeholder="Ej. México"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label><Briefcase size={18} /> Especialidad</label>
              <input 
                type="text" 
                name="specialty" 
                required 
                placeholder="Ej. Corporativo"
                value={formData.specialty}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label><Calendar size={18} /> Fecha sugerida</label>
              <input 
                type="date" 
                name="date" 
                required 
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label><Clock size={18} /> Horario sugerido</label>
              <input 
                type="time" 
                name="time" 
                required 
                value={formData.time}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="modal-submit-btn">
            <i className="fab fa-whatsapp"></i> Enviar por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
