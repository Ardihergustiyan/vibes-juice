import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Facebook, Mail } from 'lucide-react';
import lumenLogo from '../../assets/lumen_w.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const menuLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Reservation', href: '/reservation' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const operationalHours = [
    { day: 'Senin - Kamis', time: '07:00 – 24:00' },
    { day: 'Jumat - Sabtu', time: '07:00 – 01:00' },
    { day: 'Minggu', time: '07:00 – 01:00' },
  ];

  const socialMedia = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-5">
            <Link to="/" className="inline-block group">
              <img 
                src={lumenLogo}
                alt="Lumen" 
                className="h-32 w-auto transition-opacity group-hover:opacity-75"
              />
            </Link>
            <p className="text-base text-white leading-relaxed font-light">
              Experience tranquility and exceptional taste in every visit.
            </p>
            {/* Social Media */}
            <div className="flex space-x-3 pt-2">
              {socialMedia.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-white/5 p-2.5 rounded-full hover:bg-white/10 transition-colors"
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-light text-base mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-base text-white hover:text-white transition-colors font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operational Hours */}
          <div>
            <h4 className="font-light text-base mb-6 tracking-wide">Opening Hours</h4>
            <ul className="space-y-3">
              {operationalHours.map((schedule, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Clock size={16} className="flex-shrink-0 mt-1 text-white" strokeWidth={1.5} />
                  <div className="text-base font-light">
                    <p className="text-gray-300">{schedule.day}</p>
                    <p className="text-white">{schedule.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-light text-base mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-white" strokeWidth={1.5} />
                <span className="text-base text-white font-light leading-relaxed">
                  Jl. Arteri Supadio<br />
                  (Depan BCA Kubu Raya)<br />
                  Sungai Raya, Kab. Kubu Raya<br />
                  Kalimantan Barat
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-gray-400" strokeWidth={1.5} />
                <a 
                  href="https://wa.me/6285751396554" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-400 hover:text-white transition-colors font-light"
                >
                  +62 857-5139-6554
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-base text-gray-500 font-light tracking-wide">
              © {currentYear} Lumen. All rights reserved.
            </p>
            <p className="text-base text-gray-500 font-light">
              Crafted with care for memorable experiences
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;