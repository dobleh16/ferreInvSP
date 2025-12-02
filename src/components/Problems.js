import React from 'react';

const Problems = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-red-600 to-purple-800 text-white p-6 sm:p-8 rounded-lg mb-12 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">🚨 Las Cifras Reales que Están Quebrando a las Ferreterías</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg border-l-4 border-white">
              <div className="text-3xl sm:text-4xl font-bold">21.3%</div>
              <p className="mt-2 text-sm sm:text-base">de la pérdida de inventario en retail es por <strong>errores administrativos y de papeleo</strong> (ventas mal registradas, productos no actualizados, anotaciones perdidas)</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg border-l-4 border-white">
              <div className="text-3xl sm:text-4xl font-bold">4%</div>
              <p className="mt-2 text-sm sm:text-base">es la tasa de error cuando ingresas datos manualmente. En una ferretería con 1,000 productos = 40 errores que cuestan plata</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg border-l-4 border-white">
              <div className="text-3xl sm:text-4xl font-bold">34%</div>
              <p className="mt-2 text-sm sm:text-base">de las empresas tienen problemas por <strong>pedidos insuficientes</strong> y venta de productos agotados (pierden ventas por no saber qué se está acabando)</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg border-l-4 border-white">
              <div className="text-3xl sm:text-4xl font-bold">$298 mil millones</div>
              <p className="mt-2 text-sm sm:text-base">perdieron los comercios colombianos en 2024 por <strong>merma desconocida</strong> (productos que "desaparecen" sin explicación por falta de control)</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 sm:p-6 rounded-lg mb-12">
          <h4 className="text-lg sm:text-xl font-bold text-yellow-800 mb-2">📍 Contexto en Colombia:</h4>
          <p className="text-base sm:text-lg"><strong>En los últimos 4 años, los comerciantes colombianos han perdido $1.96 billones</strong> por robo, avería de mercancía y desperdicios. Una gran parte de esto se puede prevenir con control adecuado de inventario.</p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
          ¿Por qué están perdiendo esa plata?
        </h2>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 sm:p-6 mb-8">
          <ul className="space-y-3 text-base sm:text-lg">
            <li><strong>❌ Compran productos que ya tienen</strong> → dinero duplicado porque no saben qué hay en bodega</li>
            <li><strong>❌ Venden productos que en realidad no tienen</strong> → clientes insatisfechos y reputación dañada</li>
            <li><strong>❌ No detectan productos parados</strong> → mercancía pierde valor cada mes sin rotación</li>
            <li><strong>❌ Errores de registro manual</strong> → el 4% de error en anotaciones = miles de pesos perdidos</li>
            <li><strong>❌ No saben qué se está acabando</strong> → pierden ventas por productos agotados</li>
            <li><strong>❌ Merma desconocida</strong> → productos que "desaparecen" sin explicación</li>
            <li><strong>❌ Olvidan cobrar deudas</strong> → no hay registro claro de cuentas por cobrar</li>
          </ul>
        </div>
        <div className="bg-red-200 text-red-800 p-4 sm:p-6 text-center rounded-lg">
          <p className="text-lg sm:text-xl font-bold">
            Resultado: Entre $600,000 y $3 millones de pesos mensuales que simplemente se evaporan por falta de control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problems;

