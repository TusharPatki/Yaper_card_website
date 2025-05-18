import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button' }) => {
  const baseStyle = 'font-semibold py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition duration-150 ease-in-out';

  let variantStyle = '';
  switch (variant) {
    case 'primary': // Blue
      variantStyle = 'bg-brand-blue text-white hover:bg-blue-700 focus:ring-blue-500';
      break;
    case 'secondary': // Yellow
      variantStyle = 'bg-brand-yellow text-gray-800 hover:bg-yellow-500 focus:ring-yellow-400';
      break;
    case 'success': // Green
      variantStyle = 'bg-brand-green text-white hover:bg-green-700 focus:ring-green-500';
      break;
    case 'outline':
      variantStyle = 'bg-transparent text-brand-blue border border-brand-blue hover:bg-blue-50 focus:ring-blue-500';
      break;
    default:
      variantStyle = 'bg-brand-blue text-white hover:bg-blue-700 focus:ring-blue-500';
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;