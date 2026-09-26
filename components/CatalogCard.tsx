"use client";

import { formatOfferPrice } from "@/lib/catalog";
import { formatPrice, type Product } from "@/lib/products";
import { useWishlist } from "@/lib/wishlist-context";
import { Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FreeShippingTag } from "./FreeShippingTag";

function etsyListPrice(product: Product) {
  if (product.compareAt && product.compareAt > product.price) return product.compareAt;
  return Number((product.price / 0.57).toFixed(2));
}

export function CatalogCard({
  product,
  freeShipping = false,
}: {
  product: Product;
  freeShipping?: boolean;
}) {
  const { has, toggle } = useWishlist();
  const wished = has(product.slug);
  const listPrice = etsyListPrice(product);
  const off = Math.max(1, Math.round((1 - product.price / listPrice) * 100));

  if (!freeShipping) {
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
            onClick={() => toggle(product.slug)}
            className="absolute right-2 top-2 grid h-8 w-8 place-items-center text-[#222222]"
          >
            <Heart className={`h-[22px] w-[22px] ${wished ? "fill-[#222222] text-[#222222]" : "text-[#222222]"}`} />
          </button>
        </div>
        <Link href={`/product/${product.slug}`} className="mt-2 block">
          <h3 className="line-clamp-2 min-h-[40px] text-[14px] font-normal leading-[1.35] text-[#222222]">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-[16px] font-bold leading-none text-[#222222]">{formatOfferPrice(product)}</p>
        <p className="mt-1 text-[12px] text-[#595959]">Min. Order: {product.moq ?? 1} pieces</p>
        <button
          type="button"
          onClick={() =>
            window.dispatchEvent(
              new CustomEvent("marina-chat-open", { detail: { product: product.slug } })
            )
          }
          className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-[#ccc] py-2 text-[13px] text-[#333]"
        >
          <MessageCircle className="h-4 w-4" />
          Chat now
        </button>
      </article>
    );
  }

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
          onClick={() => toggle(product.slug)}
          className="absolute right-1.5 top-1.5 grid h-9 w-9 place-items-center text-[#222222]"
        >
          <Heart className={`h-[22px] w-[22px] ${wished ? "fill-[#222222] text-[#222222]" : ""}`} />
        </button>
      </div>
      <Link href={`/product/${product.slug}`} className="mt-2 block">
        <h3 className="line-clamp-2 text-[14px] font-normal leading-[1.35] text-[#222222]">
          {product.name}
        </h3>
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
