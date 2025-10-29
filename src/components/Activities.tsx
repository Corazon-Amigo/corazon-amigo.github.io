import React from 'react';
import { BookOpen, Gamepad2, Utensils, Palette, Music, Gift } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Comidas Nutritivas",
      description: "Desayuno, almuerzo y merienda balanceados todos los días, preparados con amor y cuidado nutricional.",
      image: "https://images.pexels.com/photos/6941004/pexels-photo-6941004.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Apoyo Escolar",
      description: "Ayuda con las tareas, refuerzo educativo y un espacio tranquilo para estudiar y aprender.",
      image: "https://images.pexels.com/photos/8617709/pexels-photo-8617709.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Recreación y Juegos",
      description: "Actividades lúdicas, deportes y juegos que fomentan la socialización y el desarrollo integral.",
      image: "https://images.pexels.com/photos/8613320/pexels-photo-8613320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Talleres Creativos",
      description: "Arte, manualidades y expresión creativa para desarrollar habilidades y talentos únicos.",
      image: "https://images.pexels.com/photos/8613199/pexels-photo-8613199.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Música y Baile",
      description: "Clases de música, canto y baile que alegran el corazón y fortalecen la autoestima.",
      image: "https://images.pexels.com/photos/8471830/pexels-photo-8471830.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Eventos Especiales",
      description: "Celebraciones de cumpleaños, fiestas temáticas y eventos que crean momentos inolvidables.",
      image: "https://images.pexels.com/photos/6646886/pexels-photo-6646886.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="actividades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nuestras Actividades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada día creamos experiencias significativas que nutren tanto el cuerpo como el alma. 
            Descubrí todas las formas en que acompañamos a nuestros pequeños amigos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full">
                  {activity.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Querés ser parte de esta hermosa misión?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Tu ayuda puede hacer la diferencia en la vida de muchos niños. 
              Cada gesto cuenta, cada sonrisa importa.
            </p>
            <a
              href="https://wa.me/5491122531240?text=Hola! Me interesa colaborar con Corazón Amigo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              ¡Contactanos por WhatsApp!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;