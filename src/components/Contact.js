import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">📞 CONTÁCTANOS HOY</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Agenda una demostración gratuita de 10 minutos<br />y recupera el control de tu ferretería
        </p>
        <div className="mb-4">
          <p className="text-lg">
            📱 WhatsApp: <a href="https://api.whatsapp.com/send/?phone=573114255704&text&type=phone_number&app_absent=0" className="text-blue-400 hover:text-blue-300 font-bold" target="_blank" rel="noopener noreferrer">+57 311 425 5704</a>
          </p>
        </div>
        <div className="mb-8">
          <p className="text-lg">
            📧 Correo: <a href="mailto:ferretinv@gmail.com" className="text-blue-400 hover:text-blue-300 font-bold">ferretinv@gmail.com</a>
          </p>
        </div>
        <p className="text-lg opacity-90 max-w-3xl mx-auto">
          <strong>No sigas perdiendo plata por no saber qué tienes en tu ferretería.</strong><br />
          Cada día sin control es dinero que se evapora.<br /><br />
          Tu inventario te lo agradecerá. Tu cuenta bancaria también.
        </p>
      </div>
    </section>
  );
};

export default Contact;
