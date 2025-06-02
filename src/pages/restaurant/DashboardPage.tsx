import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, Home, Book, Users, ShoppingCart } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import MenuManagement from '../../components/restaurant/MenuManagement';

const DashboardPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('menu');
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/login');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const navigation = [
    { name: 'Dashboard', icon: Home, id: 'dashboard' },
    { name: 'Menu', icon: Book, id: 'menu' },
    { name: 'Customers', icon: Users, id: 'customers' },
    { name: 'Orders', icon: ShoppingCart, id: 'orders' },
  ];

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar for mobile */}
      <div className={`fixed inset-0 flex z-40 md:hidden ${isSidebarOpen ? '' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsSidebarOpen(false)}></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-primary-900">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          {/* Sidebar content */}
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <span className="text-white text-xl font-bold">MenuLeads</span>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md w-full ${
                    activeSection === item.id
                      ? 'bg-primary-800 text-white'
                      : 'text-primary-100 hover:bg-primary-800'
                  }`}
                >
                  <item.icon className="mr-4 h-6 w-6" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-primary-800 p-4">
            <button
              onClick={handleLogout}
              className="flex items-center text-primary-100 hover:text-white"
            >
              <LogOut className="h-6 w-6 mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-primary-900">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <span className="text-white text-xl font-bold">MenuLeads</span>
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full ${
                      activeSection === item.id
                        ? 'bg-primary-800 text-white'
                        : 'text-primary-100 hover:bg-primary-800'
                    }`}
                  >
                    <item.icon className="mr-3 h-6 w-6" />
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-primary-800 p-4">
              <button
                onClick={handleLogout}
                className="flex items-center text-primary-100 hover:text-white"
              >
                <LogOut className="h-6 w-6 mr-3" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            className="h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {activeSection === 'menu' && <MenuManagement />}
              {activeSection === 'dashboard' && <h1>Dashboard Content</h1>}
              {activeSection === 'customers' && <h1>Customers Content</h1>}
              {activeSection === 'orders' && <h1>Orders Content</h1>}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;