// pages/Home.jsx
import React from 'react';
import Hero from '../components/home/Hero';
import FeaturesSection from '../components/home/FeaturesSection';
import ProductCards from '../components/home/ProductCards';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <ProductCards />
      <CTASection />
    </>
  );
}