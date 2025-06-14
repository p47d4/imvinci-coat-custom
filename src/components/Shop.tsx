
import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/hooks/useCart';
import { products, categories } from '@/data/products';
import { ProductCard } from '@/components/shop/ProductCard';
import { CategoryFilter } from '@/components/shop/CategoryFilter';
import { CartSummary } from '@/components/shop/CartSummary';

export const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { user } = useAuth();
  const { addToCart, totalItems } = useCart();

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <ShoppingCart className="w-8 h-8 text-red-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Shop <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Products</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional-grade products and accessories to maintain and enhance your vehicle's protection. 
            Everything you need for premium care.
          </p>
        </div>

        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        <CartSummary 
          totalItems={totalItems}
          isVisible={user !== null && totalItems > 0}
        />
      </div>
    </section>
  );
};
