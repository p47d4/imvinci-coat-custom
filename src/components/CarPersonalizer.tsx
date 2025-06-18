
import React, { useState } from 'react';
import { Car, Truck, Bike, Ship } from 'lucide-react';

const vehicleTypes = [
  { id: 'sedan', name: 'Sedan', icon: Car, image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 'suv', name: 'SUV', icon: Truck, image: 'https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 'coupe', name: 'Coupe', icon: Car, image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 'pickup', name: 'Pickup Truck', icon: Truck, image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
];

const services = [
  { id: 'ceramic', name: 'Ceramic Coating', price: '$599', description: 'Premium protection for your vehicle' },
  { id: 'paint', name: 'Paint Protection Film', price: '$899', description: 'Ultimate paint protection' },
  { id: 'window', name: 'Window Tinting', price: '$299', description: 'Privacy and UV protection' },
  { id: 'interior', name: 'Interior Protection', price: '$399', description: 'Fabric and leather protection' }
];

const products = [
  { id: 1, name: 'Premium Ceramic Coat', price: '$89.99', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { id: 2, name: 'Glass Cleaner Pro', price: '$24.99', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { id: 3, name: 'Microfiber Towels', price: '$19.99', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { id: 4, name: 'Paint Correction Kit', price: '$149.99', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { id: 5, name: 'Wheel Cleaner', price: '$34.99', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { id: 6, name: 'Interior Protectant', price: '$29.99', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' }
];

const applicationPhotos = [
  { id: 1, title: 'Professional Application', image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 2, title: 'Paint Protection Process', image: 'https://images.unsplash.com/photo-1609465842398-7af649e69d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 3, title: 'Ceramic Coating Application', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 4, title: 'Detail Work', image: 'https://images.unsplash.com/photo-1605559911160-a3d95d213904?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 5, title: 'Final Inspection', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 6, title: 'Quality Results', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
];

export const CarPersonalizer = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">US Auto Service Builder</h1>
          <p className="text-xl mb-8">Professional vehicle protection and detailing services</p>
        </div>
      </section>

      {/* Vehicle Selection */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Select your vehicle type</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {vehicleTypes.map((vehicle) => (
              <div 
                key={vehicle.id}
                onClick={() => setSelectedVehicle(vehicle.id)}
                className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 ${
                  selectedVehicle === vehicle.id ? 'ring-2 ring-red-600 shadow-lg' : 'hover:shadow-lg'
                }`}
              >
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-32 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold text-center">{vehicle.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What do you need service for? (Select all that apply)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div 
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`bg-white border-2 rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                  selectedServices.includes(service.id) 
                    ? 'border-red-600 bg-red-50' 
                    : 'border-gray-200 hover:border-red-300'
                }`}
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  <p className="text-red-600 font-bold text-xl">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-red-600 font-bold text-xl">{product.price}</p>
                  <button className="w-full mt-3 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Photos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Application Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationPhotos.map((photo) => (
              <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={photo.image} alt={photo.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to protect your vehicle?</h2>
          <p className="text-xl mb-8">Get a personalized quote for our premium services</p>
          <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Get Your Quote Now
          </button>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sign Up To Our Mailing Newsletter</h2>
          <p className="text-gray-400 mb-8">Stay updated with the latest products and services</p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900"
            />
            <button className="bg-red-600 px-6 py-3 rounded-r-lg hover:bg-red-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
