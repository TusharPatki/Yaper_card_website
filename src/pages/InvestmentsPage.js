import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ComingSoon from '../components/ComingSoon';

const InvestmentsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ComingSoon 
        title="Investments Coming Soon"
        description="Our team is developing innovative investment solutions to help you grow your wealth. Stay tuned for exciting opportunities!"
        icon="📈"
      />
      <Footer />
    </div>
  );
};

export default InvestmentsPage; 