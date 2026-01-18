import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center px-6 lg:px-16 pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Decorative circles - background */}
      <div className="absolute top-1/4 right-[15%] w-64 h-64 bg-gray-900 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-[25%] w-48 h-48 bg-gray-800 rounded-full opacity-5 blur-2xl"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 
            className={`text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-gray-900 transition-all duration-[1500ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Welcome to<br />Lumen
          </h1>
          
          <div 
            className={`w-16 h-px bg-gray-900 transition-all duration-[1500ms] delay-300 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          ></div>
          
          <p 
            className={`text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-lg transition-all duration-[1500ms] delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Experience tranquility and exceptional taste in the heart of Kubu Raya
          </p>

          <div 
            className={`flex gap-4 transition-all duration-[1500ms] delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="/reservation"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-light tracking-wide hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Reserve Now
            </a>
            <a
              href="/about"
              className="inline-block border border-gray-300 text-gray-900 px-8 py-4 rounded-full font-light tracking-wide hover:bg-gray-50 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Content - Circular Images */}
        <div className="relative h-[600px] lg:h-[700px]">
          {/* Large Circle - Main Image */}
          <div 
            className={`absolute top-0 right-0 w-[420px] h-[420px] rounded-full overflow-hidden shadow-2xl transition-all duration-[2000ms] delay-200 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80"
              alt="Lumen Coffee"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small Circle 1 - Bottom Left */}
          <div 
            className={`absolute bottom-16 left-0 w-[200px] h-[200px] rounded-full overflow-hidden shadow-xl transition-all duration-[2000ms] delay-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80"
              alt="Lumen Interior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small Circle 2 - Decorative */}
          <div 
            className={`absolute top-[280px] left-[120px] w-[140px] h-[140px] rounded-full bg-gray-900 transition-all duration-[2000ms] delay-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;