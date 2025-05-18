import { creditCardsData } from '../data/creditCards';
import { moreCardsData } from '../data/moreCards';
import { evenMoreCardsData } from '../data/evenMoreCards';
import { extraCardsData } from '../data/extraCards';
import { finalCardsData } from '../data/finalCards';
import { axisAndMoreCardsData } from '../data/axisAndMoreCards';

// Combine all card data into a single array
export const getAllCards = () => {
  return [
    ...creditCardsData, 
    ...moreCardsData, 
    ...evenMoreCardsData,
    ...extraCardsData,
    ...finalCardsData,
    ...axisAndMoreCardsData
  ];
};

// You can call this function to get all cards
// Example usage: 
// import { getAllCards } from '../utils/combineCards';
// const allCreditCards = getAllCards(); 