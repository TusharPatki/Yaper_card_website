import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center">
        <Link to="/" className="flex items-center mr-auto">
          <img 
            src="/yaper_logo.png" 
            alt="Yaper Logo" 
            className="h-10 w-auto"
          />
        </Link>
        <div className="hidden md:flex space-x-8 pr-6">
          <Link to="/credit-cards" className="hover:text-blue-600">Credit Cards</Link>
          <Link to="/loans" className="hover:text-blue-600">Loans</Link>
          <Link to="/investments" className="hover:text-blue-600">Investments</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;