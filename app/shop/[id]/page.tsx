"use client";

import { products, getProductById, Product } from "@/app/lib/products";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product not found</h1>
          <Link href="/shop" className="text-blue-600 hover:underline">
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
        <Link href="/shop" className="text-blue-600 hover:underline text-sm">
          ← Back to Shop
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow p-8">
          <div className="flex flex-col gap-4">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-96 md:h-full">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            {product.originalPrice && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-700 font-semibold text-center">
                  Save {discountPercent}% - Limited offer
                </p>
              </div>
            )}
          </div>

          <div>
            <div className="mb-6">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}>★</span>
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">{product.description}</p>
              <p className="text-gray-600 mb-8">{product.details}</p>
            </div>

            {product.sizes && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">Size</label>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 rounded border font-medium transition-all ${
                        selectedSize === size
                          ? "bg-gray-900 text-white border-gray-900"
                          : "bg-white text-gray-900 border-gray-200 hover:border-gray-900"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.colors && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">Color</label>
                <div className="flex gap-3 flex-wrap">
                  {product.colors.map((color: string) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded border font-medium transition-all ${
                        selectedColor === color
                          ? "bg-gray-900 text-white border-gray-900"
                          : "bg-white text-gray-900 border-gray-200 hover:border-gray-900"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-3">Quantity</label>
              <div className="flex items-center gap-3 w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100">−</button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100">+</button>
              </div>
            </div>

            <div className="mb-6">
              {product.instock ? (
                <p className="text-green-600 font-semibold">✓ In Stock</p>
              ) : (
                <p className="text-red-600 font-semibold">Out of Stock</p>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.instock}
              className={`w-full py-4 rounded-lg font-bold text-lg transition-all mb-3 ${
                product.instock
                  ? addedToCart
                    ? "bg-green-600 text-white"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              {addedToCart ? "✓ Added to Cart!" : "Add to Cart"}
            </button>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                Free shipping on orders over $50 • 30-day returns • 1-year warranty
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products
            .filter((p: Product) => p.category === product.category && p.id !== product.id)
            .slice(0, 3)
            .map((relatedProduct: Product) => (
              <Link
                key={relatedProduct.id}
                href={`/shop/${relatedProduct.id}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-200 h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                  <p className="text-lg font-bold text-gray-900">${relatedProduct.price}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}