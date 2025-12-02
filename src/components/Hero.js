import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-red-500 to-red-600 text-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          ¿Sabías que más del 64% de los pequeños negocios pierden más del 1% de sus ventas anuales por descontrol de inventario?
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
          En Colombia, muchas ferreterías facturan entre <strong>$6 y $15 millones al mes</strong>, pero pierden hasta un <strong>20% de esas ganancias</strong> por no saber:
        </p>
        <ul className="text-base sm:text-lg mb-8 space-y-2 max-w-2xl mx-auto list-disc list-inside">
          <li>Qué tienen realmente en bodega</li>
          <li>Qué productos no están rotando y están perdiendo valor</li>
          <li>Cuánto dinero tienen realmente en inventario parado</li>
          <li>Qué se vendió ayer vs. qué quedó registrado</li>
        </ul>
        <p className="text-xl sm:text-2xl font-bold">
          No es que vendan poco. Es que están perdiendo plata sin darse cuenta.
        </p>
      </div>
    </section>
  );
};

export default Hero;
