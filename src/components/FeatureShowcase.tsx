import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, BarChart2, Smartphone, Gamepad2 } from 'lucide-react';

interface TabProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ id, label, icon, isActive, onClick }) => {
  return (
    <button
      className={`flex items-center px-4 py-3 rounded-lg transition-all ${
        isActive 
          ? 'bg-primary-900 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
      onClick={onClick}
      aria-selected={isActive}
      role="tab"
      aria-controls={`panel-${id}`}
      id={`tab-${id}`}
    >
      <span className="mr-2">{icon}</span>
      {label}
    </button>
  );
};

const FeatureShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('menu');

  const tabs = [
    {
      id: 'menu',
      label: 'Digital Menu',
      icon: <BookOpen size={18} />,
      image: 'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Interactive Digital Menu',
      description: 'Our digital menu platform offers a visually stunning, interactive experience that increases order values and streamlines the dining experience.',
      features: [
        'Beautiful food photography',
        'Interactive item customization',
        'Real-time inventory management',
        'Multilingual support',
        'Dietary preference filtering'
      ]
    },
    {
      id: 'ads',
      label: 'Ad Integration',
      icon: <Smartphone size={18} />,
      image: 'https://images.pexels.com/photos/4350099/pexels-photo-4350099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Seamless Ad Integration',
      description: 'Non-intrusive, contextual advertisements that enhance rather than detract from the dining experience.',
      features: [
        'Native ad placements',
        'Contextual targeting',
        'Brand partnership opportunities',
        'Custom promotion creation',
        'A/B testing capabilities'
      ]
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: <BarChart2 size={18} />,
      image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Comprehensive Analytics',
      description: 'Gain valuable insights into customer behavior, menu performance, and advertising effectiveness.',
      features: [
        'Real-time dashboards',
        'Menu item performance metrics',
        'Customer interaction tracking',
        'Ad engagement analytics',
        'Revenue attribution models'
      ]
    },
    {
      id: 'games',
      label: 'Game Mechanics',
      icon: <Gamepad2 size={18} />,
      image: 'https://images.pexels.com/photos/12934357/pexels-photo-12934357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Engaging Game Mechanics',
      description: 'Turn advertising into entertainment with our proprietary game mechanics that reward customer engagement.',
      features: [
        'Interactive mini-games',
        'Points and rewards system',
        'Branded challenges',
        'Instant win opportunities',
        'Loyalty program integration'
      ]
    }
  ];

  const activeContent = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle mx-auto">
            Explore the technology that makes MenuLeads the leading solution for restaurant engagement.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              id={tab.id}
              label={tab.label}
              icon={tab.icon}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>

        {activeContent && (
          <motion.div
            key={activeContent.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            role="tabpanel"
            id={`panel-${activeContent.id}`}
            aria-labelledby={`tab-${activeContent.id}`}
          >
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4">{activeContent.title}</h3>
              <p className="text-gray-600 mb-6">{activeContent.description}</p>
              <ul className="space-y-3">
                {activeContent.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-secondary-400 mr-2 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={activeContent.image} 
                  alt={activeContent.title} 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="px-3 py-1 bg-secondary-400 text-white text-sm font-medium rounded-full">
                    {activeContent.label}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeatureShowcase;