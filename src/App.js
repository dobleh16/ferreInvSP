import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

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
        <Pricing />
        <Contact />
      </main>
      <footer className="text-center py-3 sm:py-4 bg-gray-800 text-white">
        <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} FerretInv. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
