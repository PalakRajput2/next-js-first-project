// app/(shop)/items/FlowerCard.jsx

import React from "react";

const FlowerCard = ({ flower, onAddToCart }) => {
  return (
    <div className=" rounded-lg shadow hover:shadow-lg p-4">
      <img src={flower.image} alt={flower.name} className="w-full h-48 object-cover rounded-md mb-3" />
      <h3 className="text-xl font-semibold">{flower.name}</h3>
      <p className="text-gray-500 mb-2">{flower.category}</p>
      <p className="text-pink-600 font-bold mb-3">${flower.price}</p>
      <button
        onClick={() => onAddToCart(flower)}
        className="bg-pink-500 text-white w-full py-2 rounded-md hover:bg-pink-600 transition cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default FlowerCard;
