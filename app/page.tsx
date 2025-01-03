"use client";

import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const products: Product[] = [
  { id: 1, name: "Smartphone X1", price: 999, image: "/product1.jpg", description: "High-performance smartphone.", category: "Electronics" },
  { id: 2, name: "Wireless Headphones", price: 199, image: "/product2.jpg", description: "Noise-cancelling headphones.", category: "Accessories" },
  { id: 3, name: "Gaming Laptop Pro", price: 1599, image: "/product3.jpg", description: "Ultimate gaming performance.", category: "Electronics" },
  { id: 4, name: "Smart Watch", price: 299, image: "/product4.jpg", description: "Track your fitness easily.", category: "Wearables" },
  { id: 5, name: "Bluetooth Speaker", price: 89, image: "/product5.jpg", description: "Crystal-clear sound.", category: "Accessories" },
  { id: 6, name: "Camera Drone", price: 499, image: "/product6.jpg", description: "Capture aerial views.", category: "Electronics" },
  { id: 7, name: "Fitness Tracker", price: 79, image: "/product7.jpg", description: "Monitor your health stats.", category: "Wearables" },
  { id: 8, name: "Mechanical Keyboard", price: 129, image: "/product8.jpg", description: "Ergonomic design.", category: "Accessories" },
  { id: 9, name: "4K Smart TV", price: 799, image: "/product9.jpg", description: "Immersive viewing experience.", category: "Electronics" },
];

const categories = ["All", "Electronics", "Accessories", "Wearables"];

const HomePage: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-lightGray">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">
            AS<b className="text-[red]">Store</b>
          </h1>
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
            🛒 Cart ({cart.length})
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-secondary text-black py-16 text-center">
        <h2 className="text-4xl font-bold">Explore Our Latest Collection</h2>
        <p className="text-lg mt-2">Find products that match your lifestyle.</p>
        <button
          onClick={scrollToProducts}
          className="mt-6 bg-primary px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Shop Now
        </button>
      </section>

      {/* Search and Filter */}
      <section className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 rounded-md border border-gray-300 focus:outline-primary"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-1/4 px-4 py-2 rounded-md border border-gray-300"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Product Listing */}
      <section id="products" className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              {/* Full Image Display */}
              <div className="w-full aspect-[4/3] bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{product.description}</p>
                <p className="text-primary font-semibold mt-2">${product.price}</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="absolute bottom-0 left-0 w-full bg-primary text-white py-2 hover:bg-indigo-700 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white text-center py-4 mt-8">
        <p>&copy; {new Date().getFullYear()} ANStore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
