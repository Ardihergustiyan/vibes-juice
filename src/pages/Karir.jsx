import React, { useState } from 'react';
import { Search, Briefcase, Users, TrendingUp, Award, Heart, MapPin, Clock, FileText } from 'lucide-react';

const KarirPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Data lowongan kerja (kosong untuk saat ini)
  const jobListings = [];

  // Benefits
  const benefits = [
    {
      icon: <Award size={32} />,
      title: 'Pengembangan Karir',
      description: 'Pelatihan berkelanjutan dan kesempatan promosi'
    },
    {
      icon: <Heart size={32} />,
      title: 'Lingkungan Positif',
      description: 'Budaya kerja yang mendukung dan kolaboratif'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Kompensasi Kompetitif',
      description: 'Gaji dan benefit yang menarik'
    },
    {
      icon: <Users size={32} />,
      title: 'Tim Solid',
      description: 'Bekerja dengan profesional berpengalaman'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#5a5a3d] to-[#4a4b2d] text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bergabunglah dengan Tim Kami
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Jadilah bagian dari keluarga besar Jus Kode dan kembangkan karir Anda bersama kami
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari Lowongan Kerja"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur text-white placeholder:text-white/60 focus:border-white focus:outline-none text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#5a5a3d' }}>
          Mengapa Bergabung dengan Jus Kode?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Kami menawarkan lebih dari sekedar pekerjaan - kami menawarkan kesempatan untuk tumbuh dan berkembang
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#5a5a3d]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-[#5a5a3d]">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#5a5a3d' }}>
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Job Listings */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#5a5a3d' }}>
            Lowongan Tersedia
          </h2>

          {jobListings.length === 0 ? (
            // Empty State
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="bg-gray-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="text-gray-400" size={64} />
              </div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#5a5a3d' }}>
                Lowongan Kerja Belum Tersedia
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Saat ini belum ada lowongan kerja yang tersedia. Kembali nanti untuk peluang karier di Jus Kode!
              </p>
              <div className="bg-gradient-to-br from-[#5a5a3d]/10 to-[#4a4b2d]/10 p-8 rounded-3xl">
                <p className="text-gray-700 mb-4 font-semibold">
                  Tertarik bergabung dengan kami?
                </p>
                <p className="text-gray-600 mb-6">
                  Kirimkan CV dan surat lamaran Anda ke email kami. Kami akan menghubungi Anda jika ada posisi yang sesuai.
                </p>
                <a 
                  href="mailto:career@vibejuices.com"
                  className="inline-block bg-[#5a5a3d] hover:bg-[#4a4b2d] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  career@vibejuices.com
                </a>
              </div>
            </div>
          ) : (
            // Job Cards (when available)
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobListings.map((job) => (
                <div key={job.id} className="bg-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: '#5a5a3d' }}>
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <MapPin size={16} />
                        <span className="text-sm">{job.location}</span>
                      </div>
                    </div>
                    <span className="bg-[#5a5a3d] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {job.type}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {job.description}
                  </p>

                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                    <Clock size={16} />
                    <span>Posted {job.postedDate}</span>
                  </div>

                  <button className="w-full bg-[#5a5a3d] hover:bg-[#4a4b2d] text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                    Lamar Sekarang
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#5a5a3d] to-[#4a4b2d] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Briefcase className="mx-auto mb-6 text-white" size={64} />
          <h2 className="text-4xl font-bold text-white mb-6">
            Mari Tumbuh Bersama
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Jus Kode adalah tempat yang tepat untuk membangun karir Anda di industri F&B yang berkembang pesat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:career@vibejuices.com"
              className="bg-white text-[#5a5a3d] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Kirim Lamaran
            </a>
            <a 
              href="#"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#5a5a3d] transition-all duration-300 transform hover:scale-105"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KarirPage;