import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlock Financial Freedom with Yaper Credit Cards</h1>
            <p className="text-xl mb-8">Enjoy exclusive rewards, cashback, and benefits tailored to your lifestyle.</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
              Compare Cards
            </button>
          </div>
          <div className="md:w-3/5 flex justify-end">
            <img 
              src="/credit-card-banner.png" 
              alt="Credit Card" 
              className="rounded-lg shadow-xl w-4/5 md:w-auto md:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;