// Create URL-friendly slugs from card names
export const createSlug = (cardName) => {
  if (!cardName) return '';
  
  // Replace spaces with hyphens and remove special characters
  return cardName
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with a single one
};

// Find a card by its slug
export const findCardBySlug = (cards, slug) => {
  if (!slug || !cards || !cards.length) return null;
  
  return cards.find(card => createSlug(card.name) === slug);
}; 