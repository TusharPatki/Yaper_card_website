import React from 'react';
import Button from './Button';

const Card = ({ title, description, ctaText, ctaAction, imageUrl, features, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col ${className}`}>
      {imageUrl && (
        <img src={imageUrl} alt={title || 'Card image'} className="w-full h-40 object-cover rounded-t-lg mb-4" />
      )}
      {title && <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>}
      {description && <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>}
      {features && Array.isArray(features) && (
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1 flex-grow">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
      {children}
      {ctaText && ctaAction && (
        <Button onClick={ctaAction} variant={ctaText === "Apply Now" ? "success" : "primary"} className="mt-auto w-full">
          {ctaText}
        </Button>
      )}
    </div>
  );
};

export default Card;