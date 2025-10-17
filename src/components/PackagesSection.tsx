import React from 'react';
import { Car, Ship, Plane, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const packageCategories = [
  {
    title: "Vehicle Services",
    icon: Car,
    image: "/lovable-uploads/Porsche.jpg",
    description: "Comprehensive protection and restoration for automotive excellence",
    services: ["Paint Protection Film", "Color PPF", "Paint Correction", "Interior Detailing", "Leather Restoration", "Premium Window Tint"]
  },
  {
    title: "Yacht Services",
    icon: Ship,
    image: "/lovable-uploads/yatch-hero.png",
    description: "Marine-grade luxury protection for prestigious vessels",
    services: ["Yacht Detailing", "Custom Colour Design", "Gelcoat Restoration", "Window Tinting"]
  },
  {
    title: "Aircraft Services",
    icon: Plane,
    image: "/lovable-uploads/aircraft-hero.png",
    description: "Aviation-grade detailing for private jets and aircraft",
    services: ["Elite Aircraft Detailing", "Exterior & Interior Care", "FAA Compliant Services"]
  },
  {
    title: "Timepiece Services",
    icon: Clock,
    image: "/lovable-uploads/timepiece-hero.png",
    description: "Luxury watch care and preservation for horological masterpieces",
    services: ["Mirror Finish Treatment™", "Deep Clean Ritual™", "Invisible Armor™", "Crystal Clarity Service™"]
  }
];

export const PackagesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Packages</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience unparalleled protection and care across vehicles, yachts, aircraft, and timepieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packageCategories.map((category, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500"
            >
              <div className="relative h-64">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <category.icon className="w-12 h-12 text-red-400" />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-3 group-hover:text-red-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></div>
                      {service}
                    </div>
                  ))}
                </div>

                <Link 
                  to="/packages" 
                  className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/packages" 
            className="inline-block border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Explore All Packages
          </Link>
        </div>
      </div>
    </section>
  );
};
