import React from 'react';
import { Car, Ship, Plane, Clock, Shield, Sparkles, Droplets, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const vehicleServices = [
  {
    title: "Paint Protection Film (PPF)",
    description: "At I'Mvinci, protection meets perfection. Our Paint Protection Film (PPF) is engineered to shield your vehicle against stone chips, scratches, and environmental damage while preserving the showroom finish beneath.",
    image: "/lovable-uploads/Porsche.jpg",
    icon: Shield,
    details: "Virtually invisible, it delivers uncompromising defense without altering the beauty of your paintwork. With advanced self-healing technology, surface marks fade away with heat, ensuring your car remains flawless mile after mile."
  },
  {
    title: "Color PPF",
    description: "Luxury is about choice, and with Color PPF, protection becomes an expression of style. Whether you seek a sleek satin finish, a bold color transformation, or subtle accents that elevate your vehicle's presence.",
    image: "/lovable-uploads/IMG_3992.JPG",
    icon: Palette,
    details: "I'Mvinci Color PPF combines durability with design. It protects like traditional PPF yet allows you to redefine aesthetics without compromise, and without permanence."
  },
  {
    title: "Clear PPF",
    description: "Another Luxury with choice, and with clear PPF, protection becomes an expression of style. Whether you seek a sleek satin finish, a bold clear transformation, or subtle accents that elevate your vehicle's presence.",
    image: "/lovable-uploads/clear ppf.png.png",
    icon: Palette,
    details: "I'Mvinci Color PPF combines durability with design. It protects like traditional PPF yet allows you to redefine aesthetics without compromise, and without permanence."
  },
  {
    title: "Paint Correction",
    description: "Every surface tells a story — but not every mark deserves to remain. At I'Mvinci, our Paint Correction service restores paintwork to its true brilliance by meticulously removing swirl marks, oxidation, and imperfections.",
    image: "/lovable-uploads/IMG-7350.JPG",
    icon: Sparkles,
    details: "Using advanced polishing systems and precise techniques, our experts revive depth, clarity, and gloss, revealing a flawless mirror-like reflection. It is not just about restoring paint — it is about elevating it beyond factory standards."
  },
  {
    title: "Interior Detailing",
    description: "The interior of a vehicle is more than a cabin, it is a sanctuary. At I'Mvinci, our Interior Detailing service is designed to restore that sanctuary to its most pristine state.",
    image: "/lovable-uploads/IMG_0926.JPG",
    icon: Sparkles,
    details: "Every surface is treated with meticulous attention from deep-cleaning carpets and fabric extraction, to rejuvenating leather with conditioners that enhance suppleness and aroma."
  },
  {
    title: "Leather Restoration",
    description: "Leather is timeless — but without care, even the finest hides can lose their elegance. At I'Mvinci, our Leather Restoration service revives and preserves interior craftsmanship.",
    image: "/lovable-uploads/5a28c0b8-b8da-4120-837b-afe6c384da70 copy.JPG",
    icon: Sparkles,
    details: "From repairing scuffs, cracks, and fading, to precise colour matching that blends seamlessly with the original tone, we restore leather with meticulous attention to detail."
  },
  {
    title: "Premium Window Tint",
    description: "Style • Comfort • Protection. At I'Mvinci, we offer state-of-the-art window tinting solutions designed to elevate the look, performance, and protection of your vehicle.",
    image: "/lovable-uploads/IMG_3547 copy.JPG",
    icon: Droplets,
    details: "Our premium films are engineered to reduce heat, block harmful UV rays, increase privacy, and enhance safety without compromising clarity or style."
  }
];

const yachtServices = [
  {
    title: "Yacht Detailing",
    description: "A yacht is more than a vessel; it is a statement of prestige. At I'Mvinci, our Yacht Detailing services uphold that statement by preserving and enhancing every detail with uncompromising precision.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Ship
  },
  {
    title: "Custom Colour Design with Colour PPF",
    description: "Luxury is individuality and at I'Mvinci, we transform yachts into bespoke masterpieces. Our Color PPF technology allows owners to redefine their vessel's aesthetic without the permanence of traditional paintwork.",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Palette
  },
  {
    title: "Gelcoat Restoration",
    description: "Salt, sun, and time can dull even the finest finishes. Our Gelcoat Restoration process revives faded or oxidised surfaces, restoring the original depth, gloss, and smoothness of your yacht's exterior.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Sparkles
  },
  {
    title: "Window Tinting",
    description: "True luxury is felt as much as it is seen. Our advanced Window Tinting solutions create a cooler, more comfortable interior climate while filtering harmful UV rays.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Droplets
  }
];

const aircraftServices = [
  {
    title: "Elite Aircraft Detailing",
    description: "At I'Mvinci, we redefine aircraft care with our bespoke aviation detailing services, tailored to meet the highest standards of the aviation and private jet industry.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Plane,
    features: ["FAA and EASA-compliant processes", "Non-corrosive, aviation-approved products", "Secure airside access and NDAs available", "Trusted by private owners and fleet managers"]
  }
];

const timepieceServices = [
  {
    title: "I'Mvinci Timepiece Spa™",
    description: "At I'Mvinci, we believe time deserves to be preserved in its finest form. Our Timepiece Spa™ offers exclusive, high-precision luxury watch care services.",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Clock,
    features: ["Mirror Finish Treatment™", "Deep Clean Ritual™", "Invisible Armor™ – Watch Protection Film", "Crystal Clarity Service™"]
  }
];

export const Packages = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="py-20 bg-gradient-to-r from-gray-900 to-black">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Premium <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Protection</span> Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience unparalleled protection and care across vehicles, yachts, aircraft, and timepieces. 
              Where precision meets luxury, and excellence is engineered.
            </p>
          </div>
        </div>

        {/* Vehicle Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Car className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">Vehicle Services</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive protection and restoration for automotive excellence
              </p>
            </div>

            <div className="space-y-16">
              {vehicleServices.map((service, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-red-500/20 transition-all duration-500`}>
                  <div className="lg:w-1/2 relative h-80 lg:h-auto">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-gray-900/90 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      {/* <service.icon className="w-12 h-12 text-red-400" /> */}
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">{service.description}</p>
                    {service.details && (
                      <p className="text-gray-400 mb-8 leading-relaxed">{service.details}</p>
                    )}
                    <Link to="/quote" className="self-start bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Yacht Services */}
        <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900" style={{
            backgroundImage: "url('/lovable-uploads/yatch-hero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Ship className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">Yacht Services</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Marine-grade luxury protection for prestigious vessels
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {yachtServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  {/* <service.icon className="w-12 h-12 text-red-400 mb-6" /> */}
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aircraft Services */}
        <section className="py-20" style={{
            backgroundImage: "url('/lovable-uploads/aircraft-hero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Plane className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">Aircraft Services</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Aviation-grade detailing for private jets and aircraft
              </p>
            </div>

            {aircraftServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 text-center">
                {/* <service.icon className="w-16 h-16 text-red-400 mx-auto mb-6" /> */}
                <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">{service.description}</p>
                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {service.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timepiece Services */}
        <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900" style={{
            backgroundImage: "url('/lovable-uploads/timepiece-hero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Clock className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">Timepiece Services</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Luxury watch care and preservation for horological masterpieces
              </p>
            </div>

            {timepieceServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl p-12 text-center">
                {/* <service.icon className="w-16 h-16 text-red-400 mx-auto mb-6" /> */}
                <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">{service.description}</p>
                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {service.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Experience I'Mvinci Excellence</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Where precision meets luxury, and every detail is engineered to perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote" className="bg-white text-red-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                Get Custom Quote
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};
