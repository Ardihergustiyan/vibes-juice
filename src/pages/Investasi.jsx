import React, { useState } from 'react';
import { MapPin, TrendingUp, DollarSign, Home, ArrowRight } from 'lucide-react';

const InvestasiPage = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Data Properti Investasi
  const properties = [
    {
      id: 1,
      title: 'Vibes Juice Semarang - Tembalang',
      location: 'Jl. Klentengari, Kec Banyumanik, Kota Semarang, Jawa Tengah',
      price: 1470000000,
      collected: 1175000000,
      target: 1470000000,
      landArea: '643m',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop',
      roi: '15-20%',
      period: '5 tahun',
      status: 'Tersedia'
    },
    {
      id: 2,
      title: 'Vibes Juice Jakarta - Kebayoran',
      location: 'Jl. Kebayoran Baru, Jakarta Selatan',
      price: 2500000000,
      collected: 2100000000,
      target: 2500000000,
      landArea: '800m',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=800&fit=crop',
      roi: '18-22%',
      period: '5 tahun',
      status: 'Tersedia'
    },
    {
      id: 3,
      title: 'Vibes Juice Bandung - Dago',
      location: 'Jl. Ir. H. Djuanda (Dago), Bandung, Jawa Barat',
      price: 1800000000,
      collected: 1800000000,
      target: 1800000000,
      landArea: '720m',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
      roi: '16-20%',
      period: '5 tahun',
      status: 'Terpenuhi'
    },
    {
      id: 4,
      title: 'Vibes Juice Surabaya - Gubeng',
      location: 'Jl. Gubeng Kertajaya, Surabaya, Jawa Timur',
      price: 1950000000,
      collected: 850000000,
      target: 1950000000,
      landArea: '680m',
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&h=800&fit=crop',
      roi: '17-21%',
      period: '5 tahun',
      status: 'Tersedia'
    }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateProgress = (collected, target) => {
    return (collected / target) * 100;
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 py-16">
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
            MILIKI BISNIS KEDAI Vibes Juice
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Investasi cerdas dengan sistem franchise yang terpercaya. Raih keuntungan hingga 20% per tahun dengan bisnis jus sehat yang terus berkembang.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-[#5a5a3d]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-[#5a5a3d]" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#5a5a3d' }}>ROI Hingga 20%</h3>
            <p className="text-gray-600">Return of Investment yang menarik dalam jangka waktu 5 tahun</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-[#5a5a3d]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="text-[#5a5a3d]" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#5a5a3d' }}>Lokasi Strategis</h3>
            <p className="text-gray-600">Kedai berlokasi di area dengan traffic tinggi dan potensial</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-[#5a5a3d]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-[#5a5a3d]" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#5a5a3d' }}>Sistem Terpercaya</h3>
            <p className="text-gray-600">Transparansi penuh dengan sistem pembagian hasil yang jelas</p>
          </div>
        </div>

        {/* Properties Grid */}
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#5a5a3d' }}>
          Peluang Investasi Tersedia
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {properties.map((property) => {
            const progress = calculateProgress(property.collected, property.target);
            const isFullyFunded = progress >= 100;

            return (
              <div key={property.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Property Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                      isFullyFunded 
                        ? 'bg-gray-600 text-white' 
                        : 'bg-green-500 text-white'
                    }`}>
                      {property.status}
                    </span>
                  </div>
                </div>

                {/* Property Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#5a5a3d' }}>
                    {property.title}
                  </h3>

                  {/* Location */}
                  <div className="flex gap-2 mb-4">
                    <MapPin className="flex-shrink-0 mt-1 text-gray-500" size={18} />
                    <p className="text-gray-600 text-sm">{property.location}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <h4 className="text-3xl font-bold" style={{ color: '#5a5a3d' }}>
                      {formatCurrency(property.price)}
                    </h4>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">
                        {formatCurrency(property.collected)} terkumpul
                      </span>
                      <span className="font-bold" style={{ color: '#5a5a3d' }}>
                        {progress.toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full transition-all duration-500 rounded-full"
                        style={{
                          width: `${Math.min(progress, 100)}%`,
                          background: isFullyFunded 
                            ? 'linear-gradient(90deg, #6b7280 0%, #9ca3af 100%)'
                            : 'linear-gradient(90deg, #5a5a3d 0%, #7a8a4d 100%)'
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">ROI</p>
                      <p className="font-bold" style={{ color: '#5a5a3d' }}>{property.roi}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Periode</p>
                      <p className="font-bold" style={{ color: '#5a5a3d' }}>{property.period}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Luas Tanah</p>
                      <p className="font-bold" style={{ color: '#5a5a3d' }}>{property.landArea}</p>
                    </div>
                  </div>

                  {/* Button */}
                  <button 
                    disabled={isFullyFunded}
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      isFullyFunded
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-[#5a5a3d] hover:bg-[#4a4b2d] text-white transform hover:scale-105 shadow-lg'
                    }`}
                  >
                    {isFullyFunded ? 'Investasi Terpenuhi' : 'Lihat Detail'}
                    {!isFullyFunded && <ArrowRight size={20} />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#5a5a3d] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Menjadi Bagian dari Vibes Juice?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Hubungi tim kami untuk informasi lebih lanjut tentang peluang investasi yang tersedia
          </p>
          <button className="bg-white text-[#5a5a3d] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Hubungi Kami Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestasiPage;