import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">FerretInv</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition duration-300">Características</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition duration-300">Clientes</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition duration-300">Precios</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contacto</a>
            <a href="https://api.whatsapp.com/send/?phone=573114255704&text=Hola,%20quisiera%20agendar%20una%20demostraci%C3%B3n%20de%20FerretInv" target='_blank' rel="noopener noreferrer" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
              Demo Gratuita
            </a>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" /> }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <a href="#features" className="block py-3 px-4 text-gray-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Características</a>
        <a href="#pricing" className="block py-3 px-4 text-gray-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Precios</a>
        <a href="#contact" className="block py-3 px-4 text-gray-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Contacto</a>
        <div className="p-4">
        <a href="https://api.whatsapp.com/send/?phone=573114255704&text=Hola,%20quisiera%20agendar%20una%20demostraci%C3%B3n%20de%20FerretInv" target='_blank' rel="noopener noreferrer" className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md text-center block">
            Demo Gratuita
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;