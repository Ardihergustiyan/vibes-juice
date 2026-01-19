import React, { useState, useEffect, useRef } from 'react';
import lumenHome1 from '../../assets/home/home1.JPG';
import lumenHome2 from '../../assets/home/home2.JPG';
import lumenHome3 from '../../assets/home/home3.JPG';
import lumenHome4 from '../../assets/home/home4.JPG';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Array gambar untuk background
  const backgroundImages = [
    lumenHome1, 
    lumenHome2, 
    lumenHome3, 
    lumenHome4,
    lumenHome1, 
    lumenHome2, 
    lumenHome3, 
    lumenHome4,
    lumenHome1, 
    lumenHome2, 
    lumenHome3, 
    lumenHome4
  ];

  return (
    <div ref={sectionRef} className="w-full relative overflow-hidden py-32 lg:py-40">
      {/* Netflix-style Background Grid */}
      <div className="absolute inset-0 -rotate-12 scale-150">
        <div className="grid grid-cols-6 gap-3 h-full">
          {backgroundImages.map((img, index) => (
            <div 
              key={index}
              className="relative h-full overflow-hidden"
            >
              <img 
                src={img}
                alt=""
                className="w-full h-full object-cover opacity-30"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/40 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-gray-900/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 
          className={`text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 transition-all duration-[1500ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          A Space for<br />Your Moments
        </h2>

        <div 
          className={`w-16 h-px bg-gray-900 mx-auto mb-8 transition-all duration-[1500ms] delay-200 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        ></div>

        <p 
          className={`text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-12 transition-all duration-[1500ms] delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Whether it's morning coffee, an afternoon escape, or evening conversations—Lumen is here to hold your quiet moments and warm gatherings
        </p>
      </div>

    </div>
  );
};

export default CTASection;