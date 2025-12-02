import React from 'react';

const Solution = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 sm:p-8 md:p-10 rounded-lg text-center mb-12 shadow-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">💡 La Solución: FerretInv</h2>
          <p className="text-lg sm:text-xl">
            El sistema que elimina el 21.3% de pérdidas causadas por errores administrativos
          </p>
          <p className="text-base sm:text-lg mt-2">
            Y te da control total sobre cada peso de tu inventario
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
          ¿Cómo FerretInv Soluciona Cada Problema?
        </h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md">
            <p className="text-sm sm:text-base"><strong>✓ Problema:</strong> 21.3% de pérdidas por errores administrativos y papeleo</p>
            <p className="text-sm sm:text-base"><strong>✓ Solución FerretInv:</strong> Registro digital automático. Cero papel. Cero errores de transcripción. Todo se actualiza en tiempo real.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md">
            <p className="text-sm sm:text-base"><strong>✓ Problema:</strong> 4% de error en entrada de datos manual</p>
            <p className="text-sm sm:text-base"><strong>✓ Solución FerretInv:</strong> Carga por Excel/CSV y actualización automática tras cada venta. El sistema hace los cálculos por ti.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md">
            <p className="text-sm sm:text-base"><strong>✓ Problema:</strong> 34% de empresas pierden ventas por productos agotados</p>
            <p className="text-sm sm:text-base"><strong>✓ Solución FerretInv:</strong> Alertas automáticas de stock bajo. Sabes exactamente qué pedir antes de que se acabe.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md">
            <p className="text-sm sm:text-base"><strong>✓ Problema:</strong> Merma desconocida y productos que "desaparecen"</p>
            <p className="text-sm sm:text-base"><strong>✓ Solución FerretInv:</strong> Trazabilidad completa. Cada entrada y salida queda registrada con fecha, hora y responsable.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md">
            <p className="text-sm sm:text-base"><strong>✓ Problema:</strong> No saber qué productos no están rotando</p>
            <p className="text-sm sm:text-base"><strong>✓ Solución FerretInv:</strong> Dashboard con productos más vendidos y reportes de rotación. Ves en segundos qué está parado.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

