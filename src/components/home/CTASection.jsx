import React from 'react';

const CTASection = () => {
  return (
    <div className="w-full">
      {/* Single Background for Both Sections */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&h=1200&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60"></div>
        </div>

        {/* Combined Content */}
        <div className="relative">
          {/* First Section - Nikmati Jus Segar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[600px] px-4 md:px-8 lg:px-16">
            {/* Left Side - Text Content */}
            <div className="py-12 md:py-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#5a5a3d' }}>
                Nikmati Jus Segar Dekat Anda!
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl">
                Kunjungi kedai kami untuk menikmati jus jumbo dengan varian rasa yang beragam. Dengan lebih dari 60 cabang, kami hadir di berbagai kota untuk memudahkan Anda menikmati kesegaran jus alami setiap hari.
              </p>
              <button 
                className="bg-olive-700 hover:bg-olive-800 text-white text-lg font-semibold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: '#5a5a3d' }}
              >
                Lihat Kedai
              </button>
            </div>

            {/* Right Side - Store Image */}
            <div className="hidden lg:flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&h=800&fit=crop"
                alt="Jus Kode Store"
                className="w-full max-w-lg"
              />
            </div>
          </div>

          {/* Second Section - Jus Kode App */}
          <div className="text-center py-20 px-4 md:px-8 pb-32">
            <p className="text-gray-600 text-lg mb-3 font-medium">Segera Hadir!</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#5a5a3d' }}>
              Vibes Juice App
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Pesan jus segar hanya dengan beberapa ketukan. Dapatkan produk kami kapan saja dan di mana saja!
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* App Store */}
              <a 
                href="#" 
                className="inline-block transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-black text-white px-8 py-3 rounded-xl flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-xl font-semibold">App Store</div>
                  </div>
                </div>
              </a>

              {/* Google Play */}
              <a 
                href="#" 
                className="inline-block transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-black text-white px-8 py-3 rounded-xl flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-xl font-semibold">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;