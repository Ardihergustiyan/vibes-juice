import React, { useState, useEffect, useRef } from 'react';
import { Coffee, Users, Briefcase, Gift } from 'lucide-react';

const About = () => {
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

  const moments = [
    {
      icon: Coffee,
      title: 'Daily Escape',
      description: 'Your comfort zone for coffee and conversations'
    },
    {
      icon: Briefcase,
      title: 'Work & Create',
      description: 'Inspiring space for productivity'
    },
    {
      icon: Users,
      title: 'Gather & Connect',
      description: 'Perfect for meetings and gatherings'
    },
    {
      icon: Gift,
      title: 'Celebrate',
      description: 'Birthday parties and weddings'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
              About Lumen
            </h1>
            <div className="w-16 h-px bg-gray-900 mx-auto mb-12"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
              Lumen hadir di Kubu Raya, Kalimantan Barat, sebagai coffee shop yang menemani berbagai momen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section 
        ref={el => sectionRefs.current['image'] = el}
        className="py-12 px-6"
      >
        <div 
          className={`max-w-6xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible.image ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="aspect-[16/9] bg-gray-100 rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1600&q=80"
              alt="Lumen Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Description */}
      <section 
        ref={el => sectionRefs.current['desc'] = el}
        className="py-24 px-6"
      >
        <div 
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible.desc ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            Dengan ruang tiga lantai yang nyaman dan beragam menu pilihan, Lumen menjadi tempat untuk bertemu, berbagi cerita, bekerja, hingga merayakan momen spesial.
          </p>
        </div>
      </section>

      {/* Moments Grid */}
      <section 
        ref={el => sectionRefs.current['moments'] = el}
        className="py-32 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {moments.map((moment, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-1000 ${
                  isVisible.moments 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <moment.icon size={32} strokeWidth={1} className="text-gray-900 mx-auto mb-4" />
                <h3 className="text-base font-light text-gray-900 mb-2">
                  {moment.title}
                </h3>
                <p className="text-sm text-gray-500 font-light">
                  {moment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Floors */}
      <section 
        ref={el => sectionRefs.current['floors'] = el}
        className="py-32 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className={`text-4xl md:text-5xl font-light text-center text-gray-900 mb-20 transition-all duration-1000 ${
              isVisible.floors ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Three Floors of Comfort
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80',
              'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
              'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80'
            ].map((img, index) => (
              <div 
                key={index}
                className={`aspect-[3/4] rounded-3xl overflow-hidden group transition-all duration-1000 ${
                  isVisible.floors 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative w-full h-full">
                  <img 
                    src={img}
                    alt={`Floor ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end p-8">
                    <p className="text-6xl font-light text-white mb-2">{index + 1}</p>
                    <p className="text-white/90 font-light">Floor {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default About;