import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X } from 'lucide-react';

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  missingFeatures?: string[];
  isPopular?: boolean;
  ctaText: string;
  delay: number;
  isInView: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  description,
  features,
  missingFeatures = [],
  isPopular = false,
  ctaText,
  delay,
  isInView
}) => {
  return (
    <motion.div
      className={`card flex flex-col h-full ${
        isPopular 
          ? 'border-2 border-secondary-400 relative' 
          : ''
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-secondary-400 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500">/month</span>}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="mb-8 flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={18} className="text-success-500 mr-2 mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
          {missingFeatures.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-400">
              <X size={18} className="text-gray-400 mr-2 mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <a 
        href="#contact" 
        className={`btn ${isPopular ? 'btn-secondary' : 'btn-outline'} w-full mt-auto`}
      >
        {ctaText}
      </a>
    </motion.div>
  );
};

const Pricing: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const tiers = [
    {
      title: "Starter",
      price: "$299",
      description: "Perfect for small restaurants looking to upgrade their menu experience.",
      features: [
        "5 Digital menu tablets",
        "Basic menu customization",
        "Monthly menu updates",
        "Email support",
        "Basic analytics"
      ],
      missingFeatures: [
        "Gamified ad platform",
        "Premium support",
        "Advanced analytics"
      ],
      ctaText: "Get Started",
      delay: 0.2,
      isPopular: false
    },
    {
      title: "Professional",
      price: "$499",
      description: "Ideal for restaurants ready to leverage both menus and advertising.",
      features: [
        "10 Digital menu tablets",
        "Advanced menu customization",
        "Unlimited menu updates",
        "Gamified ad platform",
        "Revenue sharing from ads",
        "Priority email & phone support",
        "Advanced analytics dashboard"
      ],
      ctaText: "Book Demo",
      delay: 0.3,
      isPopular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for restaurant chains and large operations.",
      features: [
        "Unlimited digital menu tablets",
        "Full white-labeling options",
        "Custom integration with POS",
        "Premium ad platform",
        "Maximum revenue sharing",
        "24/7 dedicated support",
        "Custom reporting & analytics",
        "Onsite training & setup"
      ],
      ctaText: "Contact Sales",
      delay: 0.4,
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle mx-auto">
            Choose the plan that's right for your restaurant, with no hidden fees.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              missingFeatures={tier.missingFeatures}
              isPopular={tier.isPopular}
              ctaText={tier.ctaText}
              delay={tier.delay}
              isInView={inView}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-primary-50 px-6 py-3 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12L11 14L15 10" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-primary-900 font-medium">30-day money-back guarantee on all plans</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;