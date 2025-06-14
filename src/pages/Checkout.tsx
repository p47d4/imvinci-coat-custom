import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ShoppingCart, CreditCard, MapPin, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { getProductById } from '@/data/products';
import { formatPrice, calculateSubtotal, calculateTax, calculateTotal } from '@/utils/pricing';

interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  paymentMethod: string;
}

const Checkout = () => {
  const { cartItems, loading, clearCart } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();
  const [processing, setProcessing] = useState(false);
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: '',
    lastName: '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'card'
  });

  const cartItemsWithDetails = cartItems.map(cartItem => {
    const product = getProductById(cartItem.product_id);
    return product ? { ...cartItem, product } : null;
  }).filter(Boolean);

  const subtotal = calculateSubtotal(
    cartItemsWithDetails.map(item => ({
      price: item!.product.price,
      quantity: item!.quantity
    }))
  );
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal, tax);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setProcessing(true);

    try {
      const purchaseItems = cartItemsWithDetails.map(item => ({
        user_id: user.id,
        item_name: item!.product.name,
        quantity: item!.quantity,
        unit_price: item!.product.price,
        total_cost: item!.product.price * item!.quantity
      }));

      const { error } = await supabase
        .from('user_purchases')
        .insert(purchaseItems);

      if (error) throw error;

      await clearCart();

      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase. You will receive a confirmation email shortly.",
      });

      window.location.href = '/shop';

    } catch (error) {
      console.error('Error processing order:', error);
      toast({
        title: "Error",
        description: "Failed to process your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-400 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading checkout...</p>
          </div>
        </div>
      </div>
    );
  }

  if (cartItemsWithDetails.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Header />
        <div className="pt-20">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <ShoppingCart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-gray-400 mb-4">Your cart is empty</h1>
                <p className="text-gray-500 mb-8">Add some products before proceeding to checkout</p>
                <Link
                  to="/shop"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </section>
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
                  <CreditCard className="w-8 h-8 text-red-400 mr-3" />
                  <h1 className="text-4xl md:text-5xl font-bold">
                    <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Checkout</span>
                  </h1>
                </div>
                <p className="text-xl text-gray-400">Complete your purchase</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Checkout Form */}
                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Contact Information */}
                    <div className="bg-gray-800/50 rounded-2xl p-6">
                      <h2 className="text-2xl font-bold mb-6 text-red-400 flex items-center gap-2">
                        <User className="w-6 h-6" />
                        Contact Information
                      </h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="bg-gray-800/50 rounded-2xl p-6">
                      <h2 className="text-2xl font-bold mb-6 text-red-400 flex items-center gap-2">
                        <MapPin className="w-6 h-6" />
                        Shipping Address
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">City</label>
                            <input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">State</label>
                            <input
                              type="text"
                              name="state"
                              value={formData.state}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">ZIP Code</label>
                            <input
                              type="text"
                              name="zipCode"
                              value={formData.zipCode}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="bg-gray-800/50 rounded-2xl p-6">
                      <h2 className="text-2xl font-bold mb-6 text-red-400 flex items-center gap-2">
                        <CreditCard className="w-6 h-6" />
                        Payment Method
                      </h2>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            id="card"
                            name="paymentMethod"
                            value="card"
                            checked={formData.paymentMethod === 'card'}
                            onChange={handleInputChange}
                            className="text-red-600 focus:ring-red-500"
                          />
                          <label htmlFor="card" className="text-gray-300">Credit/Debit Card</label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            id="bank"
                            name="paymentMethod"
                            value="bank"
                            checked={formData.paymentMethod === 'bank'}
                            onChange={handleInputChange}
                            className="text-red-600 focus:ring-red-500"
                          />
                          <label htmlFor="bank" className="text-gray-300">Bank Transfer</label>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={processing}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {processing ? 'Processing...' : `Place Order - ${formatPrice(total)}`}
                    </button>
                  </form>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-800/50 rounded-2xl p-6 sticky top-24">
                    <h2 className="text-2xl font-bold mb-6 text-red-400">Order Summary</h2>
                    <div className="space-y-4 mb-6">
                      {cartItemsWithDetails.map((item) => (
                        <div key={item!.id} className="flex items-center space-x-3">
                          <img
                            src={item!.product.image}
                            alt={item!.product.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-white">{item!.product.name}</h4>
                            <p className="text-xs text-gray-400">Qty: {item!.quantity}</p>
                          </div>
                          <span className="text-sm font-semibold text-white">
                            {formatPrice(item!.product.price * item!.quantity)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Subtotal</span>
                        <span className="text-white">{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">VAT (7.5%)</span>
                        <span className="text-white">{formatPrice(tax)}</span>
                      </div>
                      <div className="border-t border-gray-700 pt-2">
                        <div className="flex justify-between">
                          <span className="font-bold">Total</span>
                          <span className="font-bold text-white">{formatPrice(total)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Checkout;
