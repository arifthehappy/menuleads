import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ValueProposition from './components/ValueProposition';
import FeatureShowcase from './components/FeatureShowcase';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'MenuLeads | Smart Restaurant Technology';
    
    // Add script to track analytics (would be implemented in production)
    const trackPageView = () => {
      console.log('Page view tracked');
      // In production, this would call your analytics service
    };
    
    trackPageView();

    // Implement lazy loading for images
    if ('loading' in HTMLImageElement.prototype) {
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        img.setAttribute('loading', 'lazy');
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <ValueProposition />
        <FeatureShowcase />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;