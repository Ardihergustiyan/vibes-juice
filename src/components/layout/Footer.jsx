import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    tentang: [
      { name: 'Tentang Kami', href: '#tentang' },
      { name: 'Menu', href: '#menu' },
      { name: 'Kedai Kode', href: '#kedai' },
      { name: 'Karir', href: '#karir' },
    ],
    layanan: [
      { name: 'Investasi', href: '#investasi' },
      { name: 'Waralaba', href: '#waralaba' },
      { name: 'Kemitraan', href: '#kemitraan' },
      { name: 'Proposal', href: '#proposal' },
    ],
    legal: [
      { name: 'Syarat & Ketentuan', href: '#syarat' },
      { name: 'Kebijakan Privasi', href: '#privasi' },
      { name: 'FAQ', href: '#faq' },
    ],
  };

  const socialMedia = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-[#5a6b3f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-serif font-bold tracking-wider mb-1">VibesJuice</h3>
              <p className="text-xs text-gray-300 tracking-widest">SINCE 1982</p>
            </div>
            <p className="text-sm text-gray-200 leading-relaxed">
              Menyajikan kesegaran alami dengan kualitas terbaik untuk gaya hidup sehat Anda.
            </p>
            {/* Social Media */}
            <div className="flex space-x-4 pt-2">
              {socialMedia.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Tentang Kami */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Tentang Kami</h4>
            <ul className="space-y-2">
              {footerLinks.tentang.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-200 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Layanan</h4>
            <ul className="space-y-2">
              {footerLinks.layanan.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-200 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-200">
                  Jl. Contoh No. 123<br />
                  Jakarta Selatan, 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+6281234567890" className="text-sm text-gray-200 hover:text-white transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@juskode.com" className="text-sm text-gray-200 hover:text-white transition-colors">
                  info@juskode.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300 text-center md:text-left">
              © {currentYear} Jus Kode. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {footerLinks.legal.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="text-gray-400">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;