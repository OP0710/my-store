"use client";

import Navbar from "@/components/Navbar";

export default function Success() {
  return (
    <div>
      <Navbar />

      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">Order Successful ✅</h1>
      </div>
    </div>
  );
}