
import React from 'react';
import { Car, Bike, Ship, Plane } from 'lucide-react';

interface VehicleTypeSelectorProps {
  selectedType: string;
  onTypeSelect: (type: string) => void;
}

export const VehicleTypeSelector = ({ selectedType, onTypeSelect }: VehicleTypeSelectorProps) => {
  const vehicleTypes = [
    { value: 'car', label: 'Car', icon: Car },
    { value: 'motorcycle', label: 'Motorcycle', icon: Bike },
    { value: 'yacht', label: 'Yacht', icon: Ship },
    { value: 'aircraft', label: 'Aircraft', icon: Plane }
  ];

  return (
    <div>
      <label className="block text-sm font-semibold mb-4">Vehicle Type</label>
      <div className="grid md:grid-cols-2 gap-3">
        {vehicleTypes.map((type) => {
          const IconComponent = type.icon;
          return (
            <button
              key={type.value}
              type="button"
              onClick={() => onTypeSelect(type.value)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 flex items-center space-x-3 ${
                selectedType === type.value
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
  );
};
