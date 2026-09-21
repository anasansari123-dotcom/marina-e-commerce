"use client";

import { formatPrice, type Product } from "@/lib/products";
import { useWishlist } from "@/lib/wishlist-context";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function shortName(name: string) {
  return name.length > 28 ? `${name.slice(0, 26).trim()}…` : name;
}

export function ProductCard({ product }: { product: Product }) {
  const { has, toggle } = useWishlist();
  const wished = has(product.slug);

  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-[0_8px_30px_rgba(26,20,12,0.06)]">
      <div className="relative aspect-square overflow-hidden bg-[#2a2118]">
        <Link href={`/product/${product.slug}`} className="block h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/80 to-transparent px-3 py-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="truncate text-sm font-medium text-white">{shortName(product.name)}</p>
          </div>
        </Link>
        <button
          type="button"
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggle(product.slug);
          }}
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-navy-900 shadow-sm transition hover:scale-105"
        >
          <Heart
            className={`h-4 w-4 ${wished ? "fill-red-500 text-red-500" : "text-navy-800"}`}
          />
        </button>
      </div>
      <Link href={`/product/${product.slug}`} className="block p-4">
        <h3 className="font-serif text-lg leading-snug text-navy-900">{product.name}</h3>
        <div className="mt-1.5 flex items-center gap-1.5">
          <span className="flex items-center gap-0.5 text-[#C9A84C]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${i < Math.round(product.rating) ? "fill-[#C9A84C]" : "text-[#C9A84C]/30"}`}
              />
            ))}
          </span>
          <span className="text-xs text-navy-700">{product.rating.toFixed(1)}</span>
          <span className="text-xs text-navy-500">({product.reviews} reviews)</span>
        </div>
        <p className="mt-2 font-serif text-xl text-navy-900">
          {formatPrice(product.price)}{" "}
          <span className="text-xs font-sans tracking-wide text-navy-500">USD</span>
        </p>
      </Link>
    </article>
  );
}
