
import React from 'react';
import { Shield, Car, Plane, Ship, Clock, Sparkles, Globe, Users } from 'lucide-react';

const services = [
  {
    title: 'I’Mvinci Special Operations & Concierge Services',
    description: 'At I’Mvinci, we curate experiences and services that go beyond ownership  and we offer access to a world where heritage, investment, and exclusivity converge. Our Special Operations & Concierge Services are crafted for automotive connoisseurs, elite collectors, and high-net-worth individuals who demand nothing less than global reach with tailored precision.',
    image: 'https://images.unsplash.com/photo-1565109366066-40d4cf1bdc0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Sparkles,
    subtitle: 'Exclusive Service'
  },
  {
    title: 'Classic & Vintage Car Security',
    description: 'We provide discreet and fortified security solutions for classic, vintage, and exotic vehicles, offering climate-controlled storage, high-level monitoring, and strategic movement management. Whether preserving a 1960s Ferrari or a rare Aston Martin, we treat every vehicle as a historic asset  with preservation to match.',
    image: 'https://images.unsplash.com/photo-1565109366066-40d4cf1bdc0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Shield,
    subtitle: 'Heritage Protection'
  },
  {
    title: 'Global Sourcing & Acquisition of Investment-Grade Vehicles',
    description: 'Through our extensive international network, I’Mvinci helps clients source and purchase vintage, classic, and exotic vehicles from exclusive auctions, collectors, and manufacturers worldwide. We handle authentication, valuation, negotiation, and secure delivery to your doorstep — turning passion into smart investment. These vehicles are not liabilities — they are appreciating assets, often outperforming traditional markets.',
    image: 'https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Globe,
    subtitle: 'Investment-Grade Vehicles'
  },
  {
    title: 'Air Cargo for Luxury, Exotic & Vintage Cars',
    description: 'We offer fully-managed, white-glove air cargo services for high-value cars traveling to and from Nigeria. With insured, climate-sensitive transport, global customs clearance, and secured last-mile delivery, your vehicle arrives with the same reverence with which it was built.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Plane,
    subtitle: 'Premium Logistics'
  },
  {
    title: 'Elite Factory Tours & Private Access',
    description: 'As part of our ultra-exclusive offerings, I’Mvinci arranges private, invitation-only factory visits for our elite clients. Walk through the heart of iconic marques — from Ferrari’s Maranello facility to Pagani’s Atelier, or Rolls-Royce’s Goodwood estate witnessing the craftsmanship, meeting the artisans, and even discussing bespoke commissions. These are not tours; they are behind-the-scenes experiences reserved for the few who appreciate where passion meets engineering excellence.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Users,
    subtitle: 'Behind-the-Scenes Access'
  },
  {
    title: 'World-Class Auto Technicians & Overseas Specialists',
    description: 'We deploy certified, brand-specific technicians from around the globe to service your car wherever it resides. Whether it’s a vintage Porsche requiring Stuttgart-trained mechanics or a Lamborghini needing factory-level diagnostics, our mobile elite care is always within reach.',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Car,
    subtitle: 'Mobile Elite Care'
  },
  {
    title: 'Authentic OEM Parts & Rare Component Sourcing',
    description: 'We locate and supply genuine manufacturer parts for rare and discontinued models  maintaining authenticity and value. From period-correct carburetors to original interior trim, our parts procurement ensures your vehicle remains true to its lineage.',
    image: 'https://images.unsplash.com/photo-1582449831849-cb2900e333c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Ship,
    subtitle: 'Heritage Restoration'
  },
  {
    title: 'Paint Matching & Heritage Restoration',
    description: 'I’Mvinci connects clients to award-winning automotive restoration experts and color-matching specialists who work with exact factory codes and techniques. Whether it’s reviving a faded Rosso Corsa or perfectly replicating British Racing Green, our network guarantees show-quality results, globally executed.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Sparkles,
    subtitle: 'Perfection Restored'
  },
  {
    title: 'Authentic Automotive Apparel & Collectibles',
    description: 'Our concierge program gives you access to official limited-edition apparel, heritage rally wear, original posters, scale models, and rare branded collectibles. Whether dressing the part or decorating a private showroom, we cater to those who live the lifestyle, not just drive it.',
    image: 'https://images.unsplash.com/photo-1558542316-cee10b3d9d4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Clock,
    subtitle: 'Lifestyle Collection'
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 hover:border-red-500/40 transition-colors p-8 flex items-center gap-4"
            >
              <div className="shrink-0">
                <service.icon className="w-10 h-10 text-red-400 group-hover:text-red-300 transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-400">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
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
  );
};
