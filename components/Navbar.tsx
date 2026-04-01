"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user") || "");
  }, []);

  return (
    <nav className="flex justify-between p-4 bg-black text-white">
      <Link href="/">MyStore</Link>

      <div className="space-x-4">
        <Link href="/cart">Cart</Link>
        <Link href="/orders">Orders</Link>

        {user ? (
          <span>{user}</span>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}