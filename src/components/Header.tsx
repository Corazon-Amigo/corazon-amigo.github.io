import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800">Corazón Amigo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('actividades')}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
            >
              Actividades
            </button>
            <button
              onClick={() => scrollToSection('ubicacion')}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
            >
              Ubicación
            </button>
            <button
              onClick={() => scrollToSection('donaciones')}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
            >
              Donaciones
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors duration-200 py-2"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('actividades')}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors duration-200 py-2"
              >
                Actividades
              </button>
              <button
                onClick={() => scrollToSection('ubicacion')}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors duration-200 py-2"
              >
                Ubicación
              </button>
              <button
                onClick={() => scrollToSection('donaciones')}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors duration-200 py-2"
              >
                Donaciones
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;