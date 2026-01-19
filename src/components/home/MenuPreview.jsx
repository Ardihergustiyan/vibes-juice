import React, { useState, useEffect, useRef } from 'react';
import lumenGallery1 from '../../assets/Gallery/gallery1.JPG';
import lumenGallery4 from '../../assets/Gallery/gallery4.JPG';
import lumenGallery3 from '../../assets/Gallery/gallery3.JPG';
import lumenGallery2 from '../../assets/Gallery/gallery2.JPG';

const MenuPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideLeftRight {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(-20px); }
      }
      @keyframes shimmer {
        0% { background-position: -1000px 0; }
        100% { background-position: 1000px 0; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const images = [
    {
      id: 1,
      image: lumenGallery1,
      style: 'large'
    },
    {
      id: 2,
      image: lumenGallery2,
      style: 'circle'
    },
    {
      id: 3,
      image: lumenGallery3,
      style: 'medium'
    },
    {
      id: 4,
      image: lumenGallery4,
      style: 'small'
    }
  ];

  return (
    <div ref={sectionRef} className="w-full bg-gradient-to-b from-white to-gray-50 py-32 lg:py-40 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header with floating elements */}
        <div className="relative text-center mb-32">
          <div 
            className={`absolute -top-8 left-[20%] w-20 h-20 rounded-full bg-gray-900 opacity-5 transition-all duration-[2000ms] ${
              isVisible ? 'opacity-5 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-45'
            }`}
          ></div>
          
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 transition-all duration-[1500ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Coffee, Food & Moments
          </h2>

          <div 
            className={`absolute -bottom-8 right-[25%] w-16 h-16 rounded-full bg-gray-900 opacity-5 transition-all duration-[2000ms] delay-300 ${
              isVisible ? 'opacity-5 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-45'
            }`}
          ></div>
        </div>

        {/* Modern Asymmetric Grid with Mixed Shapes */}
        <div className="relative grid grid-cols-12 gap-6 lg:gap-8">
          {/* Large Rectangle - Spans 7 columns, 2 rows */}
          <div 
            className={`col-span-12 md:col-span-7 md:row-span-2 rounded-3xl overflow-hidden transition-all duration-[1500ms] ${
              isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 -translate-x-12 -rotate-2'
            }`}
          >
            <div className="aspect-[4/5] md:aspect-[3/4] relative group">
              {!loadedImages[0] && (
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
                  style={{ 
                    backgroundSize: '1000px 100%',
                    animation: 'shimmer 2s infinite linear'
                  }}
                ></div>
              )}
              <img
                src={images[0].image}
                alt="Lumen"
                onLoad={() => handleImageLoad(0)}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  loadedImages[0] ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Circle Image - Top Right */}
          <div 
            className={`col-span-6 md:col-span-5 rounded-full overflow-hidden transition-all duration-[1500ms] delay-200 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-90'
            }`}
          >
            <div className="aspect-square relative group">
              {!loadedImages[1] && (
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
                  style={{ 
                    backgroundSize: '1000px 100%',
                    animation: 'shimmer 2s infinite linear'
                  }}
                ></div>
              )}
              <img
                src={images[1].image}
                alt="Lumen"
                onLoad={() => handleImageLoad(1)}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  loadedImages[1] ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Medium Rectangle - Middle Right */}
          <div 
            className={`col-span-6 md:col-span-5 rounded-3xl overflow-hidden transition-all duration-[1500ms] delay-400 ${
              isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-12 rotate-2'
            }`}
          >
            <div className="aspect-[4/3] relative group">
              {!loadedImages[2] && (
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
                  style={{ 
                    backgroundSize: '1000px 100%',
                    animation: 'shimmer 2s infinite linear'
                  }}
                ></div>
              )}
              <img
                src={images[2].image}
                alt="Lumen"
                onLoad={() => handleImageLoad(2)}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  loadedImages[2] ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Small Rounded Square - Bottom - Slides from Left */}
          <div 
            className={`col-span-12 md:col-span-5 md:col-start-8 rounded-3xl overflow-hidden transition-all duration-[1500ms] delay-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
            }`}
            style={isVisible ? { animation: 'slideLeftRight 4s ease-in-out infinite' } : {}}
          >
            <div className="aspect-[16/9] md:aspect-[3/2] relative group">
              {!loadedImages[3] && (
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
                  style={{ 
                    backgroundSize: '1000px 100%',
                    animation: 'shimmer 2s infinite linear'
                  }}
                ></div>
              )}
              <img
                src={images[3].image}
                alt="Lumen"
                onLoad={() => handleImageLoad(3)}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  loadedImages[3] ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Decorative floating element */}
          <div 
            className={`absolute -bottom-12 left-[15%] w-24 h-24 rounded-full border-2 border-gray-900 opacity-10 transition-all duration-[2000ms] delay-800 ${
              isVisible ? 'opacity-10 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-90'
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MenuPreview;