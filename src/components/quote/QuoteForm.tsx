
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { VehicleTypeSelector } from './VehicleTypeSelector';
import { QuoteFormFields } from './QuoteFormFields';

export const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const setVehicleType = (type: string) => {
    setFormData(prev => ({ ...prev, vehicleType: type }));
  };

  const extractVehicleDetails = (vehicleModel: string) => {
    // Try to extract make, model, and year from the input
    const parts = vehicleModel.trim().split(' ');
    
    // Look for a 4-digit year
    const yearMatch = vehicleModel.match(/\b(19|20)\d{2}\b/);
    const year = yearMatch ? parseInt(yearMatch[0]) : new Date().getFullYear();
    
    if (parts.length >= 2) {
      const make = parts[0];
      const model = parts.slice(1).join(' ').replace(/\b(19|20)\d{2}\b/, '').trim();
      return { make, model, year };
    }
    
    // Fallback if format is not recognized
    return {
      make: vehicleModel.split(' ')[0] || 'Unknown',
      model: vehicleModel,
      year
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if user is authenticated
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to submit a quote request.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { make, model, year } = extractVehicleDetails(formData.vehicleModel);

      const { error } = await supabase
        .from('quotes')
        .insert({
          user_id: user.id,
          vehicle_make: make,
          vehicle_model: model,
          vehicle_year: year,
          service_type: formData.serviceType,
          description: formData.message || null,
          status: 'pending'
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Quote Request Submitted!",
        description: "We've received your quote request and will get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicleType: '',
        vehicleModel: '',
        serviceType: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting quote:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your quote. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Calendar className="w-6 h-6 text-red-400 mr-3" />
        Request Quote
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <QuoteFormFields 
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <VehicleTypeSelector 
          selectedType={formData.vehicleType}
          onTypeSelect={setVehicleType}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
        >
          {isSubmitting ? 'Submitting...' : 'Request Quote'}
        </button>
      </form>
    </div>
  );
};
