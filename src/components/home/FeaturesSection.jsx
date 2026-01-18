import React, { useState, useEffect, useRef } from 'react';

const FeaturesSection = () => {
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

  return (
    <div ref={sectionRef} className="w-full bg-white py-32 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Simple Text Block */}
        <div className="text-center max-w-3xl mx-auto space-y-12">
          <h2 
            className={`text-4xl md:text-5xl font-light leading-tight text-gray-900 transition-all duration-[1500ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            A coffee shop in Kubu Raya with three floors of space for your moments
          </h2>
          
          <div 
            className={`w-16 h-px bg-gray-300 mx-auto transition-all duration-[1500ms] delay-300 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          ></div>
          
          <p 
            className={`text-xl text-gray-600 font-light leading-relaxed transition-all duration-[1500ms] delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Open daily from 7 AM to late night
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;