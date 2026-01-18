import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery categories
  const categories = ['All', 'Interior', 'Ambience', 'Events', 'Food & Drinks'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Gallery items - ganti dengan foto real
  const galleryItems = [
    { id: 1, category: 'Interior', aspect: 'portrait', title: 'Main Lounge' },
    { id: 2, category: 'Ambience', aspect: 'landscape', title: 'Evening Mood' },
    { id: 3, category: 'Food & Drinks', aspect: 'square', title: 'Signature Coffee' },
    { id: 4, category: 'Interior', aspect: 'landscape', title: 'Second Floor' },
    { id: 5, category: 'Events', aspect: 'portrait', title: 'Private Gathering' },
    { id: 6, category: 'Ambience', aspect: 'square', title: 'Cozy Corner' },
    { id: 7, category: 'Interior', aspect: 'landscape', title: 'VIP Room' },
    { id: 8, category: 'Food & Drinks', aspect: 'portrait', title: 'Fresh Brew' },
    { id: 9, category: 'Ambience', aspect: 'landscape', title: 'Morning Light' },
    { id: 10, category: 'Events', aspect: 'square', title: 'Celebration' },
    { id: 11, category: 'Interior', aspect: 'portrait', title: 'Third Floor' },
    { id: 12, category: 'Ambience', aspect: 'landscape', title: 'Golden Hour' },
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const getAspectClass = (aspect) => {
    switch(aspect) {
      case 'portrait': return 'md:row-span-2';
      case 'landscape': return 'md:col-span-2';
      case 'square': return '';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 mb-8">
            Gallery
          </h1>
          <div className="w-20 h-px bg-gray-300 mx-auto mb-12"></div>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            Explore the ambience, spaces, and moments at Lumen
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-light text-sm tracking-wide transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${getAspectClass(item.aspect)}`}
                onClick={() => setSelectedImage(item)}
              >
                {/* Placeholder Image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 transition-transform duration-500 group-hover:scale-110">
                  <div className="w-full h-full flex flex-col items-center justify-center p-8">
                    <p className="text-gray-400 font-light text-center text-sm mb-2">
                      {item.category}
                    </p>
                    <p className="text-gray-500 font-light text-center">
                      {item.title}
                    </p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-light text-lg">
                      {item.title}
                    </p>
                    <p className="text-white/80 font-light text-sm">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} strokeWidth={1.5} />
          </button>
          
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Placeholder untuk image preview */}
            <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-white/60 font-light text-sm mb-2">
                  {selectedImage.category}
                </p>
                <p className="text-white font-light text-2xl">
                  {selectedImage.title}
                </p>
              </div>
            </div>
            
            {/* Image Info */}
            <div className="mt-6 text-center">
              <p className="text-white font-light text-lg mb-2">
                {selectedImage.title}
              </p>
              <p className="text-white/70 font-light text-sm">
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;