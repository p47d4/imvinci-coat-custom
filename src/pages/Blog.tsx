
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogHero } from '@/components/blog/BlogHero';

const blogPosts = [
  {
    id: '1',
    title: 'The Ultimate Guide to Ceramic Coating Protection',
    excerpt: 'Discover why ceramic coating is the gold standard for vehicle protection and how it can transform your car\'s appearance and durability.',
    image: '/placeholder.svg',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Technology',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Paint Protection Film vs Ceramic Coating: Which is Right for You?',
    excerpt: 'Compare the benefits and applications of PPF and ceramic coating to make the best choice for your vehicle protection needs.',
    image: '/placeholder.svg',
    author: 'Mike Chen',
    date: '2024-01-12',
    category: 'Comparison',
    readTime: '8 min read'
  },
  {
    id: '3',
    title: 'Maintenance Tips for Coated Vehicles',
    excerpt: 'Learn the essential maintenance practices to keep your ceramic-coated vehicle looking pristine for years to come.',
    image: '/placeholder.svg',
    author: 'David Rodriguez',
    date: '2024-01-10',
    category: 'Maintenance',
    readTime: '6 min read'
  },
  {
    id: '4',
    title: 'The Science Behind Nano-Ceramic Technology',
    excerpt: 'Explore the advanced nanotechnology that makes our ceramic coatings so effective at protecting your investment.',
    image: '/placeholder.svg',
    author: 'Dr. Emma Wilson',
    date: '2024-01-08',
    category: 'Science',
    readTime: '7 min read'
  },
  {
    id: '5',
    title: 'Why Professional Application Matters',
    excerpt: 'Understanding the importance of professional installation and what sets expert application apart from DIY solutions.',
    image: '/placeholder.svg',
    author: 'James Thompson',
    date: '2024-01-05',
    category: 'Professional',
    readTime: '4 min read'
  },
  {
    id: '6',
    title: 'Yacht and Marine Coating Solutions',
    excerpt: 'Discover specialized coating solutions designed for marine environments and yacht protection.',
    image: '/placeholder.svg',
    author: 'Captain Lisa Martinez',
    date: '2024-01-03',
    category: 'Marine',
    readTime: '9 min read'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      <BlogHero />
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
