import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const operationalHours = [
    { day: 'Senin', time: '07:00 – 24:00' },
    { day: 'Selasa', time: '07:00 – 24:00' },
    { day: 'Rabu', time: '07:00 – 24:00' },
    { day: 'Kamis', time: '07:00 – 24:00' },
    { day: 'Jumat', time: '07:00 – 01:00' },
    { day: 'Sabtu', time: '07:00 – 01:00' },
    { day: 'Minggu', time: '07:00 – 01:00' },
  ];

  const socialMedia = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 mb-8">
            Get in Touch
          </h1>
          <div className="w-20 h-px bg-gray-300 mx-auto mb-12"></div>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column - Contact Details */}
            <div className="space-y-12">
              {/* WhatsApp */}
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                  <Phone size={22} strokeWidth={1.5} className="text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-light mb-3 tracking-wide">WhatsApp</p>
                  <a 
                    href="https://wa.me/6285751396554" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-gray-900 hover:text-gray-600 transition-colors font-light block mb-2"
                  >
                    +62 857-5139-6554
                  </a>
                  <p className="text-base text-gray-500 font-light">Lumen</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                  <MapPin size={22} strokeWidth={1.5} className="text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-light mb-3 tracking-wide">Location</p>
                  <p className="text-base text-gray-900 font-light leading-relaxed">
                    Jl. Arteri Supadio<br />
                    (Depan BCA Kubu Raya)<br />
                    Sungai Raya<br />
                    Kabupaten Kubu Raya<br />
                    Kalimantan Barat
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                  <Instagram size={22} strokeWidth={1.5} className="text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-light mb-3 tracking-wide">Follow Us</p>
                  <div className="flex space-x-4">
                    {socialMedia.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <social.icon size={24} strokeWidth={1.5} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Operating Hours */}
            <div>
              <div className="flex items-start space-x-5 mb-8">
                <div className="flex-shrink-0 w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                  <Clock size={22} strokeWidth={1.5} className="text-gray-700" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 font-light mb-6 tracking-wide">Operating Hours</p>
                  <div className="space-y-4">
                    {operationalHours.map((schedule, index) => (
                      <div 
                        key={index}
                        className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-0"
                      >
                        <span className="text-base text-gray-900 font-light">
                          {schedule.day}
                        </span>
                        <span className="text-base text-gray-600 font-light">
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA Button */}
          <div className="text-center mt-20">
            <a 
              href="https://wa.me/6285751396554?text=Halo%20Lumen%2C%20saya%20ingin%20bertanya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gray-900 text-white px-12 py-5 rounded-full font-light text-lg tracking-wide hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
            >
              <Phone size={22} strokeWidth={1.5} />
              <span>Contact via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6657773927716!2d109.36697597475955!3d-0.08503969994437168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d5b0068fce3bd%3A0xbfe93641d5c9710d!2sLumen%20Coffee%20%26%20Chill!5e0!3m2!1sid!2sid!4v1737180000000!5m2!1sid!2sid"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lumen Coffee & Chill Location"
              className="grayscale"
            ></iframe>
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/place/Lumen+Coffee+%26+Chill/@-0.0850773,109.3691759,463m/data=!3m1!1e3!4m6!3m5!1s0x2e1d5b0068fce3bd:0xbfe93641d5c9710d!8m2!3d-0.0850397!4d109.369224!16s%2Fg%2F11w39nx79y?hl=id-ID&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors font-light"
            >
              <MapPin size={18} strokeWidth={1.5} />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;