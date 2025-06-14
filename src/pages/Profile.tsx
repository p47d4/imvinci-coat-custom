
import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { User, Car, ShoppingBag, Calendar, MapPin, Phone, Mail, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { ProfileEditModal } from '@/components/profile/ProfileEditModal';
import { QuotesHistory } from '@/components/profile/QuotesHistory';

interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  phone: string;
  location: string;
  avatar_url: string;
  created_at: string;
}

interface Personalization {
  id: string;
  vehicle: string;
  service: string;
  date: string;
  status: string;
  cost: number;
}

interface Purchase {
  id: string;
  item_name: string;
  quantity: number;
  unit_price: number;
  total_cost: number;
  purchase_date: string;
}

interface Quote {
  id: string;
  vehicle_make: string;
  vehicle_model: string;
  vehicle_year: number;
  service_type: string;
  description: string;
  status: string;
  estimated_cost: number;
  created_at: string;
}

const Profile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [personalizations, setPersonalizations] = useState<Personalization[]>([]);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    try {
      // Fetch user profile
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user!.id)
        .single();

      if (profileData) {
        setProfile(profileData);
      }

      // Fetch personalizations
      const { data: personalizationsData } = await supabase
        .from('user_personalizations')
        .select('*')
        .eq('user_id', user!.id)
        .order('created_at', { ascending: false });

      if (personalizationsData) {
        setPersonalizations(personalizationsData);
      }

      // Fetch purchases
      const { data: purchasesData } = await supabase
        .from('user_purchases')
        .select('*')
        .eq('user_id', user!.id)
        .order('purchase_date', { ascending: false });

      if (purchasesData) {
        setPurchases(purchasesData);
      }

      // Fetch quotes
      const { data: quotesData } = await supabase
        .from('quotes')
        .select('*')
        .eq('user_id', user!.id)
        .order('created_at', { ascending: false });

      if (quotesData) {
        setQuotes(quotesData);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-400 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading your profile...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-red-400">Personal Information</h2>
                  <Button
                    onClick={() => setEditModalOpen(true)}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                  <div className="flex flex-col items-center mb-6 md:mb-0">
                    <Avatar className="w-32 h-32 mb-4">
                      <AvatarImage src={profile?.avatar_url} />
                      <AvatarFallback className="bg-gray-700 text-2xl">
                        <User className="w-16 h-16 text-gray-400" />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <div className="flex-1 grid md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-red-400" />
                      <div>
                        <p className="text-gray-400 text-sm">Name</p>
                        <p className="text-white font-semibold">{profile?.full_name || 'Not provided'}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-red-400" />
                      <div>
                        <p className="text-gray-400 text-sm">Email</p>
                        <p className="text-white font-semibold">{profile?.email || user?.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-red-400" />
                      <div>
                        <p className="text-gray-400 text-sm">Phone</p>
                        <p className="text-white font-semibold">{profile?.phone || 'Not provided'}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-red-400" />
                      <div>
                        <p className="text-gray-400 text-sm">Location</p>
                        <p className="text-white font-semibold">{profile?.location || 'Not provided'}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 md:col-span-2">
                      <Calendar className="w-5 h-5 text-red-400" />
                      <div>
                        <p className="text-gray-400 text-sm">Member Since</p>
                        <p className="text-white font-semibold">
                          {profile?.created_at ? formatDate(profile.created_at) : 'Recently joined'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quotes History */}
              <div className="mb-8">
                <QuotesHistory quotes={quotes} />
              </div>

              {/* Personalizations History */}
              <div className="bg-gray-800/50 rounded-2xl p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Car className="w-6 h-6 text-red-400 mr-3" />
                  <h2 className="text-2xl font-bold text-red-400">Vehicle Personalizations</h2>
                </div>
                {personalizations.length > 0 ? (
                  <div className="space-y-4">
                    {personalizations.map((personalization) => (
                      <div key={personalization.id} className="bg-gray-700/50 rounded-lg p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold text-white">{personalization.vehicle}</h3>
                            <p className="text-gray-400">{personalization.service}</p>
                            <p className="text-sm text-gray-500">{formatDate(personalization.date)}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-white">{formatPrice(personalization.cost)}</p>
                            <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                              personalization.status === 'completed' ? 'bg-green-600' : 
                              personalization.status === 'pending' ? 'bg-yellow-600' : 'bg-gray-600'
                            } text-white`}>
                              {personalization.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 text-center py-8">No personalizations yet. Start by getting a quote!</p>
                )}
              </div>

              {/* Purchase History */}
              <div className="bg-gray-800/50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <ShoppingBag className="w-6 h-6 text-red-400 mr-3" />
                  <h2 className="text-2xl font-bold text-red-400">Purchase History</h2>
                </div>
                {purchases.length > 0 ? (
                  <div className="space-y-4">
                    {purchases.map((purchase) => (
                      <div key={purchase.id} className="bg-gray-700/50 rounded-lg p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold text-white">{purchase.item_name}</h3>
                            <p className="text-gray-400">Quantity: {purchase.quantity}</p>
                            <p className="text-sm text-gray-500">{formatDate(purchase.purchase_date)}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-white">{formatPrice(purchase.total_cost)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 text-center py-8">No purchases yet. Check out our shop to get started!</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <ProfileEditModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        profile={profile}
        onProfileUpdate={fetchUserData}
      />
      
      <Footer />
    </div>
  );
};

export default Profile;
