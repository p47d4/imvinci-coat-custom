
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-blue-900 border-t border-blue-800 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/400aaf1e-725d-413f-bab6-1ddb2522589b.png" 
                alt="Imvinci Ltd Logo" 
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-blue-200 mb-4">
              Next-generation coating technologies for ultimate vehicle and vessel protection.
            </p>
            <p className="text-sm text-blue-300">
              Engineered for excellence. Built for protection.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">Automotive Coatings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Motorcycle Protection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Yacht Coatings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aviation Protection</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Standards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-blue-200">
              <li>Email: info@imvinci.com</li>
              <li>Phone: +234 (0) 123-456-7890</li>
              <li>Support: support@imvinci.com</li>
              <li>
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 mt-2">
                  Get Quote
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
          <p>&copy; 2025 Imvinci Ltd. All rights reserved. Advanced coating technologies for elite protection.</p>
        </div>
      </div>
    </footer>
  );
};
