
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = {
  '1': {
    title: 'The Ultimate Guide to Ceramic Coating Protection',
    content: `
      <p>Ceramic coating has revolutionized the way we protect our vehicles. This advanced technology provides unparalleled protection against environmental contaminants, UV rays, and everyday wear and tear.</p>
      
      <h2>What is Ceramic Coating?</h2>
      <p>Ceramic coating is a liquid polymer that chemically bonds with your vehicle's factory paint, creating a permanent or semi-permanent layer of protection. Unlike traditional waxes or sealants, ceramic coatings don't wash away or break down over time.</p>
      
      <h2>Benefits of Ceramic Coating</h2>
      <ul>
        <li><strong>Superior Protection:</strong> Guards against UV rays, chemical stains, and etching</li>
        <li><strong>Hydrophobic Properties:</strong> Water beads and rolls off the surface</li>
        <li><strong>Enhanced Gloss:</strong> Provides a deep, mirror-like shine</li>
        <li><strong>Easy Maintenance:</strong> Dirt and grime wash away more easily</li>
        <li><strong>Longevity:</strong> Can last 2-5 years with proper care</li>
      </ul>
      
      <h2>The Application Process</h2>
      <p>Professional ceramic coating application is a meticulous process that requires expertise and proper conditions. Our certified technicians ensure optimal bonding and coverage for maximum protection.</p>
      
      <p>The process typically includes:</p>
      <ol>
        <li>Thorough paint correction and preparation</li>
        <li>Surface decontamination</li>
        <li>Precise application of the ceramic coating</li>
        <li>Curing time and quality inspection</li>
      </ol>
    `,
    image: '/placeholder.svg',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Technology',
    readTime: '5 min read'
  },
  '2': {
    title: 'Paint Protection Film vs Ceramic Coating: Which is Right for You?',
    content: `
      <p>When it comes to protecting your vehicle's paint, two technologies stand out: Paint Protection Film (PPF) and Ceramic Coating. Both offer excellent protection, but they serve different purposes and have unique advantages.</p>
      
      <h2>Paint Protection Film (PPF)</h2>
      <p>PPF is a transparent, thermoplastic urethane film that's applied to painted surfaces. It provides physical protection against:</p>
      <ul>
        <li>Rock chips and stone damage</li>
        <li>Road debris impacts</li>
        <li>Minor scratches and scuffs</li>
        <li>Bug splatter and bird droppings</li>
      </ul>
      
      <h2>Ceramic Coating</h2>
      <p>Ceramic coating creates a chemical bond with the paint, offering protection through:</p>
      <ul>
        <li>Chemical resistance</li>
        <li>UV protection</li>
        <li>Hydrophobic properties</li>
        <li>Enhanced gloss and appearance</li>
      </ul>
      
      <h2>Making the Right Choice</h2>
      <p>The best choice depends on your specific needs, budget, and driving conditions. Many of our clients opt for a combination approach, using PPF on high-impact areas and ceramic coating on the entire vehicle.</p>
    `,
    image: '/placeholder.svg',
    author: 'Mike Chen',
    date: '2024-01-12',
    category: 'Comparison',
    readTime: '8 min read'
  }
};

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Header />
        <div className="pt-20 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-red-400 hover:text-red-300">
            Return to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      <div className="pt-20 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          
          <div className="mb-8">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              {post.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between text-gray-400 mb-8">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-gray-600 hover:border-red-500">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
          
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
          
          <div 
            className="prose prose-invert prose-red max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;
