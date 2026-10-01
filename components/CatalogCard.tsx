"use client";

import { MAX_ORDER_QTY, type Product } from "@/lib/products";
import { useWishlist } from "@/lib/wishlist-context";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FreeShippingTag } from "./FreeShippingTag";
import { PriceRow } from "./PriceRow";

export function CatalogCard({
  product,
  wholesale = false,
}: {
  product: Product;
  wholesale?: boolean;
}) {
  const { has, toggle } = useWishlist();
  const wished = has(product.slug);

  return (
    <article className="group flex flex-col bg-white">
      <div className="relative aspect-square overflow-hidden rounded-[4px] bg-[#f5f5f5]">
        <Link href={`/product/${product.slug}`} className="relative block h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
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
        <h3 className="line-clamp-2 text-[12.5px] font-normal leading-[1.35] text-[#222222] sm:text-[14px]">
          {product.name}
        </h3>
      </Link>
      <PriceRow price={product.price} className="mt-1" />
      {wholesale && (
        <p className="mt-0.5 text-[11px] font-medium text-[#595959] sm:text-[12px]">
          Max. Order: {MAX_ORDER_QTY} pieces
        </p>
      )}
      <FreeShippingTag />
    </article>
  );
}
