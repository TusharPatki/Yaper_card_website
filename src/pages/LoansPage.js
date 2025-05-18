import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ComingSoon from '../components/ComingSoon';

const LoansPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ComingSoon 
        title="Loans Coming Soon"
        description="We're working hard to bring you the best loan offers with competitive interest rates and flexible repayment options. Check back soon!"
        icon="💰"
      />
      <Footer />
    </div>
  );
};

export default LoansPage; 