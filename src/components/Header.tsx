
import React, { useState } from 'react';
import { Car, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              IMVINCI
            </span>
            <span className="text-sm text-gray-400 ml-2">LTD</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#personalizer" className="hover:text-blue-400 transition-colors">Personalizer</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#shop" className="hover:text-blue-400 transition-colors">Shop</a>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
              Get Quote
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#personalizer" className="hover:text-blue-400 transition-colors">Personalizer</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#shop" className="hover:text-blue-400 transition-colors">Shop</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-full w-fit">
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
