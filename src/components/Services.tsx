
import React from 'react';
import { Car } from 'lucide-react';

const services = [
  {
    title: 'Automotive Coatings',
    description: 'Premium protective coatings for cars, SUVs, and luxury vehicles. Advanced ceramic technology for ultimate protection.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3',
    features: ['Ceramic Protection', 'UV Resistance', '10-Year Warranty', 'Hydrophobic Technology']
  },
  {
    title: 'Motorcycle Protection',
    description: 'Specialized coatings designed for motorcycles and bikes. Enhanced durability for the open road.',
    image: 'https://images.unsplash.com/photo-1558618047-8c50c3d57c5e?ixlib=rb-4.0.3',
    features: ['Weather Resistant', 'Scratch Protection', 'Easy Maintenance', 'High Gloss Finish']
  },
  {
    title: 'Yacht Coatings',
    description: 'Marine-grade protective solutions for yachts and boats. Engineered to withstand harsh marine environments.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3',
    features: ['Salt Water Resistant', 'Anti-Fouling', 'Long-lasting', 'Professional Grade']
  },
  {
    title: 'Aviation Protection',
    description: 'Aerospace-grade coatings for jets and aircraft. Maximum protection at altitude and extreme conditions.',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3',
    features: ['Extreme Weather', 'Lightweight', 'Aerospace Grade', 'Temperature Resistant']
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Our <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive protection solutions for all types of vehicles and vessels. 
            Each service is engineered with precision and backed by our commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Car className="w-8 h-8 text-red-400 mb-2" />
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-200 hover:from-red-600 hover:to-red-800 hover:text-white text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
