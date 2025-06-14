
import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Ceramic Coating Kit',
    price: 299,
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3',
    description: 'Professional-grade ceramic coating kit for DIY application',
    category: 'Coatings'
  },
  {
    id: 2,
    name: 'Microfiber Cloth Set',
    price: 49,
    image: 'https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-4.0.3',
    description: 'Premium microfiber cloths for perfect application',
    category: 'Accessories'
  },
  {
    id: 3,
    name: 'Paint Protection Film',
    price: 199,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3',
    description: 'Clear protective film for high-impact areas',
    category: 'Protection'
  },
  {
    id: 4,
    name: 'Detail Spray',
    price: 39,
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3',
    description: 'Professional detail spray for maintenance',
    category: 'Maintenance'
  },
  {
    id: 5,
    name: 'Polishing Pads',
    price: 79,
    image: 'https://images.unsplash.com/photo-1559056961-84c8f7c8d9f4?ixlib=rb-4.0.3',
    description: 'High-quality polishing pads for optimal results',
    category: 'Tools'
  },
  {
    id: 6,
    name: 'Glass Coating',
    price: 149,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3',
    description: 'Specialized coating for windows and glass surfaces',
    category: 'Coatings'
  }
];

const categories = ['All', 'Coatings', 'Accessories', 'Protection', 'Maintenance', 'Tools'];

export const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <ShoppingCart className="w-8 h-8 text-blue-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Shop <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Products</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional-grade products and accessories to maintain and enhance your vehicle's protection. 
            Everything you need for premium care.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4 text-sm">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-6 h-6" />
              <span className="font-semibold">{cart.length} items in cart</span>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                View Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
