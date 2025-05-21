import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAllCards } from '../utils/combineCards';
import { findCardBySlug } from '../utils/helpers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CreditCardDetail = () => {
  const { cardSlug } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Get all cards and find the one matching the slug
    const allCards = getAllCards();
    const foundCard = findCardBySlug(allCards, cardSlug);
    
    if (foundCard) {
      // Transform the card data to match our display format
      setCard({
        id: foundCard.id,
        name: foundCard.name,
        bank: foundCard.bank,
        annualFee: foundCard.annualFee,
        category: foundCard.category,
        features: foundCard.features,
        link: foundCard.link,
        imageUrl: foundCard.imageUrl || `https://via.placeholder.com/600x360?text=${encodeURIComponent(foundCard.name)}`
      });
    }
    
    setLoading(false);
  }, [cardSlug]);

  // Handle image loading errors
  const handleImageError = () => {
    setImageError(true);
  };

  // Get a fallback image URL
  const getFallbackImage = (cardName) => {
    return `https://via.placeholder.com/600x360?text=${encodeURIComponent(cardName)}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="loader">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!card) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex-grow">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Card Not Found</h2>
            <p className="text-gray-700 mb-6">We couldn't find the credit card you're looking for.</p>
            <Link 
              to="/credit-cards" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Browse All Credit Cards
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-blue-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <Link to="/credit-cards" className="text-white hover:underline mr-4">
              &laquo; Back to All Cards
            </Link>
            <h1 className="text-3xl font-bold text-white">{card.name}</h1>
          </div>
          <p className="text-blue-100 mt-2">{card.bank}</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gray-100 p-6 flex items-center justify-center">
              <img 
                src={imageError ? getFallbackImage(card.name) : card.imageUrl} 
                alt={card.name} 
                className="max-w-full h-auto object-contain"
                onError={handleImageError}
              />
            </div>
            
            <div className="md:w-2/3 p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{card.name}</h2>
                  <p className="text-blue-600 font-semibold">{card.bank}</p>
                </div>
                <span className="inline-block px-3 py-1 bg-gray-700 text-white text-sm rounded-full">
                  {card.category}
                </span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Annual Fee</h3>
                <p className="text-xl">{card.annualFee}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Key Features & Benefits</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <a 
                href={card.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CreditCardDetail; 