import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = ({ title, description, icon }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-10">
          <div className="text-6xl mb-6">{icon}</div>
          <h1 className="text-4xl font-bold text-blue-600 mb-4">{title}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">{description}</p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Back to Home
            </Link>
            <a 
              href="mailto:contact@yaper.com"
              className="px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon; 