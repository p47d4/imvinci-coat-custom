
import React from 'react';

export const BlogHero = () => {
  return (
    <div className="pt-20 py-20 bg-gradient-to-r from-red-900/20 to-gray-900/40">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Imvinci <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Blog</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Stay updated with the latest insights, tips, and innovations in automotive and marine coating technology. 
          Learn from industry experts and discover how to protect your valuable investments.
        </p>
      </div>
    </div>
  );
};
