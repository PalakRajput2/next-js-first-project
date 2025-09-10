"use client";

import { useState } from "react";
import Image from "next/image";

// Category tabs
const categories = [
  { id: "all", name: "ALL" },
  { id: "favourite", name: "FAVOURITE" },
  { id: "exotic", name: "EXOTIC" },
  { id: "greens", name: "GREENS" },
  { id: "popular", name: "POPULAR" },
  { id: "various", name: "VARIOUS" },
  { id: "winter", name: "WINTER" },
];

// Product list
const products = [
  { id: 1, category: "favourite", name: "Majesty Palm", price: 259, img: "/images/pink.jpg" },
  { id: 2, category: "exotic", name: "Foxglove Flower", price: 259, img: "/images/purple_flower.jpg" },
  { id: 3, category: "greens", name: "Sweet Alyssum", price: 259, img: "/images/red_flower.jpg", badge: "Sold" },
  { id: 4, category: "popular", name: "Spring Snowflake", price: 170, img: "/images/yellow_flower.jpg" },
  { id: 6, category: "winter", name: "Orange Roses", price: 199, img: "/images/orange.jpg", badge: "Sale" },
  { id: 5, category: "various", name: "Lily", price: 199, img: "/images/lily.jpg" },
];

const CategoryPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section className="px-6 md:px-20 py-12">
      
      {/* Tabs with horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide pb-3">
        <div className="flex space-x-6 min-w-max justify-center px-4 ">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`text-sm font-semibold tracking-wide uppercase transition cursor-pointer ${
                activeTab === cat.id
                  ? "text-pink-500 border-b-2 border-pink-500 text-xl"
                  : "text-gray-700 hover:text-pink-400"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-10">
        {filtered.map((product) => (
          <div key={product.id} className="relative group">
            {/* Badge */}
            {product.badge && (
              <span
                className={`absolute top-3 left-3 px-3 py-2 text-sm font-semibold uppercase rounded ${
                  product.badge === "Sale"
                    ? "bg-pink-500 text-white"
                    : "bg-gray-800 text-white"
                }`}
              >
                {product.badge}
              </span>
            )}

            {/* Product Image */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={product.img}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-[300px] lg:h-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="mt-4 text-center">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-800">
                {product.name}
              </h3>
              <p className="mt-1 text-gray-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
