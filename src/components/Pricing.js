import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
          Planes y Precios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-2 border-blue-500">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4">Plan Mensual</h3>
            <div className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-4">$150.000 COP</div>
            <p className="text-center text-sm mb-6">Recuperas esa inversión eliminando solo 1-2 errores al mes</p>
            <ul className="space-y-3 mb-6 list-disc list-inside text-sm sm:text-base">
              <li>✓ Acceso completo al sistema</li>
              <li>✓ Reportes y actualizaciones</li>
              <li>✓ Soporte estándar</li>
              <li>✓ Dashboard en tiempo real</li>
              <li>✓ Alertas de stock bajo</li>
              <li>✓ Alertas de productos vencidos</li>
              <li>✓ Alertas de productos por vencer</li>
              <li>✓ Alertas de productos no vendidos</li>
              <li>✓ Facturacion POS</li>
              <li>✓ Graficos que permiten ver realmente tus ganancias y el desempeño de tu negocio</li>
            </ul>
          </div>
          <div className="bg-blue-600 text-white p-6 sm:p-8 rounded-lg shadow-lg transform md:scale-105 border-2 border-blue-600">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4">Plan Anual ⭐ RECOMENDADO</h3>
            <div className="text-3xl sm:text-4xl font-bold text-center mb-2">$1.500.000 COP</div>
            <p className="text-sm text-center mb-6">Ahorras $300.000 al año + beneficios exclusivos</p>
            <ul className="space-y-3 mb-6 list-disc list-inside text-sm sm:text-base">
              <li>✓ Todo lo del plan mensual</li>
              <li>✓ Acompañamiento especial personalizado</li>
              <li>✓ Migración inicial de inventario GRATIS</li>
              <li>✓ Soporte prioritario vía WhatsApp</li>
              <li>✓ Capacitación completa para tu equipo</li>
              <li>✓ Facturacion electronica incluida una vez implementada</li>
              <li>✓ Ahorro de $300,000 al año</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 bg-yellow-100 p-4 sm:p-6 rounded-lg border-l-4 border-yellow-400 max-w-4xl mx-auto">
          <h3 className="text-lg sm:text-xl font-bold text-yellow-800 mb-4">🚀 Servicio de Importación Masiva de Inventario</h3>
          <p className="text-sm sm:text-base text-gray-700 mb-2">
            <strong>¿Tienes más de 500 productos?</strong> Nosotros migramos todo tu inventario por ti.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-2">
            El servicio de carga masiva tiene un costo adicional que depende del número de productos.
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            ✓ Ahorra tiempo<br/>✓ Evita errores de digitación<br/>✓ Empieza a trabajar desde el día 1
          </p>
        </div>
        <div className="mt-6 sm:mt-8 bg-green-100 text-green-800 p-4 sm:p-6 text-center rounded-lg max-w-4xl mx-auto">
          <p className="text-base sm:text-lg font-bold">
            💰 ROI Estimado: Si actualmente pierdes $1,500,000 mensuales por errores administrativos (21.3% de pérdidas), FerretInv se paga solo en menos de 3 días.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
