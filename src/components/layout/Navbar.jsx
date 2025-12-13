import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Menu', href: '/menu' },
    { name: 'Kedai Kode', href: '/kedai' },
    { name: 'Investasi', href: '/investasi' },
    { name: 'Karir', href: '/karir' },
    { name: 'Hubungi Kami', href: '/hubungi' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-md fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
            <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wider text-[#5a6b3f]">
              VibesJuice
            </h1>
            <p className="text-[10px] text-gray-500 tracking-[0.2em] font-medium">
              SINCE 1982
            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-[#5a6b3f] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
            <button className="ml-4 bg-[#5a6b3f] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#4a5b2f] hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Lihat Proposal
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#5a6b3f] p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-gray-700 hover:text-[#5a6b3f] hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button 
              className="w-full bg-[#5a6b3f] text-white px-6 py-3 rounded-full font-medium hover:bg-[#4a5b2f] transition-colors mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Lihat Proposal
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;