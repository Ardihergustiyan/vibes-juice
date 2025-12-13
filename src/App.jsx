import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Kedai from './pages/Kedai';
import Investasi from './pages/Investasi';
import Karir from './pages/Karir';
import HubungiKami from './pages/HubungiKami';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/kedai" element={<Kedai />} />
          <Route path="/investasi" element={<Investasi />} />
          <Route path="/karir" element={<Karir />} />
          <Route path="/hubungi" element={<HubungiKami />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}