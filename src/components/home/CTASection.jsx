import React, { useState, useEffect, useRef } from 'react';

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

  return (
    <div ref={sectionRef} className="w-full bg-gradient-to-br from-stone-100 to-stone-50 py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Circular Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div 
              className={`w-[420px] h-[420px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-2xl transition-all duration-[2000ms] ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1000&q=80"
                alt="Lumen Coffee"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-8 lg:pl-8">

            <h2 
              className={`text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight transition-all duration-[1500ms] delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              A Space for<br />Your Moments
            </h2>

            <div 
              className={`w-16 h-px bg-gray-900 transition-all duration-[1500ms] delay-400 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            ></div>

            <p 
              className={`text-lg md:text-xl text-gray-600 font-light leading-relaxed transition-all duration-[1500ms] delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Whether it's morning coffee, an afternoon escape, or evening conversations—Lumen is here to hold your quiet moments and warm gatherings
            </p>

            <div 
              className={`space-y-4 pt-4 transition-all duration-[1500ms] delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;