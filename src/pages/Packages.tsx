import React from 'react';
import { Check, Star, Shield, Zap, Car, Ship, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';


export const Packages = () => {
  const packages = [
    {
      name: "Essential Protection",
      description: "Basic coating protection for everyday vehicles",
      price: "₦150,000",
      features: [
        "Single-layer ceramic coating",
        "12-month warranty",
        "Basic paint correction",
        "Water repellent finish",
        "UV protection"
      ],
      icon: Car,
      popular: false,
      color: "border-gray-600"
    },
    {
      name: "Premium Shield",
      description: "Advanced protection for luxury and performance vehicles",
      price: "₦350,000",
      features: [
        "Multi-layer ceramic coating",
        "24-month warranty",
        "Advanced paint correction",
        "Self-healing properties",
        "Enhanced gloss finish",
        "Chemical resistance",
        "Professional detailing"
      ],
      icon: Shield,
      popular: true,
      color: "border-red-500"
    },
    {
      name: "Ultimate Defense",
      description: "Maximum protection for high-value assets",
      price: "₦750,000",
      features: [
        "Premium ceramic coating",
        "36-month warranty",
        "Complete paint restoration",
        "Nano-ceramic technology",
        "Extreme durability",
        "Professional installation",
        "Lifetime support",
        "Annual maintenance"
      ],
      icon: Zap,
      popular: false,
      color: "border-blue-500"
    }
  ];

  const specializedServices = [
    {
      title: "Marine Protection",
      description: "Specialized coatings for yachts and boats",
      icon: Ship,
      features: ["Saltwater resistance", "Anti-fouling properties", "UV protection", "Marine-grade materials"]
    },
    {
      title: "Aviation Coating",
      description: "Aircraft protection and maintenance solutions",
      icon: Plane,
      features: ["High-altitude protection", "Temperature resistance", "Aerodynamic optimization", "Regulatory compliance"]
    },
    {
      title: "Motorcycle Shield",
      description: "Dedicated protection for motorcycles",
      icon: Car,
      features: ["Impact resistance", "Weather protection", "Custom finishes", "Performance enhancement"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
    <Header />

    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Protection Packages</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect level of protection for your vehicle, vessel, or aircraft. 
            Our advanced coating technologies provide unmatched durability and performance.
          </p>
        </div>
      </div>

      {/* Main Packages */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Protection Level</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From essential protection to ultimate defense, we have a package that fits your needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl p-8 border-2 ${pkg.color} transition-transform hover:scale-105`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                    <pkg.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold text-red-600 mb-2">{pkg.price}</div>
                  <p className="text-sm text-gray-500">Starting price</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/quote"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 block text-center"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specialized Services */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Protection Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Beyond standard packages, we offer specialized solutions for unique applications and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                  <service.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-block mt-6 text-red-600 hover:text-red-700 font-semibold transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Investment?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get a personalized quote and discover which package is perfect for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};
