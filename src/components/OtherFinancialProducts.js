import React from 'react';

const OtherFinancialProducts = () => {
  const products = [
    {
      id: 1,
      title: "Personal Loans",
      description: "Quick approval with minimal documentation for your immediate needs.",
      icon: "💰"
    },
    {
      id: 2,
      title: "Home Loans",
      description: "Competitive interest rates to help you purchase your dream home.",
      icon: "🏠"
    },
    {
      id: 3,
      title: "Investment Plans",
      description: "Grow your wealth with our carefully curated investment portfolios.",
      icon: "📈"
    },
    {
      id: 4,
      title: "Savings Account",
      description: "High-interest savings accounts with zero maintenance fees.",
      icon: "🏦"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Other Financial Products</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">{product.icon}</div>
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherFinancialProducts;