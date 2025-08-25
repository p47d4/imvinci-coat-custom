
import React from 'react';
import { Shield, Car, Plane, Ship, Clock, Sparkles, Globe, Users } from 'lucide-react';

const services = [
  {
    title: 'Classic & Vintage Car Security',
    description: 'Discreet and fortified security solutions for classic, vintage, and exotic vehicles, offering climate-controlled storage, high-level monitoring, and strategic movement management.',
    image: 'https://images.unsplash.com/photo-1565109366066-40d4cf1bdc0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Shield,
    subtitle: 'Heritage Protection'
  },
  {
    title: 'Global Sourcing & Acquisition',
    description: 'Through our extensive international network, we help clients source and purchase vintage, classic, and exotic vehicles from exclusive auctions and collectors worldwide.',
    image: 'https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Globe,
    subtitle: 'Investment-Grade Vehicles'
  },
  {
    title: 'Air Cargo for Luxury Vehicles',
    description: 'Fully-managed, white-glove air cargo services for high-value cars traveling to and from Nigeria. Climate-sensitive transport with secured last-mile delivery.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Plane,
    subtitle: 'Premium Logistics'
  },
  {
    title: 'Elite Factory Tours',
    description: 'Private, invitation-only factory visits for elite clients. Experience Ferrari\'s Maranello, Pagani\'s Atelier, or Rolls-Royce\'s Goodwood estate with exclusive access.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Users,
    subtitle: 'Behind-the-Scenes Access'
  },
  {
    title: 'World-Class Technicians',
    description: 'Certified, brand-specific technicians from around the globe to service your car wherever it resides. Stuttgart-trained mechanics for Porsche, factory-level diagnostics for Lamborghini.',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Car,
    subtitle: 'Mobile Elite Care'
  },
  {
    title: 'Authentic OEM Parts',
    description: 'We locate and supply genuine manufacturer parts for rare and discontinued models. Period-correct carburetors to original interior trim, maintaining authenticity and value.',
    image: 'https://images.unsplash.com/photo-1582449831849-cb2900e333c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Sparkles,
    subtitle: 'Heritage Restoration'
  },
  {
    title: 'Paint Matching & Restoration',
    description: 'Award-winning automotive restoration experts and color-matching specialists working with exact factory codes and techniques for show-quality results.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Sparkles,
    subtitle: 'Perfection Restored'
  },
  {
    title: 'Automotive Apparel & Collectibles',
    description: 'Access to official limited-edition apparel, heritage rally wear, original posters, scale models, and rare branded collectibles for those who live the lifestyle.',
    image: 'https://images.unsplash.com/photo-1558542316-cee10b3d9d4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Clock,
    subtitle: 'Lifestyle Collection'
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            I'Mvinci <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Special Operations</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-8">& Concierge Services</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            At I'Mvinci, we curate experiences and services that go beyond ownership and we offer access to a world where 
            heritage, investment, and exclusivity converge. Our Special Operations & Concierge Services are crafted for 
            automotive connoisseurs, elite collectors, and high-net-worth individuals who demand nothing less than global reach with tailored precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl hover:shadow-red-500/20 transition-all duration-700 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
            >
              {/* Image Side */}
              <div className="lg:w-1/2 relative h-80 lg:h-auto overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-gray-900/90 to-transparent"></div>
                
                {/* Icon overlay */}
                <div className="absolute top-6 left-6">
                  <service.icon className="w-12 h-12 text-red-400" />
                </div>
              </div>
              
              {/* Content Side */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <button className="self-start bg-gradient-to-r from-red-600/20 to-red-700/20 border border-red-400/30 hover:from-red-600 hover:to-red-700 hover:border-red-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
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
  );
};
