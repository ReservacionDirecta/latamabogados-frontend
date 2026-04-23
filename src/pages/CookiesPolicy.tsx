import React from 'react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import SEO from '../components/SEO';
import './AgendarClase.css';

const CookiesPolicy: React.FC = () => {
  return (
    <div className="agendar-page">
      <SEO 
        title="Política de Cookies - Latam Abogados" 
        description="Información sobre el uso de cookies en el sitio web de Latam Abogados."
      />
      <HeaderBar />
      
      <main className="agendar-main">
        <div className="container-narrow">
          <div className="ma-top">
            <h1 className="ma-title">Política de Cookies</h1>
          </div>

          <div className="ma-card" style={{ textAlign: 'left', lineHeight: '1.8' }}>
            <p><strong>¿Qué son las cookies?</strong></p>
            <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Ayudan al sitio a recordar información sobre su visita para mejorar su experiencia.</p>

            <h3 style={{ marginTop: '30px' }}>1. Cookies que utilizamos</h3>
            <ul>
              <li><strong>Cookies técnicas:</strong> Esenciales para que el sitio funcione correctamente (ej. navegación entre páginas).</li>
              <li><strong>Cookies de análisis:</strong> Nos permiten entender cómo los visitantes interactúan con el sitio (ej. Google Analytics) para mejorar el contenido.</li>
              <li><strong>Cookies de preferencia:</strong> Recuerdan sus ajustes como el idioma o región.</li>
            </ul>

            <h3 style={{ marginTop: '30px' }}>2. Control de cookies</h3>
            <p>Usted puede controlar y/o eliminar las cookies según desee a través de la configuración de su navegador. Sin embargo, tenga en cuenta que deshabilitar las cookies puede afectar la funcionalidad de algunas partes de nuestro sitio.</p>

            <h3 style={{ marginTop: '30px' }}>3. Cookies de terceros</h3>
            <p>En algunos casos, utilizamos cookies proporcionadas por terceros de confianza (como servicios de video o mapas) para enriquecer la experiencia del usuario.</p>

            <h3 style={{ marginTop: '30px' }}>4. Actualizaciones</h3>
            <p>Esta política puede ser modificada periódicamente para reflejar cambios en el uso de cookies en nuestro sitio web.</p>
          </div>
        </div>
      </main>

      <FooterBar />
    </div>
  );
};

export default CookiesPolicy;
