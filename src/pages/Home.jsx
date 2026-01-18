// pages/Home.jsx
import React from 'react';
import Hero from '../components/home/Hero';
import FeaturesSection from '../components/home/FeaturesSection';
import MenuPreview from '../components/home/MenuPreview';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <MenuPreview />
      <CTASection />
    </>
  );
}