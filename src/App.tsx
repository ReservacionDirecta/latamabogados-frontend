import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import LegalWritings from './pages/LegalWritings';
import SocialConscience from './pages/SocialConscience';
import Vcard from './pages/Vcard';
import AgendarClase from './pages/AgendarClase';
import AgendarConsulta from './pages/AgendarConsulta';
import TestLanding from './pages/TestLanding';

function App() {
  return (
    <BrowserRouter>
      {/* 
        El Layout global se quitó porque la migración 1:1 de WordPress incrusta el 
        header y footer originales en cada página como lo hacía WPBakery.
        Si se quisiera globalizar, se debe extraer el header de wp_body.html
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca-de" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/ejemplos-de-escritos-legales" element={<LegalWritings />} />
        <Route path="/nuestra-conciencia-social" element={<SocialConscience />} />
        <Route path="/vcard" element={<Vcard />} />
        <Route path="/agendar-clase-de-inges-profesional" element={<AgendarClase />} />
        <Route path="/agendar-consulta-legal" element={<AgendarConsulta />} />
        <Route path="/servicios" element={<AgendarConsulta />} />
        <Route path="/test-landing" element={<TestLanding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
