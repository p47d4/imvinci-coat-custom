
import React, { useState } from 'react';
import { Palette } from 'lucide-react';

const colors = [
  { name: 'Midnight Black', value: '#0a0a0a', premium: true },
  { name: 'Pearl White', value: '#f8f8ff', premium: true },
  { name: 'Racing Red', value: '#dc2626', premium: false },
  { name: 'Ocean Blue', value: '#1e40af', premium: false },
  { name: 'Forest Green', value: '#166534', premium: false },
  { name: 'Sunset Orange', value: '#ea580c', premium: false },
  { name: 'Royal Purple', value: '#7c3aed', premium: true },
  { name: 'Chrome Silver', value: '#9ca3af', premium: true },
];

export const CarPersonalizer = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <section id="personalizer" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Palette className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Personalize Your Vehicle
            </h2>
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Experience our premium coatings with our interactive visualizer. 
            Choose your perfect color and see it come to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Car Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div 
                className="w-full h-64 rounded-xl mb-6 relative overflow-hidden transition-all duration-500 border-2 border-gray-200"
                style={{ 
                  backgroundColor: selectedColor.value,
                  boxShadow: `0 20px 40px ${selectedColor.value}40`
                }}
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3')] bg-contain bg-no-repeat bg-center opacity-60 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Luxury Sedan</h3>
                  <p className="text-gray-200">With {selectedColor.name} Coating</p>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-2 text-black">{selectedColor.name}</h4>
                {selectedColor.premium && (
                  <span className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Premium
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-black">Choose Your Color</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`group relative p-4 rounded-xl border-2 transition-all duration-300 bg-white ${
                    selectedColor.name === color.name
                      ? 'border-red-600 shadow-lg shadow-red-600/25'
                      : 'border-gray-200 hover:border-red-400'
                  }`}
                >
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-2 border-2 border-gray-200"
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <p className="text-sm font-medium text-center text-black">{color.name}</p>
                  {color.premium && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-600 to-red-800 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      Premium
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Request Quote for {selectedColor.name}
              </button>
              <button className="w-full border-2 border-red-600 text-red-700 hover:bg-red-600 hover:text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
