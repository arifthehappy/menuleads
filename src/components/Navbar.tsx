import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TabletSmartphone } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };

    window.addEventListener('scroll', handleScroll);
    checkAuth();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center text-primary-900">
            <TabletSmartphone size={32} className="mr-2" />
            <span className="font-inter font-bold text-xl">MenuLeads</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              <li>
                <a 
                  href="#features" 
                  className="font-inter text-gray-700 hover:text-primary-900 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="font-inter text-gray-700 hover:text-primary-900 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  className="font-inter text-gray-700 hover:text-primary-900 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="font-inter text-gray-700 hover:text-primary-900 transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
            {isLoggedIn ? (
              <Link to="/admin/restaurant" className="btn btn-primary">
                Dashboard
              </Link>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-screen opacity-100 py-5' 
              : 'max-h-0 opacity-0 py-0 overflow-hidden'
          }`}
        >
          <ul className="flex flex-col space-y-4">
            <li>
              <a 
                href="#features" 
                className="block font-inter text-gray-700 hover:text-primary-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#how-it-works" 
                className="block font-inter text-gray-700 hover:text-primary-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
            </li>
            <li>
              <a 
                href="#pricing" 
                className="block font-inter text-gray-700 hover:text-primary-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
            </li>
            <li>
              <a 
                href="#testimonials" 
                className="block font-inter text-gray-700 hover:text-primary-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
            </li>
            <li>
              {isLoggedIn ? (
                <Link
                  to="/admin/restaurant"
                  className="inline-block btn btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="inline-block btn btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;