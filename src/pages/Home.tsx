import React from 'react';
import Hero from '../components/sections/home/Hero';
import Stats from '../components/sections/home/Stats';
import Services from '../components/sections/home/Services';
import GrowthEngine from '../components/sections/home/FeaturedCase';
import GrowthCalculator from '../components/sections/home/GrowthCalculator';
import Testimonials from '../components/sections/home/Testimonials';
import CtaSection from '../components/sections/home/CtaSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <GrowthEngine />
      <GrowthCalculator />
      <Testimonials />
      <CtaSection />
    </>
  );
};

export default Home;