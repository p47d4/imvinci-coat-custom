
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-blue-200 shadow-sm">
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
            <Link to="/" className="text-blue-900 hover:text-blue-600 transition-colors font-medium">Home</Link>
            <Link to="/personalizer" className="text-blue-900 hover:text-blue-600 transition-colors font-medium">Personalizer</Link>
            <Link to="/services" className="text-blue-900 hover:text-blue-600 transition-colors font-medium">Services</Link>
            <Link to="/shop" className="text-blue-900 hover:text-blue-600 transition-colors font-medium">Shop</Link>
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-medium">
              Get Quote
            </button>
          </nav>

          <button 
            className="md:hidden text-blue-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-blue-200 pt-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-blue-900 hover:text-blue-600 transition-colors font-medium">Home</Link>
              <Link to="/personalizer" className="text-blue-900 hover:text-blue-600 transition-colors font-medium">Personalizer</Link>
              <Link to="/services" className="text-blue-900 hover:text-blue-600 transition-colors font-medium">Services</Link>
              <Link to="/shop" className="text-blue-900 hover:text-blue-600 transition-colors font-medium">Shop</Link>
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full w-fit font-medium">
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
