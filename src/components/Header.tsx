
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/400aaf1e-725d-413f-bab6-1ddb2522589b.png" 
              alt="Imvinci Ltd Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-red-400 transition-colors">Home</Link>
            <Link to="/personalizer" className="hover:text-red-400 transition-colors">Personalizer</Link>
            <Link to="/services" className="hover:text-red-400 transition-colors">Services</Link>
            <Link to="/shop" className="hover:text-red-400 transition-colors">Shop</Link>
            <Link to="/quote" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
              Get Quote
            </Link>
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
              <Link to="/" className="hover:text-red-400 transition-colors">Home</Link>
              <Link to="/personalizer" className="hover:text-red-400 transition-colors">Personalizer</Link>
              <Link to="/services" className="hover:text-red-400 transition-colors">Services</Link>
              <Link to="/shop" className="hover:text-red-400 transition-colors">Shop</Link>
              <Link to="/quote" className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-2 rounded-full w-fit">
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
