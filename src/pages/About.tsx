
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                  About Imvinci Ltd
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Pioneering the future of protective coating technologies for vehicles and vessels worldwide.
              </p>

              <div className="grid md:grid-cols-2 gap-12 text-left">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-red-400">Our Mission</h2>
                  <p className="text-gray-300 leading-relaxed">
                    At Imvinci Ltd, we're dedicated to developing next-generation coating technologies that provide 
                    unparalleled protection for automotive, marine, and aviation industries. Our advanced formulations 
                    combine cutting-edge science with practical application to deliver superior results.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-6 text-red-400">Our Vision</h2>
                  <p className="text-gray-300 leading-relaxed">
                    To become the global leader in protective coating solutions, setting new standards for 
                    durability, performance, and environmental responsibility. We envision a world where every 
                    vehicle and vessel is protected by our innovative coating technologies.
                  </p>
                </div>
              </div>

              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-8 text-red-400">Why Choose Imvinci?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Advanced Technology</h3>
                    <p className="text-gray-300">
                      Our research team continuously develops breakthrough formulations using the latest 
                      nanotechnology and polymer science.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
                    <p className="text-gray-300">
                      Years of testing and real-world applications have proven our coatings deliver 
                      exceptional protection and longevity.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
                    <p className="text-gray-300">
                      Our team of coating specialists provides comprehensive support from application 
                      guidance to maintenance recommendations.
                    </p>
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

export default About;
