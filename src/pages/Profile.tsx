
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { User, Car, ShoppingBag, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const Profile = () => {
  // Mock data - in a real app this would come from a database
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+234 (0) 123-456-7890',
    location: 'Lagos, Nigeria',
    memberSince: 'January 2024'
  };

  const personalizations = [
    {
      id: 1,
      vehicle: 'BMW M3 2023',
      service: 'Ceramic Coating + PPF',
      date: '2024-12-15',
      status: 'Completed',
      cost: 450000
    },
    {
      id: 2,
      vehicle: 'Mercedes C-Class 2022',
      service: 'Paint Correction + Ceramic Coating',
      date: '2024-11-28',
      status: 'Completed',
      cost: 320000
    },
    {
      id: 3,
      vehicle: 'Audi A4 2024',
      service: 'Full Vehicle Wrap',
      date: '2024-10-10',
      status: 'Completed',
      cost: 280000
    }
  ];

  const purchases = [
    {
      id: 1,
      item: 'Ceramic Coating Kit',
      quantity: 2,
      date: '2024-12-01',
      cost: 239200
    },
    {
      id: 2,
      item: 'Microfiber Cloth Set',
      quantity: 3,
      date: '2024-11-20',
      cost: 58800
    },
    {
      id: 3,
      item: 'Detail Spray',
      quantity: 1,
      date: '2024-11-15',
      cost: 15600
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <User className="w-8 h-8 text-red-400 mr-3" />
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Your <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Profile</span>
                  </h1>
                </div>
                <p className="text-xl text-gray-400">Manage your account and view your history</p>
              </div>

              {/* Profile Information */}
              <div className="bg-gray-800/50 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-red-400">Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-red-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Name</p>
                      <p className="text-white font-semibold">{userProfile.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-red-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-semibold">{userProfile.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-red-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-semibold">{userProfile.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-semibold">{userProfile.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-red-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Member Since</p>
                      <p className="text-white font-semibold">{userProfile.memberSince}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personalizations History */}
              <div className="bg-gray-800/50 rounded-2xl p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Car className="w-6 h-6 text-red-400 mr-3" />
                  <h2 className="text-2xl font-bold text-red-400">Vehicle Personalizations</h2>
                </div>
                <div className="space-y-4">
                  {personalizations.map((personalization) => (
                    <div key={personalization.id} className="bg-gray-700/50 rounded-lg p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-lg font-semibold text-white">{personalization.vehicle}</h3>
                          <p className="text-gray-400">{personalization.service}</p>
                          <p className="text-sm text-gray-500">{personalization.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-white">{formatPrice(personalization.cost)}</p>
                          <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                            {personalization.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Purchase History */}
              <div className="bg-gray-800/50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <ShoppingBag className="w-6 h-6 text-red-400 mr-3" />
                  <h2 className="text-2xl font-bold text-red-400">Purchase History</h2>
                </div>
                <div className="space-y-4">
                  {purchases.map((purchase) => (
                    <div key={purchase.id} className="bg-gray-700/50 rounded-lg p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-lg font-semibold text-white">{purchase.item}</h3>
                          <p className="text-gray-400">Quantity: {purchase.quantity}</p>
                          <p className="text-sm text-gray-500">{purchase.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-white">{formatPrice(purchase.cost)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
