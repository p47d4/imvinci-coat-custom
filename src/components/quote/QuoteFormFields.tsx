
import React from 'react';
import { User, Mail, Phone } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  vehicleModel: string;
  serviceType: string;
  message: string;
}

interface QuoteFormFieldsProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export const QuoteFormFields = ({ formData, handleInputChange }: QuoteFormFieldsProps) => {
  const services = [
    'Ceramic Coating',
    'Paint Protection Film',
    'Glass Coating',
    'Interior Protection',
    'Full Detail Package',
    'Maintenance Package'
  ];

  return (
    <>
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

      {/* Vehicle Model */}
      <div>
        <label className="block text-sm font-semibold mb-2">Vehicle Make/Model/Year</label>
        <input
          type="text"
          name="vehicleModel"
          value={formData.vehicleModel}
          onChange={handleInputChange}
          placeholder="e.g., 2023 BMW X5, 2022 Yamaha R1, 2021 Azimut 60"
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
    </>
  );
};
