import React from 'react';
import { Heart, Package, Users, Clock } from 'lucide-react';

const Donations = () => {
  const donationTypes = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Alimentos No Perecederos",
      items: [
        "Arroz, fideos, harina",
        "Aceite, azúcar, sal",
        "Leche en polvo",
        "Conservas y enlatados",
        "Cereales y legumbres",
        "Té, café, yerba mate"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Productos de Higiene",
      items: [
        "Jabón, shampoo",
        "Papel higiénico",
        "Pañales",
        "Pasta dental, cepillos",
        "Alcohol en gel",
        "Productos de limpieza"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Ropa y Calzado",
      items: [
        "Ropa para niños (todas las edades)",
        "Calzado en buen estado",
        "Ropa de abrigo",
        "Uniformes escolares",
        "Ropa interior",
        "Medias y calcetines"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Tiempo y Voluntariado",
      items: [
        "Ayuda en la cocina",
        "Apoyo escolar",
        "Actividades recreativas",
        "Talleres y capacitaciones",
        "Limpieza y mantenimiento",
        "Acompañamiento emocional"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="donaciones" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Formas de Ayudar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada donación, por pequeña que sea, hace una gran diferencia en la vida de nuestros niños. 
            Descubrí las diferentes maneras en que podés colaborar con nuestra misión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {donationTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-full flex items-center justify-center mb-6`}>
                {type.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {type.title}
              </h3>
              
              <ul className="space-y-2">
                {type.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Priority needs */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            🚨 Necesidades Urgentes del Mes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <h4 className="font-bold text-red-800 mb-2">Muy Urgente</h4>
              <ul className="text-red-700 space-y-1">
                <li>• Leche en polvo</li>
                <li>• Pañales (talles 3, 4, 5)</li>
                <li>• Medicamentos básicos</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <h4 className="font-bold text-yellow-800 mb-2">Importante</h4>
              <ul className="text-yellow-700 space-y-1">
                <li>• Ropa de invierno</li>
                <li>• Útiles escolares</li>
                <li>• Calzado para niños</li>
              </ul>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <h4 className="font-bold text-green-800 mb-2">Siempre Necesario</h4>
              <ul className="text-green-700 space-y-1">
                <li>• Alimentos no perecederos</li>
                <li>• Productos de higiene</li>
                <li>• Voluntarios</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact for donations */}
        <div className="bg-gradient-to-r from-pink-600 to-fuchsia-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            ¿Querés hacer una donación?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Contactanos por WhatsApp para coordinar la entrega de donaciones o para sumarte como voluntario. 
            ¡Cada gesto de amor cuenta!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5491122531240?text=Hola! Me gustaría hacer una donación a Corazón Amigo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              Donar Alimentos o Ropa
            </a>
            <a
              href="https://wa.me/5491122531240?text=Hola! Me interesa ser voluntario en Corazón Amigo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              Ser Voluntario
            </a>
          </div>
        </div>

        {/* Impact section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">1500+</div>
            <div className="text-gray-600">Comidas servidas este mes</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Familias beneficiadas</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
            <div className="text-gray-600">Voluntarios activos</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600">Amor en cada acción</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;