import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <div className="absolute inset-0 bg-green-500 opacity-0 hover:opacity-50 transition duration-300 ease-in-out"></div>
    </div>
  );
};

export default Card;
