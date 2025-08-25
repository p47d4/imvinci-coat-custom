
import React, { useState, useMemo } from 'react';
import { Car, Truck, Clock, Calculator } from 'lucide-react';

const vehicleTypes = [
  { id: 'small', name: 'Small/Compact', desc:'e.g. X-Small 2-Door/Audi A3/BMW 2 Series/VW Golf GTI/Fiat 500/Mini Cooper', icon: Car, image: 'https://gtechniq.com/wp-content/uploads/2020/05/golf-auto-black.svg', priceMultiplier: 1.0, timeMultiplier: 1.0 },
  { id: 'mid', name: 'Mid Size', desc:'e.g. Small Sedan/Lexus ES/Ford Fusion/Tesla Model 3/Chevy Malibu/Audi A5', icon: Truck, image: 'https://gtechniq.com/wp-content/uploads/2020/06/teslamodel3-auto-black.svg', priceMultiplier: 1.3, timeMultiplier: 1.2 },
  { id: 'full', name: 'Full Size', desc:'e.g. Large Sedan/Dodge Charger/BMW 5 series/Tesla Model S/Ford Taurus/Porsche Macan', icon: Car, image: 'https://gtechniq.com/wp-content/uploads/2020/06/bmw5series-auto-black.svg', priceMultiplier: 1.6, timeMultiplier: 1.5 },
  { id: 'large', name: 'Large/X-Large*', desc:'e.g. Large/XL SUV*/Extended Cab Pickup*/Range Rover/BMW 7 Series/*XL Requires Additional Charges', icon: Truck, image: 'https://gtechniq.com/wp-content/uploads/2020/06/escalade-auto-black.svg', priceMultiplier: 2.0, timeMultiplier: 1.8 }
];

const vehicleConditions = [
  { id: 'perfect', name: 'New car/near perfect', image: 'https://gtechniq.com/wp-content/uploads/2020/05/new-car-min.jpg', priceMultiplier: 1.0, timeMultiplier: 1.0 },
  { id: 'light', name: 'Light Swirls', image: 'https://gtechniq.com/wp-content/uploads/2020/05/light-swirls-car-min.jpg', priceMultiplier: 1.2, timeMultiplier: 1.3 },
  { id: 'moderate', name: 'Large Swirls & Some Deep Scratches', image: 'https://gtechniq.com/wp-content/uploads/2020/05/large-swirls-car-min.jpg', priceMultiplier: 1.5, timeMultiplier: 1.6 },
  { id: 'heavy', name: 'Deep Scratches on All Panels', image: 'https://gtechniq.com/wp-content/uploads/2020/05/deep-swirls-car-min.jpg', priceMultiplier: 2.0, timeMultiplier: 2.0 }
];

const polishingOptions = [
  { id: 'none', name: 'No Polishing Required', description: 'Paint is in excellent condition', basePrice: 0, timeHours: 0 },
  { id: 'light', name: 'Light Polish', description: 'Minor swirl mark removal', basePrice: 25000, timeHours: 2 },
  { id: 'medium', name: 'Medium Polish', description: 'Moderate paint correction', basePrice: 45000, timeHours: 4 },
  { id: 'heavy', name: 'Heavy Polish', description: 'Full paint restoration', basePrice: 75000, timeHours: 8 }
];

const services = [
  { id: 'ceramic', name: 'Ceramic Coating', basePrice: 55000, timeHours: 6, description: 'Premium protection for your vehicle' },
  { id: 'ppf', name: 'Paint Protection Film', basePrice: 80900, timeHours: 12, description: 'Ultimate paint protection' },
  { id: 'window', name: 'Window Tinting', basePrice: 29000, timeHours: 3, description: 'Privacy and UV protection' },
  { id: 'interior', name: 'Interior Protection', basePrice: 39000, timeHours: 4, description: 'Fabric and leather protection' }
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
  const [selectedVehicleType, setSelectedVehicleType] = useState(null);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [selectedPolishing, setSelectedPolishing] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  // Calculate total quote
  const quoteCalculation = useMemo(() => {
    if (!selectedVehicleType || !selectedCondition || selectedPolishing === null) {
      return { totalPrice: 0, totalTime: 0 };
    }

    const vehicleType = vehicleTypes.find(v => v.id === selectedVehicleType);
    const condition = vehicleConditions.find(c => c.id === selectedCondition);
    const polishing = polishingOptions.find(p => p.id === selectedPolishing);

    let totalPrice = 0;
    let totalTime = 0;

    // Add polishing cost and time
    if (polishing) {
      totalPrice += polishing.basePrice * vehicleType.priceMultiplier * condition.priceMultiplier;
      totalTime += polishing.timeHours * vehicleType.timeMultiplier * condition.timeMultiplier;
    }

    // Add selected services cost and time
    selectedServices.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        totalPrice += service.basePrice * vehicleType.priceMultiplier;
        totalTime += service.timeHours * vehicleType.timeMultiplier;
      }
    });

    return { 
      totalPrice: Math.round(totalPrice), 
      totalTime: Math.ceil(totalTime) 
    };
  }, [selectedVehicleType, selectedCondition, selectedPolishing, selectedServices]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatTime = (hours) => {
    if (hours === 0) return '0 hours';
    if (hours < 24) return `${hours} hours`;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    return remainingHours > 0 ? `${days} days ${remainingHours} hours` : `${days} days`;
  };

  return (
    <div className="bg-white text-gray-900 relative">
      {/* Floating Quote Calculator */}
      {(selectedVehicleType || selectedCondition || selectedPolishing !== null || selectedServices.length > 0) && (
        <div className="fixed bottom-6 right-6 bg-gradient-to-br from-red-600 to-red-700 text-white p-6 rounded-2xl shadow-2xl z-50 min-w-[280px] border border-red-500/20">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-6 h-6" />
            <h3 className="text-lg font-bold">Quote Summary</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-red-100">Total Price:</span>
              <span className="text-2xl font-bold">
                {quoteCalculation.totalPrice > 0 ? formatPrice(quoteCalculation.totalPrice) : '₦0'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-red-100 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Time to Complete:
              </span>
              <span className="font-semibold">
                {quoteCalculation.totalTime > 0 ? formatTime(quoteCalculation.totalTime) : '0 hours'}
              </span>
            </div>
          </div>
          
          {quoteCalculation.totalPrice > 0 && (
            <button className="w-full mt-4 bg-white text-red-600 font-bold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
              Get Official Quote
            </button>
          )}
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Car Service Personalizer</h1>
          <p className="text-xl mb-8">Professional vehicle protection and detailing services</p>
        </div>
      </section>

      {/* Vehicle Type Selection */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Select Your Car Type</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {vehicleTypes.map((vehicle) => (
              <div 
                key={vehicle.id}
                onClick={() => setSelectedVehicleType(vehicle.id)}
                className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 ${
                  selectedVehicleType === vehicle.id ? 'ring-2 ring-red-600 shadow-lg' : 'hover:shadow-lg'
                }`}
              >
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-32 object-contain rounded-lg mb-4" />
                <h3 className="text-lg font-semibold text-center">{vehicle.name}</h3>
                <p className="text-sm text-gray-600 text-center">{vehicle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paint Condition Selection */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What is the overall condition of your paintwork?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {vehicleConditions.map((condition) => (
              <div 
                key={condition.id}
                onClick={() => setSelectedCondition(condition.id)}
                className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 ${
                  selectedCondition === condition.id ? 'ring-2 ring-red-600 shadow-lg' : 'hover:shadow-lg'
                }`}
              >
                <img src={condition.image} alt={condition.name} className="w-full h-32 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold text-center">{condition.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Polishing Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How much polishing do you require?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {polishingOptions.map((polish) => (
              <div 
                key={polish.id}
                onClick={() => setSelectedPolishing(polish.id)}
                className={`bg-white border-2 rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                  selectedPolishing === polish.id 
                    ? 'border-red-600 bg-red-50' 
                    : 'border-gray-200 hover:border-red-300'
                }`}
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">{polish.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{polish.description}</p>
                  <p className="text-red-600 font-bold text-xl">
                    {polish.basePrice > 0 ? `From ₦${polish.basePrice.toLocaleString()}` : 'Free'}
                  </p>
                  {polish.timeHours > 0 && (
                    <p className="text-gray-500 text-sm mt-2">{polish.timeHours} hours</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
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
                  <p className="text-red-600 font-bold text-xl">From ₦{service.basePrice.toLocaleString()}</p>
                  <p className="text-gray-500 text-sm mt-2">{service.timeHours} hours</p>
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
