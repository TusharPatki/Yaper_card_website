import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCards } from '../utils/combineCards';
import { createSlug } from '../utils/helpers';

// Card component with image error handling
const CreditCard = ({ card }) => {
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  const getFallbackImage = (cardName) => {
    return `https://via.placeholder.com/300x180?text=${encodeURIComponent(cardName)}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/credit-cards/${createSlug(card.name)}`} className="block">
        <div className="bg-blue-600 text-white py-6 px-4 text-center">
          <h3 className="text-xl font-bold">{card.name}</h3>
          {card.isTrending && (
            <span className="inline-block mt-1 px-2 py-1 bg-yellow-500 text-xs rounded-full">Trending</span>
          )}
          <div className="mt-1">
            <span className="inline-block px-2 py-1 bg-gray-700 text-xs rounded-full">{card.category}</span>
            {card.bank && (
              <span className="inline-block ml-2 px-2 py-1 bg-green-600 text-xs rounded-full">{card.bank}</span>
            )}
          </div>
          {card.imageUrl && (
            <div className="mt-3 p-2 flex justify-center">
              <img 
                src={imageError ? getFallbackImage(card.name) : card.imageUrl} 
                alt={card.name} 
                className="h-20 object-contain mx-auto"
                onError={handleImageError}
              />
            </div>
          )}
        </div>
      </Link>
      <div className="p-6">
        <div className="mb-4">
          <p className="text-gray-600">Annual Fee</p>
          <p className="font-semibold">{card.annualFee}</p>
          {card.feeWaiver && (
            <p className="text-xs text-gray-500 mt-1">{card.feeWaiver}</p>
          )}
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Cashback</p>
          <p className="font-semibold">{card.cashback}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Reward Points</p>
          <p className="font-semibold">{card.rewardPoints}</p>
        </div>
        <div className="mb-6">
          <p className="text-gray-600 mb-2">Key Benefits</p>
          <ul className="list-disc pl-5">
            {card.benefits.map((benefit, idx) => (
              <li key={idx} className="text-sm">{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-2">
          <Link 
            to={`/credit-cards/${createSlug(card.name)}`}
            className="block w-full bg-gray-200 text-gray-800 text-center py-2 rounded hover:bg-gray-300 transition duration-300"
          >
            View Details
          </Link>
          <a 
            href={card.link || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

const CompareCreditCards = ({ showAll = false, filters = { category: 'All', annualFee: 'All', rewards: 'All' } }) => {
  // Get all bank cards from our data files
  const allCards = getAllCards().map(card => {
    // Mark specific cards as trending
    const trendingCards = [
      'RBL Indian Oil Xtra',
      'KIWI',
      'Federal Scapia',
      'Tata Neu HDFC',
      'Indusind Bajaj Tiger card'
    ];
    const isTrending = trendingCards.includes(card.name);
    
    // Extract just the numeric value from annual fee for filtering
    const feeStr = card.annualFee || '';
    const numericFee = parseInt(feeStr.replace(/[^0-9]/g, '') || '0', 10);
    
    return {
      id: card.id,
      name: card.name,
      annualFee: card.annualFee,
      feeWaiver: card.feeWaiver,
      annualFeeValue: numericFee, // Store just the numeric value for filtering
      cashback: card.features[0] || "N/A",
      rewardPoints: card.features[1] || "N/A",
      benefits: card.features.slice(2),
      isTrending: isTrending,
      category: card.category?.split('/')[0] || "Other",
      rewardType: card.category?.includes('/') ? card.category.split('/')[1] : "Other",
      bank: card.bank,
      link: card.link,
      imageUrl: card.imageUrl
    };
  });

  // Apply filters to cards
  let displayedCards = showAll ? allCards : allCards.filter(card => card.isTrending);
  
  // Apply category filter
  if (showAll && filters.category !== 'All') {
    displayedCards = displayedCards.filter(card => card.category === filters.category);
  }
  
  // Apply annual fee filter
  if (showAll && filters.annualFee !== 'All') {
    switch (filters.annualFee) {
      case 'Free':
        displayedCards = displayedCards.filter(card => card.annualFeeValue === 0 || card.annualFee.toLowerCase().includes('free'));
        break;
      case 'Low':
        displayedCards = displayedCards.filter(card => card.annualFeeValue > 0 && card.annualFeeValue <= 1000);
        break;
      case 'Medium':
        displayedCards = displayedCards.filter(card => card.annualFeeValue > 1000 && card.annualFeeValue <= 2000);
        break;
      case 'High':
        displayedCards = displayedCards.filter(card => card.annualFeeValue > 2000);
        break;
      default:
        break;
    }
  }
  
  // Apply rewards filter
  if (showAll && filters.rewards !== 'All') {
    displayedCards = displayedCards.filter(card => card.rewardType === filters.rewards);
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">
            {showAll ? "All Credit Cards" : "Trending Credit Cards"}
          </h2>
          {!showAll && (
            <Link 
              to="/credit-cards" 
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View All Cards
            </Link>
          )}
        </div>
        
        {displayedCards.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayedCards.map(card => (
              <CreditCard key={card.id} card={card} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No cards match your filters</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filter criteria to see more options.</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CompareCreditCards; 