import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Reservation from './pages/Reservation';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';


export default function App() {
  return (
    <Router basename="/lumen">
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
       
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}