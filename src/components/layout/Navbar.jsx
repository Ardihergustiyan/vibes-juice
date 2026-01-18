import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import lumenLogo from '../../assets/lumen_b.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Jika scroll lebih dari 100px baru mulai hide/show
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down - hide navbar
          setIsVisible(false);
        } else {
          // Scrolling up - show navbar
          setIsVisible(true);
        }
      } else {
        // Di bagian atas halaman, selalu tampilkan
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Reservation', href: '/reservation' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`bg-transparent fixed w-full top-0 z-50 transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 cursor-pointer group">
            <img 
              src={lumenLogo}
              alt="Lumen" 
              className="h-32 w-auto transition-opacity group-hover:opacity-75"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-playfair">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-gray-900 text-base font-medium tracking-wide transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm">
          <div className="px-6 pt-6 pb-8 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-gray-600 hover:text-gray-900 px-4 py-4 text-base font-light tracking-wide transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;