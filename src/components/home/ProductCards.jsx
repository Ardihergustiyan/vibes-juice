import React from 'react';

const ProductCards = () => {
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&h=800&fit=crop',
      name: 'Super Jus Kolestrol',
      price: 'Rp 25.000',
      bgColor: 'from-gray-800 to-gray-900'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&h=800&fit=crop',
      name: 'Berry Blush',
      subtitle: '(JUS JANTUNG)',
      price: 'Rp 25.000',
      bgColor: 'from-pink-100 to-pink-50'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&h=800&fit=crop',
      name: 'Purple Power',
      subtitle: '(JUS KANKER)',
      price: 'Rp 25.000',
      bgColor: 'from-purple-100 to-purple-50'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&h=800&fit=crop',
      name: 'Golden Sunset',
      subtitle: '(JUS MATA)',
      price: 'Rp 25.000',
      bgColor: 'from-orange-100 to-orange-50'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&h=800&fit=crop',
      name: 'Flu Blend',
      subtitle: '(JUS ANTI FLU)',
      price: 'Rp 25.000',
      bgColor: 'from-green-100 to-green-50'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800&h=800&fit=crop',
      name: 'Special Blend',
      subtitle: '(JUS DIABETES)',
      price: 'Rp 25.000',
      bgColor: 'from-red-100 to-red-50'
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4 md:px-8 -mt-16">
      <div className="max-w-7xl mx-auto relative">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[3/4] cursor-pointer"
            >
              {/* Background Image */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.bgColor}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              {/* Hover Overlay with Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  {product.subtitle && (
                    <p className="text-white/80 text-sm mb-2 font-medium italic">
                      {product.subtitle}
                    </p>
                  )}
                  <h3 className="text-white text-3xl font-bold mb-3">
                    {product.name}
                  </h3>
                  <p className="text-white text-2xl font-bold">
                    {product.price}
                  </p>
                </div>
              </div>

              {/* Default State - Just slight shadow at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="bg-olive-700 hover:bg-olive-800 text-white text-lg font-semibold px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: '#5a5a3d' }}>
            Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;