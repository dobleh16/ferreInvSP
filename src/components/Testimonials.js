import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-gray-800">
          🗣️ Lo Que Dicen Nuestros Clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
            <blockquote className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
              "Antes perdía $800K mensuales sin saber por qué. En 2 semanas con FerretInv identifiqué los productos parados y recuperé el control."
            </blockquote>
            <cite className="text-gray-600 text-xs sm:text-sm md:text-base font-semibold">- Carlos Romero, Ferretería Laferrer, Medellín</cite>
          </div>
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
            <blockquote className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
              "El sistema se pagó solo el primer mes. Ya no tengo productos agotados y mis clientes están más contentos."
            </blockquote>
            <cite className="text-gray-600 text-xs sm:text-sm md:text-base font-semibold">- Ana Mancilla, Ferretería La Caleña, Cali</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
