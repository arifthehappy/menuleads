import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thanks for your interest! A member of our team will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Get Started Today</h2>
          <p className="section-subtitle mx-auto">
            Book a demo or contact our team to learn how MenuLeads can transform your restaurant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="card">
            <h3 className="text-2xl font-bold mb-6">Book a Demo</h3>
            <p className="text-gray-600 mb-8">
              Fill out the form below and one of our specialists will get back to you within 24 hours to schedule your personalized demo.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Restaurant/Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Book Your Demo
              </button>
            </form>
          </div>

          <div className="flex flex-col">
            <div className="card mb-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail size={20} className="text-primary-900 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:info@menuleads.com" className="text-primary-700 hover:text-primary-900">
                      info@menuleads.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone size={20} className="text-primary-900 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a href="tel:+18005551234" className="text-primary-700 hover:text-primary-900">
                      +1 (800) 555-1234
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin size={20} className="text-primary-900 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <p className="text-gray-600">
                      123 Tech Avenue, Suite 300<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock size={20} className="text-primary-900 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-600">
                      Monday - Friday: 9am - 6pm PST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card bg-primary-900 text-white flex-grow">
              <h3 className="text-xl font-bold mb-4">Why Choose MenuLeads?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-secondary-400 mr-2">✓</span>
                  Increase revenue through digital menus and ad partnerships
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-400 mr-2">✓</span>
                  Enhance customer experience with interactive elements
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-400 mr-2">✓</span>
                  No upfront hardware costs
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-400 mr-2">✓</span>
                  Full onboarding and training included
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-400 mr-2">✓</span>
                  Dedicated account manager for ongoing support
                </li>
              </ul>

              <div className="mt-8 p-4 bg-primary-800 rounded-lg">
                <p className="font-medium mb-2">Ready to see MenuLeads in action?</p>
                <a href="#" className="btn btn-secondary w-full">Schedule Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;