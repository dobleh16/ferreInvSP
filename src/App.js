import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import whatsappIcon from './assets/WhatsApp.svg.webp';

function App() {
  React.useEffect(() => {
    document.title = "FerretInv - Sistema Inteligente para Ferreterías";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Features />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <footer className="text-center py-3 sm:py-4 bg-gray-800 text-white">
        <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} FerretInv. Todos los derechos reservados.</p>
      </footer>
      <a
        href="https://wa.me/573114255704"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition duration-300 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;
