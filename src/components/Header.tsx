
import React, { useState } from 'react';
import { Menu, X, User, ShoppingCart, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/hooks/useCart';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();

  const handleSignOut = async () => {
    await signOut();
    setIsMenuOpen(false);
  };

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
            <Link to="/packages" className="hover:text-red-400 transition-colors">Packages</Link>
            {/* <Link to="/shop" className="hover:text-red-400 transition-colors">Shop</Link> */}
            {/* <Link to="/blog" className="hover:text-red-400 transition-colors">Blog</Link> */}
            <Link to="/about" className="hover:text-red-400 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-red-400 transition-colors">Contact</Link>
            <Link to="/quote" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
              Get Quote
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/profile" className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                  <User className="w-6 h-6" />
                </Link>
                <Link to="/cart" className="p-2 hover:bg-gray-800 rounded-full transition-colors relative">
                  <ShoppingCart className="w-6 h-6" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                      {totalItems}
                    </span>
                  )}
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-6 h-6" />
                </button>
              </>
            ) : (
              <Link 
                to="/auth" 
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Sign In
              </Link>
            )}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-red-400 transition-colors">Home</Link>
              <Link to="/personalizer" className="hover:text-red-400 transition-colors">Personalizer</Link>
              <Link to="/services" className="hover:text-red-400 transition-colors">Services</Link>
              <Link to="/packages" className="hover:text-red-400 transition-colors">Packages</Link>
              {/* <Link to="/shop" className="hover:text-red-400 transition-colors">Shop</Link> */}
              {/* <Link to="/blog" className="hover:text-red-400 transition-colors">Blog</Link> */}
              <Link to="/about" className="hover:text-red-400 transition-colors">About</Link>
              <Link to="/contact" className="hover:text-red-400 transition-colors">Contact</Link>
              
              {user ? (
                <div className="flex items-center space-x-4 pt-4">
                  <Link to="/profile" className="flex items-center space-x-2 hover:text-red-400 transition-colors">
                    <User className="w-5 h-5" />
                    <span>Profile</span>
                  </Link>
                  <Link to="/cart" className="flex items-center space-x-2 hover:text-red-400 transition-colors relative">
                    <div className="relative">
                      <ShoppingCart className="w-5 h-5" />
                      {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                          {totalItems}
                        </span>
                      )}
                    </div>
                    <span>Cart</span>
                  </Link>
                  <button 
                    onClick={handleSignOut}
                    className="flex items-center space-x-2 hover:text-red-400 transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <Link 
                  to="/auth" 
                  className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-2 rounded-full w-fit"
                >
                  Sign In
                </Link>
              )}
              
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
