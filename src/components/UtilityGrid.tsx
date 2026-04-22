import React from 'react';
import { FileText, IdCard, BookOpen, CheckCircle } from 'lucide-react';
import './UtilityGrid.css';

const UtilityGrid: React.FC = () => {
  const items = [
    {
      title: 'Descargar el CV del Dr. Marcus Ambrose',
      icon: <FileText size={20} />,
      link: '/Marcus Ambrose CV.pdf',
      external: true
    },
    {
      title: 'Ver VCard del Dr. Marcus Ambrose',
      icon: <IdCard size={20} />,
      link: '/vcard',
      external: false
    },
    {
      title: 'Leer sobre el Dr. Ambrose y sus publicaciones',
      icon: <BookOpen size={20} />,
      link: '/acerca-de',
      external: false
    },
    {
      title: 'Conozca los ejemplos de escritos legales',
      icon: <CheckCircle size={20} />,
      link: '/ejemplos-de-escritos-legales',
      external: false
    }
  ];

  return (
    <section className="utility-grid-section">
      <div className="ct-container">
        <div className="utility-grid">
          {items.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target={item.external ? "_blank" : "_self"} 
              rel={item.external ? "noopener noreferrer" : ""}
              className="utility-card"
            >
              <span className="utility-icon">{item.icon}</span>
              <span className="utility-text">{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UtilityGrid;
