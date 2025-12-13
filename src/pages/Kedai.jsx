import React, { useState } from 'react';
import { MapPin, Clock, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const KedaiPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Data Kedai
  const stores = [
    {
      id: 1,
      name: 'Banjar Wijaya',
      address: 'Cluster Yunani Kode pos 15148, Jl. Banjar Wijaya No 11-12 Blok B 47, Cipete, Cipondoh, Tangerang City, Banten',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop',
      hours: {
        weekday: 'Mon - Fri 07:00 - 22:00',
        weekend: 'Sat - Sun 07:00 - 23:00'
      }
    },
    {
      id: 2,
      name: 'Green Lake City',
      address: 'Jl. Green Lake City Boulevard No.18, RT.003/RW.009, Petir, Kec. Cipondoh, Kota Tangerang, Banten 15147',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      hours: {
        weekday: 'Mon - Fri 07:00 - 22:00',
        weekend: 'Sat - Sun 07:00 - 23:00'
      }
    },
    {
      id: 3,
      name: 'Graha Raya',
      address: 'Ruko Orlin Arcade 2 Blok JB, Jl. Boulevard Graha Raya No.28, RT.003/RW.04, Paku Jaya, Kec. Serpong Utara, Banten 15220',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop',
      hours: {
        weekday: 'Mon - Fri 07:00 - 22:00',
        weekend: 'Sat - Sun 07:00 - 23:00'
      }
    },
    {
      id: 4,
      name: 'Bekasi Harapan Indah',
      address: 'Ruko Boulevard Hijau Blok C1 No.36B, Harapan Indah, Bekasi',
      image: 'https://images.unsplash.com/photo-1515669097368-22e68427d265?w=600&h=400&fit=crop',
      hours: {
        weekday: 'Mon - Fri 07:00 - 22:00',
        weekend: 'Sat - Sun 07:00 - 23:00'
      }
    },
    {
      id: 5,
      name: 'BSD City',
      address: 'Ruko Golden Madrid 1 Blok J No.28, BSD City, Tangerang Selatan',
      image: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600&h=400&fit=crop',
      hours: {
        weekday: 'Mon - Fri 07:00 - 22:00',
        weekend: 'Sat - Sun 07:00 - 23:00'
      }
    },
    {
      id: 6,
      name: 'Alam Sutera',
      address: 'Ruko Prominence Blok 38D No.55, Alam Sutera, Tangerang',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop',
      hours: {
        weekday: 'Mon - Fri 07:00 - 22:00',
        weekend: 'Sat - Sun 07:00 - 23:00'
      }
    },
    {
      id: 7,
      name: 'Gading Serpong',
      address: 'Ruko Paramount Blok C8 No.1, Gading Serpong, Tangerang',
      image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&h=400&fit=crop',
      hours: {
        weekday: 'Mon - Fri 07:00 - 22:00',
        weekend: 'Sat - Sun 07:00 - 23:00'
      }
    },
    {
      id: 8,
      name: 'Bintaro',
      address: 'Ruko Kebayoran Arcade Blok C2 No.15, Bintaro, Tangerang Selatan',
      image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&h=400&fit=crop',
      hours: {
        weekday: 'Mon - Fri 07:00 - 22:00',
        weekend: 'Sat - Sun 07:00 - 23:00'
      }
    }
  ];

  // Filter stores based on search
  const filteredStores = stores.filter(store =>
    store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredStores.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStores = filteredStores.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%235a5a3d" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ 
            color: '#5a5a3d',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            KAMI HADIR DI SELURUH INDONESIA
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Temukan kedai Vibes Juice terdekat di kota Anda dan nikmati kesegaran jus alami setiap hari
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari Kedai Vibes Juice..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-[#5a5a3d] focus:outline-none text-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stores Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentStores.map((store) => (
            <div key={store.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="md:flex">
                {/* Store Image */}
                <div className="md:w-2/5">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>

                {/* Store Info */}
                <div className="p-6 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: '#5a5a3d' }}>
                      {store.name}
                    </h3>

                    {/* Address */}
                    <div className="flex gap-3 mb-4">
                      <MapPin className="flex-shrink-0 mt-1" style={{ color: '#5a5a3d' }} size={20} />
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {store.address}
                      </p>
                    </div>

                    {/* Hours */}
                    <div className="flex gap-3 mb-6">
                      <Clock className="flex-shrink-0 mt-1" style={{ color: '#5a5a3d' }} size={20} />
                      <div className="text-sm">
                        <p className="text-gray-700 font-semibold">{store.hours.weekday}</p>
                        <p className="text-gray-700 font-semibold">{store.hours.weekend}</p>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <button 
                    className="bg-[#5a5a3d] hover:bg-[#4a4b2d] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-full md:w-auto"
                  >
                    Lihat Lokasi
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-[#5a5a3d] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredStores.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-500">Tidak ada kedai yang ditemukan</p>
            <p className="text-gray-400 mt-2">Coba kata kunci pencarian lain</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KedaiPage;