import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import DiagnosticsSection from '../DiagnosticsSection';
import BestProduct from '../BestProduct';
import ProductRange from '../ProductRange';

function Home() {
  return (
    <>
      <HeroSection />
      <DiagnosticsSection />
      <BestProduct />
      <ProductRange />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
