"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { getCart, clearCart } from "@/lib/cart";
import Link from "next/link";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold">Cart</h1>

        {cart.length === 0 && <p className="mt-4">Cart is empty</p>}

        {cart.map((item, i) => (
          <div key={i} className="border p-3 my-2">
            {item.name} - ₹{item.price}
          </div>
        ))}

        <h2 className="mt-4 text-xl">Total: ₹{total}</h2>

        <Link href="/success">
          <button onClick={clearCart} className="mt-4 bg-green-600 text-white px-4 py-2">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}