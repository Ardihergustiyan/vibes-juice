import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('aneka-es');

  // Data Super Jus
  const superJusProducts = [
    {
      id: 1,
      name: 'GREEN GARDEN',
      subtitle: '(JUS KOLESTROL)',
      description: 'MENJAGA LEVEL KOLESTROL',
      ingredients: 'BAYAM, TIMUN, JERUK, NANAS',
      price: 'Rp 25.000',
      image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&h=800&fit=crop',
      titleEnglish: 'Super Jus Kolestrol'
    },
    {
      id: 2,
      name: 'BERRY BLUSH',
      subtitle: '(JUS JANTUNG)',
      description: 'MENJAGA KESEHATAN JANTUNG',
      ingredients: 'TOMAT, PISANG, STROBERI',
      price: 'Rp 25.000',
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=800&fit=crop',
      titleEnglish: 'Super Jus Jantung'
    },
    {
      id: 3,
      name: 'PURPLE POWER',
      subtitle: '(JUS KANKER)',
      description: 'MEMINIMALISIS POTENSI KANKER',
      ingredients: 'NANAS, APEL, BUAH BIT',
      price: 'Rp 25.000',
      image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&h=800&fit=crop',
      titleEnglish: 'Super Jus Kanker'
    },
    {
      id: 4,
      name: 'GOLDEN SUNSET',
      subtitle: '(JUS MATA)',
      description: 'NUTRISI UNTUK KESEHATAN MATA',
      ingredients: 'WORTEL, MELON, STROBERI',
      price: 'Rp 25.000',
      image: 'https://images.unsplash.com/photo-1624044165384-56f2d0b89a8f?w=800&h=800&fit=crop',
      titleEnglish: 'Super Jus Mata'
    },
    {
      id: 5,
      name: 'FLU BLEND',
      subtitle: '(JUS ANTI FLU)',
      description: 'MEREDAKAN FLU DAN BATUK',
      ingredients: 'JERUK, APEL, BAYAM',
      price: 'Rp 25.000',
      image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&h=800&fit=crop',
      titleEnglish: 'Super Jus Anti Flu'
    },
    {
      id: 6,
      name: 'SPECIAL BLEND',
      subtitle: '(JUS DIABETES)',
      description: 'MENCEGAH RESIKO DIABETES',
      ingredients: 'PAK CHOI, STROBERI, APEL',
      price: 'Rp 25.000',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&h=800&fit=crop',
      titleEnglish: 'Super Jus Diabetes'
    }
  ];

  // Data Koleksi Jus
  const koleksiJus = [
    { id: 1, image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=600&fit=crop' },
    { id: 2, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=600&fit=crop' },
    { id: 3, image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=600&fit=crop' },
    { id: 4, image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=600&h=600&fit=crop' },
    { id: 5, image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=600&fit=crop' },
    { id: 6, image: 'https://images.unsplash.com/photo-1624044165384-56f2d0b89a8f?w=600&h=600&fit=crop' },
    { id: 7, image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&h=600&fit=crop' },
    { id: 8, image: 'https://images.unsplash.com/photo-1572383672419-b50dde6a7d32?w=600&h=600&fit=crop' },
    { id: 9, image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&h=600&fit=crop' },
    { id: 10, image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=600&fit=crop' },
    { id: 11, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=600&fit=crop' },
    { id: 12, image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=600&fit=crop' }
  ];

  // Data Produk Lain - Aneka Es
  const anekaEsProducts = [
    { id: 1, name: 'Es Buah Segar', price: 'Rp 18.000', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=600&fit=crop' },
    { id: 2, name: 'Es Kelapa Jeruk', price: 'Rp 20.000', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=600&fit=crop' },
    { id: 3, name: 'Es Teler', price: 'Rp 22.000', image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=600&h=600&fit=crop' },
    { id: 4, name: 'Es Campur', price: 'Rp 20.000', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=600&fit=crop' }
  ];

  // Data Produk Lain - Makanan
  const makananProducts = [
    { id: 1, name: 'Nasi Goreng', price: 'Rp 25.000', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=600&fit=crop' },
    { id: 2, name: 'Mie Goreng', price: 'Rp 23.000', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&h=600&fit=crop' },
    { id: 3, name: 'Pisang Goreng', price: 'Rp 15.000', image: 'https://images.unsplash.com/photo-1587894862943-cc0b9c8e8d8f?w=600&h=600&fit=crop' },
    { id: 4, name: 'Roti Bakar', price: 'Rp 18.000', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop' }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-100 to-gray-200">
        <img
          src="https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=1920&h=800&fit=crop"
          alt="Super Jus Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Menu Baru Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#5a5a3d' }}>
          Menu Baru
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {superJusProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              {/* Header */}
              <div className="p-6 text-center border-b">
                <div className="text-sm font-bold tracking-wider mb-1" style={{ color: '#5a5a3d' }}>
                  JUS KODE
                </div>
                <div className="text-xs text-gray-500">sejak 1985</div>
              </div>

              {/* Product Image */}
              <div className="p-6">
                <h3 className="text-2xl font-bold italic mb-2 text-center" style={{ color: '#5a5a3d' }}>
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-4">{product.subtitle}</p>
                
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-between items-center mt-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <ChevronLeft size={24} />
                  </button>
                  <p className="text-xs text-gray-500 uppercase tracking-wider text-center">
                    {product.description}
                  </p>
                  <button className="text-gray-400 hover:text-gray-600">
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6">
                <h4 className="text-xl font-bold mb-2" style={{ color: '#5a5a3d' }}>
                  {product.titleEnglish}
                </h4>
                <p className="text-2xl font-bold" style={{ color: '#5a5a3d' }}>
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Koleksi Jus Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#5a5a3d' }}>
            Koleksi Jus
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {koleksiJus.map((item) => (
              <div key={item.id} className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-square group">
                <img
                  src={item.image}
                  alt={`Jus ${item.id}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Produk Lain Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8" style={{ color: '#5a5a3d' }}>
            Produk Lain
          </h2>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('aneka-es')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'aneka-es'
                  ? 'bg-[#5a5a3d] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Aneka Es
            </button>
            <button
              onClick={() => setActiveTab('makanan')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'makanan'
                  ? 'bg-[#5a5a3d] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Makanan
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(activeTab === 'aneka-es' ? anekaEsProducts : makananProducts).map((product) => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white text-xl font-bold">{product.price}</span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold" style={{ color: '#5a5a3d' }}>
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold mt-2" style={{ color: '#5a5a3d' }}>
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;