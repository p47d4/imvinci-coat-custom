
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
    <section id="personalizer" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Palette className="w-8 h-8 text-blue-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Personalize Your Vehicle
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience our premium coatings with our interactive visualizer. 
            Choose your perfect color and see it come to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Car Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
              <div 
                className="w-full h-64 rounded-xl mb-6 relative overflow-hidden transition-all duration-500"
                style={{ 
                  backgroundColor: selectedColor.value,
                  boxShadow: `0 20px 40px ${selectedColor.value}40`
                }}
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3')] bg-contain bg-no-repeat bg-center opacity-60 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Luxury Sedan</h3>
                  <p className="text-gray-300">With {selectedColor.name} Coating</p>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-2">{selectedColor.name}</h4>
                {selectedColor.premium && (
                  <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Premium
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Choose Your Color</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`group relative p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedColor.name === color.name
                      ? 'border-blue-400 shadow-lg shadow-blue-400/25'
                      : 'border-gray-600 hover:border-gray-400'
                  }`}
                >
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-2 border-2 border-gray-300"
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <p className="text-sm font-medium text-center">{color.name}</p>
                  {color.premium && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-semibold">
                      Premium
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Request Quote for {selectedColor.name}
              </button>
              <button className="w-full border border-gray-400 text-gray-300 hover:text-white hover:border-white px-6 py-4 rounded-xl font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
