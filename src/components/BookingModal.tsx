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

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    trackEvent('booking_submit', { booking_type: type });

    const phoneNumber = "5219671234787";
    const introText = type === 'clase' 
      ? "Hola Dr. Marcus, me gustaría agendar una clase de inglés profesional."
      : "Hola Dr. Marcus, me gustaría agendar una consulta legal.";
    
    // Constructing the message with clear line breaks
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

          <button type="submit" className="modal-submit-btn">
            <i className="fab fa-whatsapp"></i> Enviar por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
