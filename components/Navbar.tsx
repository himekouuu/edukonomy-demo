import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  onStartChat: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onStartChat }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Placeholder */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img 
              src="assets/images/edukonomy_logo.svg" 
              alt="Edukonomy Logo" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-navy-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="bg-white text-navy-800 border-2 border-navy-800 px-6 py-2.5 rounded-xl font-semibold hover:bg-navy-50 transition-all transform hover:-translate-y-0.5">
              Đăng nhập
            </button>
            <button 
              onClick={onStartChat}
              className="bg-gradient-to-r from-navy-800 to-navy-900 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all transform hover:-translate-y-0.5"
            >
              Thử Miễn Phí
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy-900 hover:text-blue-600 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-gray-100 shadow-xl animate-slide-down">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-4 text-base font-medium text-gray-700 hover:text-navy-600 hover:bg-navy-50 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-3 px-2">
              <button className="w-full text-center bg-white text-navy-800 border-2 border-navy-800 px-6 py-3 rounded-xl font-bold">
                Đăng nhập
              </button>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onStartChat();
                }}
                className="w-full text-center bg-gradient-to-r from-navy-800 to-navy-900 text-white px-6 py-3 rounded-xl font-bold shadow-lg"
              >
                Thử Miễn Phí
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;