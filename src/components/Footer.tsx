
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (

    <><section className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">Trusted by Owners of Leading Brands</h2>
        <div className="overflow-hidden">
          <div className="flex items-center space-x-8 animate-scroll-logos py-4" style={{
            animation: 'scroll-logos 15s linear infinite'
          }}>
            <img src="/logos/benz-logo.png" alt="Mercedes-Benz" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/ferrari-logo.png" alt="Ferrari" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/audi-logo.png" alt="Audi" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/lambo-logo.png" alt="Lambo" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/aston_martin-logo.png" alt="Aston Martin" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/bmw-logo.png" alt="BMW" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/tesla-logo.png" alt="Tesla" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/bugatti-logo.png" alt="Bugatti" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/LandRover-logo.png" alt="Range Rover" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/porsche-logo.png" alt="porsche" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/BYD-logo.png" alt="BYD" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/lexus-logo.png" alt="Lexus" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/pagani-logo.png" alt="Pagani" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
            {/* duplicate for seamless loop */}
            <img src="/logos/benz-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
            <img src="/logos/ferrari-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
            <img src="/logos/audi-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
            <img src="/logos/lambo-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
            <img src="/logos/aston_martin-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
            <img src="/logos/bmw-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
            <img src="/logos/tesla-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
            <img src="/logos/bugatti-logo.png" alt="Bugatti" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/LandRover-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
            <img src="/logos/porsche-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
            <img src="/logos/BYD-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
            <img src="/logos/lexus-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
            <img src="/logos/pagani-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
          </div>
        </div>
      </div>
      <style>
        {`
            @keyframes scroll-logos {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll-logos {
              min-width: 200%;
              width: max-content;
            }
          `}
      </style>
    </section>
    
    <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/lovable-uploads/400aaf1e-725d-413f-bab6-1ddb2522589b.png"
                  alt="Imvinci Ltd Logo"
                  className="h-8 w-auto" />
              </div>
              <p className="text-gray-400 mb-4">
                Next-generation coating technologies for ultimate vehicle and vessel protection.
              </p>
              <p className="text-sm text-gray-500">
                Engineered for excellence. Built for protection.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/packages" className="hover:text-white transition-colors">Protection Packages</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Automotive Coatings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Motorcycle Protection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Yacht Coatings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Aviation Protection</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                {/* <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li> */}
                <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Quality Standards</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@imvinci.com</li>
                <li>Phone: +234 (0) 123-456-7890</li>
                <li>Support: support@imvinci.com</li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                </li>
                <li>
                  <Link to="/quote" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 mt-2 inline-block">
                    Get Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 Imvinci Ltd. All rights reserved. Advanced coating technologies for elite protection.</p>
          </div>
        </div>
      </footer></>
  );
};
