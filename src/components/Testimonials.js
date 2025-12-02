import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          🗣️ Lo Que Dicen Nuestros Clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <blockquote className="text-gray-700 mb-4">
              "Antes perdía $800K mensuales sin saber por qué. En 2 semanas con FerretInv identifiqué los productos parados y recuperé el control."
            </blockquote>
            <cite className="text-gray-600 font-semibold">- Carlos Romero, Ferretería Laferrer, Medellín</cite>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <blockquote className="text-gray-700 mb-4">
              "El sistema se pagó solo el primer mes. Ya no tengo productos agotados y mis clientes están más contentos."
            </blockquote>
            <cite className="text-gray-600 font-semibold">- Ana Mancilla, Ferretería La Caleña, Cali</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
