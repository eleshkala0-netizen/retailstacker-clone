"use client";

import { products, Product } from "@/app/lib/products";
import Link from "next/link";
import { useState } from "react";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Tops", "Bottoms", "Outerwear", "Dresses", "Footwear"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p: Product) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      {/* Header */}
      <div className="bg-white py-12 border-b">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Fashion Shop</h1>
          <p className="text-gray-600">Discover our curated collection of premium fashion</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-16 z-40 bg-gray-50/95 backdrop-blur-sm max-w-6xl mx-auto px-4 md:px-8 py-4 border-b border-gray-100">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-gray-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product: Product) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative overflow-hidden bg-gray-200 h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.originalPrice && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </div>
                )}
              </div>

              <div className="p-4">
                <p className="text-xs text-white bg-gray-900 inline-block px-2 py-1 rounded uppercase tracking-wide mb-2">
                  {product.category}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">({product.reviews})</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No products found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}