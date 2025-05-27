import React, { useState } from 'react';
import CompareCreditCards from '../components/CompareCreditCards';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AllCreditCards = () => {
  const [filters, setFilters] = useState({
    category: 'All',
    annualFee: 'All',
    rewards: 'All',
    searchQuery: ''
  });

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-blue-600 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Credit Cards</h1>
          <p className="text-blue-100 mt-2">Find the perfect credit card for your needs</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Filter Credit Cards</h2>
          
          {/* Search Input */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Search by Card Name</label>
            <input
              type="text"
              placeholder="Search credit cards..."
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.searchQuery}
              onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Category</label>
              <select 
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Premium">Premium</option>
                <option value="Rewards">Rewards</option>
                <option value="Cashback">Cashback</option>
                <option value="Travel">Travel</option>
                <option value="Business">Business</option>
                <option value="Student">Student</option>
                <option value="Secured">Secured</option>
                <option value="Essential">Essential</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Annual Fee</label>
              <select 
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.annualFee}
                onChange={(e) => handleFilterChange('annualFee', e.target.value)}
              >
                <option value="All">All Fees</option>
                <option value="Free">No Annual Fee</option>
                <option value="Low">Low (₹0 - ₹1,000)</option>
                <option value="Medium">Medium (₹1,001 - ₹2,000)</option>
                <option value="High">High (₹2,001+)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Rewards</label>
              <select 
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.rewards}
                onChange={(e) => handleFilterChange('rewards', e.target.value)}
              >
                <option value="All">All Rewards</option>
                <option value="Cashback">Cashback</option>
                <option value="Travel">Travel Points</option>
                <option value="Shopping">Shopping</option>
                <option value="Dining">Dining</option>
                <option value="Entertainment">Entertainment</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <CompareCreditCards showAll={true} filters={filters} />
      
      <Footer />
    </div>
  );
};

export default AllCreditCards; 