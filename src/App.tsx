import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ValueProposition from './components/ValueProposition';
import FeatureShowcase from './components/FeatureShowcase';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginPage from './pages/restaurant/LoginPage';
import DashboardPage from './pages/restaurant/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={
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
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/restaurant" element={<DashboardPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}

export default App;