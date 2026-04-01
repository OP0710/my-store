import Link from "next/link";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <img src={product.images[0]} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-500">₹{product.price}</p>

        <Link href={`/product/${product.id}`}>
          <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            View Product
          </button>
        </Link>
      </div>
    </div>
  );
}