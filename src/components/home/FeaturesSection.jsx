import React from 'react';
import { BadgeCheck, Leaf, ShoppingBasket, Heart, Coffee } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <BadgeCheck className="w-16 h-16" />,
      title: "Harga Terjangkau",
      description: "Jus segar berkualitas dengan harga ramah di kantong!"
    },
    {
      icon: <Leaf className="w-16 h-16" />,
      title: "Segar Setiap Hari",
      description: "Jus kami dibuat dari buah segar terbaik di setiap gelasnya."
    },
    {
      icon: <ShoppingBasket className="w-16 h-16" />,
      title: "Varian Lengkap",
      description: "Pilih dari berbagai varian rasa yang lengkap, sesuai selera Anda!"
    }
  ];

  const aboutItems = [
    {
      icon: <Coffee className="w-12 h-12" />,
      title: "Pelopor Jus Jumbo Indonesia",
      description: "Ciri khas kami adalah jus berukuran besar dengan harga terjangkau, menawarkan kesegaran maksimal untuk semua."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Gaya Hidup Sehat",
      description: "Kami berdedikasi untuk mendukung gaya hidup sehat dengan inovasi jus yang kaya vitamin, mineral, dan antioksidan."
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-8">
      {/* Features Cards */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="text-olive-700 mb-6" style={{ color: '#5a5a3d' }}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#5a5a3d' }}>
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Title */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#5a5a3d' }}>
              Sekilas<br />Tentang Kami
            </h2>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {aboutItems.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-white rounded-2xl p-4 shadow-md" style={{ color: '#5a5a3d' }}>
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#5a5a3d' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.description}
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

export default FeaturesSection;