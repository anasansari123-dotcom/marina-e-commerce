"use client";

import { formatPrice, type Product } from "@/lib/products";
import { useWishlist } from "@/lib/wishlist-context";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FreeShippingTag } from "./FreeShippingTag";

function etsyListPrice(product: Product) {
  if (product.compareAt && product.compareAt > product.price) return product.compareAt;
  return Number((product.price / 0.57).toFixed(2));
}

export function ProductCard({ product }: { product: Product }) {
  const { has, toggle } = useWishlist();
  const wished = has(product.slug);
  const listPrice = etsyListPrice(product);
  const off = Math.max(1, Math.round((1 - product.price / listPrice) * 100));

  return (
    <article className="group flex flex-col bg-white">
      <div className="relative aspect-square overflow-hidden rounded-[4px] bg-[#f5f5f5]">
        <Link href={`/product/${product.slug}`} className="block h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3 transition duration-300 group-hover:scale-[1.03]"
          />
        </Link>
        <button
          type="button"
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggle(product.slug);
          }}
          className="absolute right-1.5 top-1.5 grid h-9 w-9 place-items-center text-[#222222]"
        >
          <Heart className={`h-[22px] w-[22px] ${wished ? "fill-[#222222] text-[#222222]" : ""}`} />
        </button>
      </div>
      <Link href={`/product/${product.slug}`} className="mt-2 block">
        <h3 className="line-clamp-2 text-[14px] font-normal leading-[1.35] text-[#222222]">{product.name}</h3>
      </Link>
      <p className="mt-1 text-[16px] font-bold leading-tight text-[#222222]">{formatPrice(product.price)}</p>
      <p className="mt-0.5 text-[13px] leading-tight text-[#595959]">
        <span className="line-through">{formatPrice(listPrice)}</span>
        <span className="ml-1">({off}% off)</span>
      </p>
      <FreeShippingTag />
    </article>
  );
}
