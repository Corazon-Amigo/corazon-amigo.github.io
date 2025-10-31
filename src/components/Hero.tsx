import React from 'react';
import { Heart, Users, Utensils } from 'lucide-react';
import heroImage from '../assets/hero-logo.png';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Niños comiendo juntos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo and Title */}
          <div className="flex justify-center mb-6">
            <div className="w-48 h-48 flex items-center justify-center mb-4">
              <img src={heroImage} alt="Corazón Amigo Logo" className="w-48 h-48 rounded-full" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Corazón Amigo
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Donde cada comida es un abrazo y cada sonrisa una esperanza.<br />
            Alimentando cuerpos y corazones con amor incondicional.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Users className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-200">Niños alimentados diariamente</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Utensils className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">3</div>
              <div className="text-gray-200">Comidas nutritivas al día</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Heart className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">5</div>
              <div className="text-gray-200">Años construyendo sueños</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('donaciones')}
              className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-fuchsia-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              ¡Quiero Ayudar!
            </button>
            <button
              onClick={() => scrollToSection('actividades')}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Conocé más
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;