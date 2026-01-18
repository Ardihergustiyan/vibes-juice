import React, { useState, useEffect, useRef } from 'react';
import { Users, Coffee, Building2, MapPin, Phone, Clock } from 'lucide-react';

const Reservation = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = {};
    
    Object.keys(sectionRefs.current).forEach(key => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.1 }
        );
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  const spaceOptions = [
    {
      icon: Users,
      title: 'VIP Room',
      description: 'Ruang privat yang nyaman untuk gathering kecil, meeting, atau perayaan',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
    },
    {
      icon: Coffee,
      title: 'Reservasi Meja',
      description: 'Pilihan fleksibel untuk berkumpul dalam suasana café yang hangat',
      image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80'
    },
    {
      icon: Building2,
      title: 'Reservasi 1 Lantai',
      description: 'Cocok untuk private event, gathering, atau perayaan khusus',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80'
    }
  ];

  const operationalHours = [
    { day: 'Senin - Kamis', time: '07:00 – 24:00' },
    { day: 'Jumat - Sabtu', time: '07:00 – 01:00' },
    { day: 'Minggu', time: '07:00 – 01:00' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section 
        ref={el => sectionRefs.current['hero'] = el}
        className="pt-40 pb-24 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-6">
              Reserve Your Space
            </h1>
            <div className="w-16 h-px bg-gray-900 mx-auto mb-12"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
              Lumen menyediakan beberapa pilihan ruang yang dapat disesuaikan dengan kebutuhan acara Anda
            </p>
          </div>
        </div>
      </section>

      {/* Space Options */}
      <section 
        ref={el => sectionRefs.current['spaces'] = el}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {spaceOptions.map((space, index) => (
              <div 
                key={index}
                className={`group transition-all duration-1000 ${
                  isVisible.spaces 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-3">
                  {space.title}
                </h3>
                <p className="text-base text-gray-600 font-light leading-relaxed">
                  {space.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={el => sectionRefs.current['contact'] = el}
        className="py-32 px-6 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <div 
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Ready to Reserve?
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Hubungi kami untuk informasi detail reservasi dan ketersediaan ruang
            </p>
          </div>

          <div 
            className={`grid grid-cols-1 md:grid-cols-2 gap-16 transition-all duration-1000 delay-200 ${
              isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Contact */}
            <div className="space-y-12">
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <Phone size={20} strokeWidth={1.5} className="text-gray-900" />
                  <p className="text-sm text-gray-500 font-light uppercase tracking-wide">WhatsApp</p>
                </div>
                <a 
                  href="https://wa.me/6285751396554" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-900 hover:text-gray-600 transition-colors font-light"
                >
                  +62 857-5139-6554
                </a>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin size={20} strokeWidth={1.5} className="text-gray-900" />
                  <p className="text-sm text-gray-500 font-light uppercase tracking-wide">Location</p>
                </div>
                <p className="text-base text-gray-900 font-light leading-relaxed">
                  Jl. Arteri Supadio (Depan BCA Kubu Raya)<br />
                  Sungai Raya, Kab. Kubu Raya<br />
                  Kalimantan Barat
                </p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Clock size={20} strokeWidth={1.5} className="text-gray-900" />
                <p className="text-sm text-gray-500 font-light uppercase tracking-wide">Operating Hours</p>
              </div>
              <div className="space-y-4">
                {operationalHours.map((schedule, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center pb-4 border-b border-gray-300 last:border-0"
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

          {/* WhatsApp Button */}
          <div 
            className={`text-center mt-20 transition-all duration-1000 delay-400 ${
              isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a 
              href="https://wa.me/6285751396554?text=Halo%20Lumen%2C%20saya%20ingin%20reservasi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gray-900 text-white px-12 py-4 rounded-full font-light hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              <Phone size={20} strokeWidth={1.5} />
              <span>Contact via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;