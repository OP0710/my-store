"use client";

import Navbar from "@/components/Navbar";

export default function Orders() {
  return (
    <div>
      <Navbar />

      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">Orders</h1>

        <div className="mt-4 border p-4">
          Order #1234 - ₹4999 - Delivered
        </div>
      </div>
    </div>
  );
}