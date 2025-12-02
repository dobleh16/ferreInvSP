import React from 'react';

const Features = () => {
  const features = [
    {
      title: '📦 Inventario Inteligente',
      items: [
        'Carga manual o por Excel/CSV',
        'Importación masiva de productos',
        'Alertas de stock bajo automáticas',
        'Alerta de productos próximos a vencer',
        'Inventario actualizado en tiempo real'
      ]
    },
    {
      title: '⚡ Ventas Sin Errores',
      items: [
        'Registro en segundos (no en cuadernos)',
        'Cálculo automático de IVA (0%, 5%, 19%)',
        'Manejo de clientes y métodos de pago',
        'Factura digital alineada a DIAN',
        'Actualización automática de inventario'
      ]
    },
    {
      title: '📊 Dashboard en Tiempo Real',
      items: [
        'Ventas del día y del mes al instante',
        'Ticket promedio de tus clientes',
        'Productos más vendidos y menos vendidos',
        'Gráficos automáticos fáciles de entender',
        'KPIs que te ayudan a decidir qué comprar'
      ]
    },
    {
      title: '📄 Reportes Profesionales',
      items: [
        'Reporte mensual PDF automático',
        'Totales de ventas e IVA calculado',
        'Productos más vendidos del periodo',
        'Análisis de rotación de inventario',
        'Identifica productos sin movimiento'
      ]
    },
    {
      title: '🧾 Facturación Digital',
      items: [
        'Cuenta con facturación POS integrada',
        'Estamos implementando facturación electrónica con la DIAN',
        'Gestión de resoluciones de facturación',
        'Numeración automática sin errores',
        'Cumplimiento legal garantizado',
        'Implementación antes de fin de año'
      ]
    },
    {
      title: '🌐 Acceso Total',
      items: [
        'Desde celular, tablet o computador',
        'Navegador web (no instalas nada)',
        'Revisa tu negocio desde cualquier lugar',
        'Datos seguros en la nube',
        'Backup automático diario'
      ]
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
          ¿Qué incluye FerretInv?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
              <ul className="space-y-2 list-disc list-inside text-sm sm:text-base text-gray-600">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
