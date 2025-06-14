
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { getProductById } from '@/data/products';
import { calculateSubtotal, calculateTax, calculateTotal } from '@/utils/pricing';
import { CartItemRow } from '@/components/cart/CartItemRow';
import { OrderSummary } from '@/components/cart/OrderSummary';
import { EmptyCart } from '@/components/cart/EmptyCart';

const Cart = () => {
  const { cartItems, loading, updateQuantity, removeFromCart } = useCart();

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-400 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading cart...</p>
          </div>
        </div>
      </div>
    );
  }

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

              {cartItemsWithDetails.length === 0 ? (
                <EmptyCart />
              ) : (
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="bg-gray-800/50 rounded-2xl p-6">
                      <h2 className="text-2xl font-bold mb-6 text-red-400">Cart Items</h2>
                      <div className="space-y-6">
                        {cartItemsWithDetails.map((item) => (
                          <CartItemRow
                            key={item!.id}
                            item={item!}
                            onUpdateQuantity={updateQuantity}
                            onRemove={removeFromCart}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <OrderSummary 
                      subtotal={subtotal}
                      tax={tax}
                      total={total}
                    />
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
