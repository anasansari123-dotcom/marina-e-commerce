"use client";

import { formatOfferPrice } from "@/lib/catalog";
import { type Product } from "@/lib/products";
import { useWishlist } from "@/lib/wishlist-context";
import { Heart, MessageCircle, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function shortName(name: string) {
  return name.length > 52 ? `${name.slice(0, 50).trim()}…` : name;
}

export function CatalogCard({ product }: { product: Product }) {
  const { has, toggle } = useWishlist();
  const wished = has(product.slug);

  return (
    <article className="group flex flex-col rounded-xl border border-[#eee] bg-white p-2 shadow-sm sm:p-3">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
        <Link href={`/product/${product.slug}`} className="block h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-2 transition duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-2 py-2 opacity-0 transition group-hover:opacity-100">
            <p className="truncate text-xs text-white">{shortName(product.name)}</p>
          </div>
        </Link>
        <button
          type="button"
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => toggle(product.slug)}
          className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/95 shadow"
        >
          <Heart className={`h-4 w-4 ${wished ? "fill-red-500 text-red-500" : "text-navy-800"}`} />
        </button>
      </div>
      <Link href={`/product/${product.slug}`} className="mt-3 block">
        <h3 className="line-clamp-2 min-h-[40px] text-[13px] leading-snug text-[#222]">
          {product.name}
        </h3>
      </Link>
      <div className="mt-1.5 flex flex-wrap items-center gap-1 text-[#C9A84C]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-3 w-3 ${i < Math.round(product.rating) ? "fill-[#C9A84C]" : "text-[#ddd]"}`}
          />
        ))}
        <span className="ml-1 text-[10px] text-[#666] sm:text-[11px]">
          {product.rating.toFixed(1)}
          <span className="hidden sm:inline"> ({product.reviews} reviews)</span>
        </span>
      </div>
      <p className="mt-2 text-[16px] font-semibold text-[#222] sm:text-[18px]">{formatOfferPrice(product)}</p>
      <p className="text-[12px] text-[#888]">Min. Order: {product.moq ?? 1} pieces</p>
      <button
        type="button"
        onClick={() =>
          window.dispatchEvent(
            new CustomEvent("marina-chat-open", { detail: { product: product.slug } })
          )
        }
        className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-[#ccc] py-2 text-[12px] text-[#333] hover:border-[#C9A84C] hover:text-[#8C6E28] sm:text-[13px]"
      >
        <MessageCircle className="h-4 w-4" />
        Chat now
      </button>
    </article>
  );
}
