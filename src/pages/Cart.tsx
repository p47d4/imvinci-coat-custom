
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Product data (in a real app, this would come from an API)
const products = [
  {
    id: 1,
    name: 'Ceramic Coating Kit',
    price: 119600,
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3'
  },
  {
    id: 2,
    name: 'Microfiber Cloth Set',
    price: 19600,
    image: 'https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-4.0.3'
  },
  {
    id: 3,
    name: 'Paint Protection Film',
    price: 79600,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3'
  },
  {
    id: 4,
    name: 'Detail Spray',
    price: 15600,
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3'
  },
  {
    id: 5,
    name: 'Polishing Pads',
    price: 31600,
    image: 'https://images.unsplash.com/photo-1559056961-84c8f7c8d9f4?ixlib=rb-4.0.3'
  },
  {
    id: 6,
    name: 'Glass Coating',
    price: 59600,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3'
  }
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage and convert to cart items
  useEffect(() => {
    const loadCart = () => {
      try {
        const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
        
        // Count quantity of each product
        const itemCounts = cartData.reduce((acc: Record<number, number>, productId: number) => {
          acc[productId] = (acc[productId] || 0) + 1;
          return acc;
        }, {});

        // Convert to cart items with product details
        const items: CartItem[] = Object.entries(itemCounts).map(([productId, quantity]) => {
          const product = products.find(p => p.id === parseInt(productId));
          if (!product) return null;
          
          return {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity as number,
            image: product.image
          };
        }).filter(Boolean) as CartItem[];

        setCartItems(items);
      } catch {
        setCartItems([]);
      }
    };

    loadCart();

    // Listen for cart updates
    const handleCartUpdate = () => {
      loadCart();
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    window.addEventListener('storage', handleCartUpdate);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
      window.removeEventListener('storage', handleCartUpdate);
    };
  }, []);

  const updateCart = (newCartItems: CartItem[]) => {
    // Convert cart items back to array of product IDs
    const cartData: number[] = [];
    newCartItems.forEach(item => {
      for (let i = 0; i < item.quantity; i++) {
        cartData.push(item.id);
      }
    });
    
    localStorage.setItem('cart', JSON.stringify(cartData));
    setCartItems(newCartItems);
    
    // Trigger custom event to update header
    window.dispatchEvent(new CustomEvent('cartUpdated'));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    updateCart(updatedItems);
  };

  const removeItem = (id: number) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    updateCart(updatedItems);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.075; // 7.5% VAT
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <ShoppingCart className="w-8 h-8 text-red-400 mr-3" />
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Shopping <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Cart</span>
                  </h1>
                </div>
                <p className="text-xl text-gray-400">Review your items before checkout</p>
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingCart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-400 mb-4">Your cart is empty</h2>
                  <p className="text-gray-500 mb-8">Add some products to get started</p>
                  <Link
                    to="/shop"
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    Continue Shopping
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Cart Items */}
                  <div className="lg:col-span-2">
                    <div className="bg-gray-800/50 rounded-2xl p-6">
                      <h2 className="text-2xl font-bold mb-6 text-red-400">Cart Items</h2>
                      <div className="space-y-6">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center space-x-4 bg-gray-700/30 rounded-lg p-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold text-white">{item.name}</h3>
                              <p className="text-gray-400">{formatPrice(item.price)}</p>
                            </div>
                            <div className="flex items-center space-x-3">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:bg-gray-600 rounded-full transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-8 text-center font-semibold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:bg-gray-600 rounded-full transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-white">{formatPrice(item.price * item.quantity)}</p>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-2 hover:bg-red-600 rounded-full transition-colors text-red-400 hover:text-white"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="lg:col-span-1">
                    <div className="bg-gray-800/50 rounded-2xl p-6 sticky top-24">
                      <h2 className="text-2xl font-bold mb-6 text-red-400">Order Summary</h2>
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Subtotal</span>
                          <span className="text-white font-semibold">{formatPrice(subtotal)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">VAT (7.5%)</span>
                          <span className="text-white font-semibold">{formatPrice(tax)}</span>
                        </div>
                        <div className="border-t border-gray-700 pt-4">
                          <div className="flex justify-between">
                            <span className="text-lg font-bold">Total</span>
                            <span className="text-lg font-bold text-white">{formatPrice(total)}</span>
                          </div>
                        </div>
                      </div>
                      <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 mb-4">
                        Proceed to Checkout
                      </button>
                      <Link
                        to="/shop"
                        className="w-full bg-gray-700 hover:bg-gray-600 py-3 rounded-full font-semibold transition-colors text-center block"
                      >
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
