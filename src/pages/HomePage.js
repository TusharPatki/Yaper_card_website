import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Herosection';
import CompareCreditCards from '../components/CompareCreditCards';
import OtherFinancialProducts from '../components/OtherFinancialProducts';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <CompareCreditCards showAll={false} />
        <OtherFinancialProducts />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage; 