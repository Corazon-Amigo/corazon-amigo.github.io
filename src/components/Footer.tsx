import React from 'react';
import { Heart, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Corazón Amigo</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Desde hace 5 años trabajamos con amor y dedicación para brindar alimentación, 
              contención y esperanza a los niños de nuestra comunidad. Cada día es una nueva 
              oportunidad de sembrar sonrisas y construir futuros más brillantes.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Agüero 2476<br />
                    Rafael Calzada, Buenos Aires
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <p className="text-gray-300">+54 9 11 2253-1240</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Horarios</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    <strong>Lun - Vie:</strong> 8:00 - 18:00<br />
                    <strong>Sábados:</strong> 9:00 - 15:00<br />
                    <strong>Domingos:</strong> Cerrado
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Horarios de Comidas</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>🌅 Desayuno: 8:00 - 10:00</li>
                <li>🍽️ Almuerzo: 12:00 - 14:00</li>
                <li>☕ Merienda: 15:30 - 17:00</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Corazón Amigo. Hecho con ❤️ para nuestra comunidad.
            </p>
            <p className="text-gray-400 text-sm">
              "Donde cada comida es un abrazo y cada sonrisa una esperanza"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;