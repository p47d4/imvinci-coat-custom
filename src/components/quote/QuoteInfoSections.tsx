
import React from 'react';
import { Mail, Phone, Calendar } from 'lucide-react';

export const QuoteInfoSections = () => {
  return (
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
  );
};
