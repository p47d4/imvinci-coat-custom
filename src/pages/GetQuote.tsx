
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Car, Bike, Ship, Plane, Calendar, User, Mail, Phone } from 'lucide-react';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    vehicleModel: '',
    serviceType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const vehicleTypes = [
    { value: 'car', label: 'Car', icon: Car },
    { value: 'motorcycle', label: 'Motorcycle', icon: Bike },
    { value: 'yacht', label: 'Yacht', icon: Ship },
    { value: 'aircraft', label: 'Aircraft', icon: Plane }
  ];

  const services = [
    'Ceramic Coating',
    'Paint Protection Film',
    'Glass Coating',
    'Interior Protection',
    'Full Detail Package',
    'Maintenance Package'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      <div className="pt-20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Get Your <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Quote</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to protect your investment? Get a personalized quote for our premium coating services. 
              Our experts will provide you with the best solution for your needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form Section */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Calendar className="w-6 h-6 text-red-400 mr-3" />
                Request Quote
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-red-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-red-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-red-400 focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Vehicle Type Selection */}
                <div>
                  <label className="block text-sm font-semibold mb-4">Vehicle Type</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {vehicleTypes.map((type) => {
                      const IconComponent = type.icon;
                      return (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, vehicleType: type.value }))}
                          className={`p-4 rounded-lg border-2 transition-all duration-300 flex items-center space-x-3 ${
                            formData.vehicleType === type.value
                              ? 'border-red-400 bg-red-400/10'
                              : 'border-gray-600 hover:border-gray-400'
                          }`}
                        >
                          <IconComponent className="w-6 h-6 text-red-400" />
                          <span>{type.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Vehicle Model */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Vehicle Make/Model</label>
                  <input
                    type="text"
                    name="vehicleModel"
                    value={formData.vehicleModel}
                    onChange={handleInputChange}
                    placeholder="e.g., BMW X5, Yamaha R1, Azimut 60"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-red-400 focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Service Needed</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-red-400 focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Additional Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us more about your requirements..."
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-red-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Request Quote
                </button>
              </form>
            </div>

            {/* Information Section */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-red-400">Why Choose Imvinci?</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></div>
                    <span>Premium quality ceramic coatings with 10-year warranty</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></div>
                    <span>Expert technicians with years of experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></div>
                    <span>State-of-the-art application facilities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></div>
                    <span>Comprehensive aftercare and maintenance support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-red-400">Contact Information</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-red-400 mr-3" />
                    <span>info@imvinci.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-red-400 mr-3" />
                    <span>+234 (0) 123-456-7890</span>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-red-400 mr-3 mt-1" />
                    <div>
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GetQuote;
