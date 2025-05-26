import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tablet, Coins, Users } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isInView: boolean;
  delay: number;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon, isInView, delay }) => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      <div className="flex flex-col items-center text-center max-w-xs mx-auto">
        <div className="w-16 h-16 rounded-full bg-primary-900 text-white flex items-center justify-center font-bold text-2xl mb-6 z-10">
          {number}
        </div>
        <div className="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.25,
  });

  const steps = [
    {
      number: 1,
      title: "Install Digital Menus",
      description: "We provide tablets with our proprietary menu software, custom-branded for your restaurant.",
      icon: <Tablet size={32} className="text-primary-900" />,
      delay: 0.2,
    },
    {
      number: 2,
      title: "Activate Ad Platform",
      description: "Connect with brand partners and start displaying targeted, gamified advertisements.",
      icon: <Coins size={32} className="text-primary-900" />,
      delay: 0.4,
    },
    {
      number: 3,
      title: "Engage Customers",
      description: "Customers interact with menus and ads, playing games to win rewards and discounts.",
      icon: <Users size={32} className="text-primary-900" />,
      delay: 0.6,
    },
  ];

  return (
    <section id="how-it-works" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle mx-auto">
            Our three-step process makes it easy to implement and start seeing results quickly.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Connecting line */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-primary-200 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <Step
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isInView={inView}
                delay={step.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;