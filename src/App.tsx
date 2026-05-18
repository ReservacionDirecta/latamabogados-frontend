import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { trackPageView } from './utils/analytics';
import About from './pages/About';
import Contact from './pages/Contact';
import LegalWritings from './pages/LegalWritings';
import SocialConscience from './pages/SocialConscience';
import Vcard from './pages/Vcard';
import AgendarClase from './pages/AgendarClase';
import AgendarConsulta from './pages/AgendarConsulta';
import ArticlesPublications from './pages/ArticlesPublications';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiesPolicy from './pages/CookiesPolicy';
import Landing2 from './pages/Landing2';
import FloatingBanner from './components/FloatingBanner';

// Helper component to track page views
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <PageTracker />
      <FloatingBanner />
      <Routes>
        <Route path="/" element={<Landing2 />} />
        <Route path="/acerca-de" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/ejemplos-de-escritos-legales" element={<LegalWritings />} />
        <Route path="/nuestra-conciencia-social" element={<SocialConscience />} />
        <Route path="/vcard" element={<Vcard />} />
        <Route path="/agendar-clase-de-inges-profesional" element={<AgendarClase />} />
        <Route path="/agendar-consulta-legal" element={<AgendarConsulta />} />
        <Route path="/servicios" element={<AgendarConsulta />} />
        <Route path="/articulos-y-publicaciones" element={<ArticlesPublications />} />
        <Route path="/aviso-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="/politica-de-cookies" element={<CookiesPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
