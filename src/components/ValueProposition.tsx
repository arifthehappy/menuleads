import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Utensils, Target, Award } from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  isInView: boolean;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon, delay, isInView }) => {
  return (
    <motion.div
      className="card hover:shadow-xl hover:-translate-y-1"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="feature-icon">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <ul className="mt-4 space-y-2 text-gray-600">
        {title === "For Restaurants" && (
          <>
            <li className="flex items-start">
              <span className="text-secondary-400 mr-2">✓</span>
              Increase average order value by 15%
            </li>
            <li className="flex items-start">
              <span className="text-secondary-400 mr-2">✓</span>
              New revenue from ad placements
            </li>
            <li className="flex items-start">
              <span className="text-secondary-400 mr-2">✓</span>
              Reduce operational costs
            </li>
          </>
        )}
        {title === "For Brand Partners" && (
          <>
            <li className="flex items-start">
              <span className="text-secondary-400 mr-2">✓</span>
              Targeted exposure to dining consumers
            </li>
            <li className="flex items-start">
              <span className="text-secondary-400 mr-2">✓</span>
              30% higher engagement than traditional ads
            </li>
            <li className="flex items-start">
              <span className="text-secondary-400 mr-2">✓</span>
              Detailed analytics and attribution
            </li>
          </>
        )}
        {title === "For Customers" && (
          <>
            <li className="flex items-start">
              <span className="text-secondary-400 mr-2">✓</span>
              Win rewards and discounts through games
            </li>
            <li className="flex items-start">
              <span className="text-secondary-400 mr-2">✓</span>
              Enhanced dining experience
            </li>
            <li className="flex items-start">
              <span className="text-secondary-400 mr-2">✓</span>
              Personalized recommendations
            </li>
          </>
        )}
      </ul>
    </motion.div>
  );
};

const ValueProposition: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const valueProps = [
    {
      title: "For Restaurants",
      description: "Boost your revenue with digital menus that increase order size and generate ad income.",
      icon: <Utensils size={24} />,
      delay: 0.2,
    },
    {
      title: "For Brand Partners",
      description: "Connect with engaged diners through interactive ads with impressive conversion rates.",
      icon: <Target size={24} />,
      delay: 0.4,
    },
    {
      title: "For Customers",
      description: "Enjoy an enhanced dining experience with interactive elements and chances to win rewards.",
      icon: <Award size={24} />,
      delay: 0.6,
    },
  ];

  return (
    <section id="features" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Value for Everyone</h2>
          <p className="section-subtitle mx-auto">
            Our platform creates a win-win-win scenario for restaurants, brands, and customers.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <ValueCard
              key={index}
              title={prop.title}
              description={prop.description}
              icon={prop.icon}
              delay={prop.delay}
              isInView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;