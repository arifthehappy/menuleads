import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send, TabletSmartphone } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <TabletSmartphone size={32} className="mr-2" />
              <span className="font-inter font-bold text-xl">MenuLeads</span>
            </div>
            <p className="text-primary-100 mb-6">
              Transforming restaurant experiences with smart menus and gamified advertising that drives engagement and revenue.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">Press</a>
              </li>
              <li>
                <a href="#contact" className="text-primary-100 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">Webinars</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">Partner Program</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-primary-100 mb-4">
              Get the latest updates, news and product offers sent directly to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="px-4 py-3 rounded-l-lg text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-secondary-400"
                />
                <button
                  type="submit"
                  className="bg-secondary-400 hover:bg-secondary-500 px-4 rounded-r-lg flex items-center justify-center transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
            <p className="text-sm text-primary-200">
              By subscribing you agree to our Privacy Policy.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-300 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} MenuLeads. All rights reserved.
            </p>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-primary-300 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-300 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-300 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;