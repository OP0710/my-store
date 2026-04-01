"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { products } from "@/lib/products";
import { addToCart } from "@/lib/cart";

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;

  const product = products.find((p) => p.id === id);
  if (!product) return <div>Product not found</div>;

  // ✅ state must be here (NOT inside JSX)
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
        
        {/* Image Section */}
        <div>
          <img
            src={selectedImage}
            className="w-full h-[400px] object-cover rounded"
          />

          {/* Thumbnails */}
          <div className="flex gap-2 mt-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setSelectedImage(img)}
                className="w-20 h-20 object-cover rounded cursor-pointer border"
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-2xl mt-4">₹{product.price}</p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">

            {/* Add to Cart */}
            <button
              onClick={() => {
                addToCart(product);
                alert("Added to cart");
              }}
              className="flex-1 bg-gray-300 text-black py-3 rounded hover:bg-gray-400 transition font-medium"
            >
              Add to Cart
            </button>

            {/* Order Now */}
            <button
              onClick={() => {
                addToCart(product);
                window.location.href = "/cart";
              }}
              className="flex-1 bg-black text-white py-3 rounded hover:bg-gray-800 transition font-medium"
            >
              Order Now
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}