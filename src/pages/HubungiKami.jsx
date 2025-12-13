import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, MessageCircle } from 'lucide-react';

const HubungiKamiPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Mohon lengkapi semua field yang wajib diisi (*)');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

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
            Hubungi Kami
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Kami siap membantu Anda! Hubungi kami untuk pertanyaan, saran, atau peluang kerjasama
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-[#5a5a3d]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Phone className="text-[#5a5a3d]" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#5a5a3d' }}>Telepon</h3>
            <p className="text-gray-600 mb-2">Hubungi kami via telepon</p>
            <a href="tel:+6281234567890" className="text-[#5a5a3d] font-semibold hover:underline">
              +62 812-3456-7890
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-[#5a5a3d]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Mail className="text-[#5a5a3d]" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#5a5a3d' }}>Email</h3>
            <p className="text-gray-600 mb-2">Kirim email kepada kami</p>
            <a href="mailto:info@juskode.com" className="text-[#5a5a3d] font-semibold hover:underline">
              info@juskode.com
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-[#5a5a3d]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-[#5a5a3d]" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#5a5a3d' }}>Kantor Pusat</h3>
            <p className="text-gray-600">
              Jl. Raya Serpong No. 123<br />
              Tangerang Selatan, Banten 15310
            </p>
          </div>
        </div>

        {/* Main Content: Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#5a5a3d' }}>
              Kirim Pesan
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#5a5a3d] focus:outline-none transition-colors"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#5a5a3d] focus:outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#5a5a3d] focus:outline-none transition-colors"
                    placeholder="+62 xxx xxxx xxxx"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Subjek *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#5a5a3d] focus:outline-none transition-colors"
                  >
                    <option value="">Pilih subjek</option>
                    <option value="franchise">Informasi Franchise</option>
                    <option value="investasi">Peluang Investasi</option>
                    <option value="kerjasama">Kerjasama Bisnis</option>
                    <option value="keluhan">Keluhan & Saran</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Pesan *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#5a5a3d] focus:outline-none transition-colors resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#5a5a3d] hover:bg-[#4a4b2d] text-white py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Kirim Pesan
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Business Hours */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-[#5a5a3d]" size={28} />
                <h3 className="text-2xl font-bold" style={{ color: '#5a5a3d' }}>Jam Operasional</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold">Senin - Jumat</span>
                  <span>08:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sabtu - Minggu</span>
                  <span>09:00 - 21:00</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#5a5a3d' }}>
                Ikuti Kami
              </h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-[#5a5a3d] transition-colors">
                  <Instagram size={24} />
                  <span className="font-semibold">@juskode.official</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-[#5a5a3d] transition-colors">
                  <Facebook size={24} />
                  <span className="font-semibold">Jus Kode Indonesia</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-[#5a5a3d] transition-colors">
                  <MessageCircle size={24} />
                  <span className="font-semibold">WhatsApp Business</span>
                </a>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-br from-[#5a5a3d] to-[#4a4b2d] rounded-3xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-3">Respon Cepat!</h3>
              <p className="text-white/90 text-sm">
                Tim kami akan merespons pesan Anda dalam waktu maksimal 24 jam pada hari kerja.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8" style={{ color: '#5a5a3d' }}>
            Lokasi Kantor Pusat
          </h2>
          <div className="rounded-3xl overflow-hidden shadow-2xl h-96 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Map placeholder - Integrate Google Maps here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubungiKamiPage;