
import { Product } from '@/types/cart';

export const products: Product[] = [
  {
    id: 1,
    name: 'Ceramic Coating Kit',
    price: 119600,
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3',
    description: 'Professional-grade ceramic coating kit for DIY application',
    category: 'Coatings'
  },
  {
    id: 2,
    name: 'Microfiber Cloth Set',
    price: 19600,
    image: 'https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-4.0.3',
    description: 'Premium microfiber cloths for perfect application',
    category: 'Accessories'
  },
  {
    id: 3,
    name: 'Paint Protection Film',
    price: 79600,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3',
    description: 'Clear protective film for high-impact areas',
    category: 'Protection'
  },
  {
    id: 4,
    name: 'Detail Spray',
    price: 15600,
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3',
    description: 'Professional detail spray for maintenance',
    category: 'Maintenance'
  },
  {
    id: 5,
    name: 'Polishing Pads',
    price: 31600,
    image: 'https://images.unsplash.com/photo-1559056961-84c8f7c8d9f4?ixlib=rb-4.0.3',
    description: 'High-quality polishing pads for optimal results',
    category: 'Tools'
  },
  {
    id: 6,
    name: 'Glass Coating',
    price: 59600,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3',
    description: 'Specialized coating for windows and glass surfaces',
    category: 'Coatings'
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const categories = ['All', 'Coatings', 'Accessories', 'Protection', 'Maintenance', 'Tools'];
