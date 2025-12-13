import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Array untuk menyimpan URL gambar banner
  const bannerImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=1920&h=800&fit=crop',
      alt: 'Banner 1'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=1920&h=800&fit=crop',
      alt: 'Banner 2'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=1920&h=800&fit=crop',
      alt: 'Banner 3'
    }
  ];

  // Auto slide setiap 5 detik
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, bannerImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="w-full pt-24 pb-8 px-4 md:px-8 bg-gray-50">
      <div className="relative w-full max-w-7xl mx-auto h-[70vh] overflow-hidden rounded-3xl shadow-2xl bg-gray-900">
        {/* Banner Images */}
        {bannerImages.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={banner.url}
              alt={banner.alt}
              className="w-full h-full object-cover"
            />
            {/* Optional: Dark overlay untuk kontras yang lebih baik */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'bg-white w-12 h-3'
                : 'bg-white/50 hover:bg-white/75 w-3 h-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter (Optional) */}
      <div className="absolute bottom-8 right-8 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm z-10">
        {currentSlide + 1} / {bannerImages.length}
      </div>
      </div>
    </div>
  );
};

export default Hero;