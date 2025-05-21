import { creditCardsData } from '../data/creditCards';

// Combine all card data into a single array
export const getAllCards = () => {
  return [...creditCardsData];
};

// You can call this function to get all cards
// Example usage: 
// import { getAllCards } from '../utils/combineCards';
// const allCreditCards = getAllCards(); 