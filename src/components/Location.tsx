import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Vení a Visitarnos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestras puertas están siempre abiertas para quienes quieran conocer nuestra labor 
            y sumarse a esta hermosa familia solidaria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.4267985686377!2d-58.47892202445747!3d-34.64738777293675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc8b0d0d0d0d1%3A0x1234567890abcdef!2sAg%C3%BCero%202476%2C%20Rafael%20Calzada%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2sar!4v1234567890123!5m2!1ses-419!2sar"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Corazón Amigo"
              ></iframe>
            </div>
          </div>

          {/* Information */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Dirección</h3>
                  <p className="text-gray-600 text-lg">
                    Agüero 2476<br />
                    Rafael Calzada, Buenos Aires<br />
                    Argentina
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Horarios</h3>
                  <p className="text-gray-600 text-lg">
                    <strong>Lunes a Viernes:</strong> 8:00 - 18:00<br />
                    <strong>Sábados:</strong> 9:00 - 15:00<br />
                    <strong>Domingos:</strong> Cerrado
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Contacto</h3>
                  <p className="text-gray-600 text-lg mb-3">
                    WhatsApp: +54 9 11 2253-1240
                  </p>
                  <a
                    href="https://wa.me/5491122531240?text=Hola! Me gustaría conocer más sobre Corazón Amigo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation info */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            ¿Cómo llegar?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-3">🚌 Transporte Público</h4>
              <p className="text-gray-600">
                Líneas de colectivo que pasan cerca: 51, 85, 159, 324.<br />
                Estación de tren más cercana: Rafael Calzada (Línea Roca).
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-3">🚗 En Auto</h4>
              <p className="text-gray-600">
                Fácil acceso desde Autopista La Plata y Camino de Cintura.<br />
                Estacionamiento disponible en las cercanías.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;