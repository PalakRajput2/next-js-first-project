"use client";

import React, { useState } from "react";
import { flowerData } from "./data";
import FlowerCard from "./FlowerCard";
import { FaAddressCard } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";
import Content from "../../shop/items/Content";

const categories = ["All", "Roses", "Tulips", "Sunflowers", "Lilies"];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (flower) => {
    setCart((prev) => [...prev, flower]);
    alert(`${flower.name} added to cart!`);
  };

  const filteredFlowers =
    selectedCategory === "All"
      ? flowerData
      : flowerData.filter((f) => f.category === selectedCategory);

  return (
      
    <div >
   <Content/>
   <div className="px-6 md:px-20 py-16">
      {/* Categories */}
<div className="flex  justify-center  overflow-x-auto whitespace-nowrap gap-4 pb-4 mb-10 px-2 scrollbar-hide">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className={`flex-shrink-0 px-4 py-2 border rounded-md cursor-pointer ${
        selectedCategory === cat
          ? "bg-pink-500 text-white"
          : "text-gray-600 hover:bg-pink-100"
      }`}
    >
      {cat}
    </button>
  ))}
</div>


      {/* Flowers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredFlowers.map((flower) => (
          <FlowerCard
            key={flower.id}
            flower={flower}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/*  Cart Count */}
      <div className=" mt-10 text-center">
        <p className="text-lg flex items-center gap-5 justify-center">
          <ShoppingCart/> Items in Cart: <strong>{cart.length}</strong>
        </p>
      </div>
    </div>
    </div>
  );
};

export default ShopPage;
