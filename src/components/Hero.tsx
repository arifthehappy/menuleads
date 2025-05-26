import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left column - Content */}
          <motion.div 
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6">
              Smart Menus. <br />
              <span className="text-secondary-400">Gamified Ads.</span> <br />
              Real Engagement.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Transform your restaurant's digital experience with MenuLeads. 
              Our interactive menu platform combines powerful ordering technology 
              with gamified advertising to boost revenue and enhance customer engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn btn-primary">
                Book a Demo
              </a>
              <a href="#how-it-works" className="btn btn-outline group">
                See How It Works
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right column - Interactive mockup */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-200/30 to-secondary-200/30 rounded-3xl blur-xl"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-xl overflow-hidden animate-float">
                <img 
                  src="https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="MenuLeads tablet interface" 
                  className="w-full h-auto rounded-2xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-white font-inter font-medium mb-2">Restaurant Name</p>
                    <div className="flex space-x-3 mb-4">
                      {['Appetizers', 'Mains', 'Desserts', 'Drinks'].map((category) => (
                        <span 
                          key={category}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <button className="px-4 py-2 bg-secondary-400 text-white rounded-lg font-medium">
                        Order Now
                      </button>
                      <button className="px-4 py-2 bg-primary-900 text-white rounded-lg font-medium">
                        Play & Win
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;