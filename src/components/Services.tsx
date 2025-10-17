import React from 'react';

const services = [
  {
    title: "I'Mvinci Special Operations & Concierge Services",
    description: "At I'Mvinci, we curate experiences and services that go beyond ownership and we offer access to a world where heritage, investment, and exclusivity converge.",
    image: '/lovable-uploads/service-consultation.png',
    subtitle: 'Exclusive Service'
  },
  {
    title: 'Classic & Vintage Car Security',
    description: 'We provide discreet and fortified security solutions for classic, vintage, and exotic vehicles, offering climate-controlled storage, high-level monitoring, and strategic movement management.',
    image: 'https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subtitle: 'Heritage Protection'
  },
  {
    title: 'Global Sourcing & Acquisition of Investment-Grade Vehicles',
    description: 'Through our extensive international network, I\'Mvinci helps clients source and purchase vintage, classic, and exotic vehicles from exclusive auctions, collectors, and manufacturers worldwide.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subtitle: 'Investment-Grade Vehicles'
  },
  {
    title: 'Air Cargo for Luxury, Exotic & Vintage Cars',
    description: 'We offer fully-managed, white-glove air cargo services for high-value cars traveling to and from Nigeria. With insured, climate-sensitive transport, global customs clearance, and secured last-mile delivery.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subtitle: 'Premium Logistics'
  },
  {
    title: 'Elite Factory Tours & Private Access',
    description: 'I\'Mvinci arranges private, invitation-only factory visits for our elite clients. Walk through the heart of iconic marques — from Ferrari\'s Maranello facility to Pagani\'s Atelier.',
    image: '/lovable-uploads/service-franchising.png',
    subtitle: 'Behind-the-Scenes Access'
  },
  {
    title: 'World-Class Auto Technicians & Overseas Specialists',
    description: 'We deploy certified, brand-specific technicians from around the globe to service your car wherever it resides. Whether it\'s a vintage Porsche or a Lamborghini needing factory-level diagnostics.',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subtitle: 'Mobile Elite Care'
  },
  {
    title: 'Authentic OEM Parts & Rare Component Sourcing',
    description: 'We locate and supply genuine manufacturer parts for rare and discontinued models — maintaining authenticity and value. From period-correct carburetors to original interior trim.',
    image: 'https://images.unsplash.com/photo-1582449831849-cb2900e333c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subtitle: 'Heritage Restoration'
  },
  {
    title: 'Paint Matching & Heritage Restoration',
    description: 'I\'Mvinci connects clients to award-winning automotive restoration experts and color-matching specialists who work with exact factory codes and techniques.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subtitle: 'Perfection Restored'
  },
  {
    title: 'Authentic Automotive Apparel & Collectibles',
    description: 'Our concierge program gives you access to official limited-edition apparel, heritage rally wear, original posters, scale models, and rare branded collectibles.',
    image: 'https://images.unsplash.com/photo-1558542316-cee10b3d9d4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subtitle: 'Lifestyle Collection'
  }
];

export const Services = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl mb-8">Professional service offerings for your vehicles</p>
        </div>
      </section>
      
      <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden relative h-80 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500"
              >
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:from-black/90 group-hover:via-black/70 transition-all duration-500"></div>
                </div>
                
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <span className="text-red-400 text-sm font-semibold mb-2">{service.subtitle}</span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 p-12 bg-gradient-to-r from-red-600/10 to-red-700/10 border border-red-400/20 rounded-3xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Experience Unparalleled Service
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join an exclusive circle of automotive connoisseurs who demand nothing less than perfection.
            </p>
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Get Exclusive Access
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
