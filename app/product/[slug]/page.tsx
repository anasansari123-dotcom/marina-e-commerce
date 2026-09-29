"use client";

import { collections, formatPrice, getProduct, products, reviews } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import {
  Check,
  Heart,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { ShopTabs } from "@/components/ShopTabs";
import { companyWhatsApp } from "@/lib/company";
import { FreeShippingTag } from "@/components/FreeShippingTag";

const tabs = ["Specifications", "Dimensions", "What's Included", "Reviews", "FAQs"] as const;

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProduct(slug);
  const { add } = useCart();
  const { has, toggle } = useWishlist();
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState<(typeof tabs)[number]>("Specifications");
  const [added, setAdded] = useState(false);

  const related = useMemo(
    () =>
      products
        .filter((p) => p.collection === product?.collection && p.slug !== product?.slug)
        .slice(0, 4),
    [product]
  );

  const shopItems = useMemo(() => {
    if (!product) return products;
    const same = products.filter((p) => p.collection === product.collection);
    const rest = products.filter((p) => p.collection !== product.collection);
    return [...same, ...rest];
  }, [product]);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-serif text-4xl">Piece not found</h1>
        <Link href="/shop" className="btn-navy mt-6">
          Back to shop
        </Link>
      </div>
    );
  }

  const collection = collections.find((c) => c.slug === product.collection);
  const stockLabel =
    product.stock === "in-stock"
      ? "In Stock"
      : product.stock === "low"
        ? "Low stock"
        : "Made to order";

  const handleAdd = () => {
    add(product.slug, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1320px] px-5 py-4 lg:py-8">
        <p className="hidden text-[11px] text-navy-600 lg:block">
          <Link href="/">Home</Link>
          <span className="mx-1.5 text-navy-400">/</span>
          <Link href="/shop">Shop</Link>
          {collection && (
            <>
              <span className="mx-1.5 text-navy-400">/</span>
              <Link href={`/collections/${collection.slug}`}>{collection.name}</Link>
            </>
          )}
          <span className="mx-1.5 text-navy-400">/</span>
          {product.name}
        </p>

        <div className="mt-0 grid items-start gap-6 lg:mt-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <div className="-mx-5 lg:mx-0">
            <div className="relative aspect-square overflow-hidden rounded-none bg-[#f5f5f5] lg:aspect-[5/4] lg:rounded-2xl lg:bg-[#2a2118]">
              <Image
                src={product.gallery[active] || product.image}
                alt={product.name}
                fill
                className="object-contain p-4 lg:object-cover lg:p-0"
                priority
              />
              <button
                type="button"
                aria-label={has(product.slug) ? "Remove from wishlist" : "Add to wishlist"}
                onClick={() => toggle(product.slug)}
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/95 shadow"
              >
                <Heart
                  className={`h-5 w-5 ${has(product.slug) ? "fill-red-500 text-red-500" : "text-navy-800"}`}
                />
              </button>
              <span className="absolute bottom-4 left-4 hidden rounded-md bg-black/70 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white lg:inline">
                360°
              </span>
              <span className="absolute bottom-4 left-20 hidden rounded-md bg-white/90 px-2.5 py-1 text-[10px] uppercase tracking-widest text-navy-900 lg:inline">
                3D view
              </span>
            </div>
            </div>
            <div className="mt-3 hidden grid-cols-4 gap-2.5 lg:grid">
              {product.gallery.slice(0, 4).map((src, i) => (
                <button
                  key={src + i}
                  onClick={() => setActive(i)}
                  className={`relative aspect-square overflow-hidden rounded-lg ${
                    active === i ? "ring-2 ring-[#C9A84C]" : "ring-1 ring-black/5"
                  }`}
                >
                  <Image src={src} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-[1.35rem] font-normal leading-tight text-[#222222] md:text-[2.15rem]">{product.name}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
              <span className="flex items-center gap-0.5 text-[#C9A84C]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${i < Math.round(product.rating) ? "fill-[#C9A84C]" : ""}`}
                  />
                ))}
              </span>
              <span className="text-navy-600">{product.rating.toFixed(1)} · {product.reviews} reviews</span>
              <span className="text-navy-400">|</span>
              <span className="text-navy-500">{product.sku}</span>
            </div>
            <p className="mt-3 text-[1.45rem] font-bold text-[#222222] md:mt-4 md:text-[2rem]">{formatPrice(product.price)}</p>
            <FreeShippingTag />
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
              <span className="inline-flex items-center gap-1.5 text-emerald-700">
                <Check className="h-4 w-4" /> {stockLabel}
              </span>
              <span className="inline-flex items-center gap-1.5 text-navy-600">
                <Truck className="h-4 w-4 text-[#C9A84C]" />
                Estimated delivery 5–7 business days
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button onClick={handleAdd} className="btn-navy">
                {added ? "Added to Cart" : "Add to Cart"}
              </button>
              <Link href="/checkout" onClick={handleAdd} className="btn-gold text-center">
                Buy Now
              </Link>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("marina-chat-open", { detail: { product: product.slug } })
                  )
                }
                className="hidden items-center justify-center gap-2 rounded-full border border-navy-800 px-4 py-2.5 text-[11px] uppercase tracking-[0.14em] lg:inline-flex"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#C9A84C]" />
                Ask AI About This Product
              </button>
              <a
                href={companyWhatsApp}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-[11px] uppercase tracking-[0.14em] text-white"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp Us
              </a>
            </div>

            <div className="mt-6 hidden justify-between gap-4 border-t border-[#e6dfd2] pt-5 text-center text-[11px] text-navy-700 lg:flex">
              <div className="flex-1">
                <ShieldCheck className="mx-auto h-5 w-5 text-[#C9A84C]" />
                <p className="mt-1">Secure Payment</p>
              </div>
              <div className="flex-1">
                <RotateCcw className="mx-auto h-5 w-5 text-[#C9A84C]" />
                <p className="mt-1">Easy Returns 7 Days</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 hidden gap-8 lg:grid lg:grid-cols-2">
          <div>
            <div className="flex flex-wrap gap-1 border-b border-[#e6dfd2]">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-3 py-2.5 text-[13px] ${
                    tab === t
                      ? "border-b-2 border-[#C9A84C] font-medium text-navy-900"
                      : "text-navy-500"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="py-6">
              {tab === "Specifications" && (
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Material", product.material],
                      ["Finish", product.finish],
                      ["Dimensions", product.dimensions],
                      ["Weight", product.weight],
                      ["Packaging", product.packaging],
                    ].map(([k, v]) => (
                      <tr key={k} className="border-b border-[#eee7db]">
                        <td className="py-2.5 text-navy-500">{k}</td>
                        <td className="py-2.5 font-medium">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {tab === "Dimensions" && (
                <p className="text-sm text-navy-700">{product.dimensions}. Packed weight typically {product.weight}.</p>
              )}
              {tab === "What's Included" && (
                <ul className="space-y-2 text-sm">
                  {product.included.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="h-4 w-4 text-[#C9A84C]" /> {item}
                    </li>
                  ))}
                </ul>
              )}
              {tab === "Reviews" && (
                <div className="space-y-4">
                  {reviews.map((r) => (
                    <div key={r.name}>
                      <p className="text-sm font-medium">{r.name} · {r.location}</p>
                      <p className="mt-1 text-sm text-navy-700">{r.body}</p>
                    </div>
                  ))}
                </div>
              )}
              {tab === "FAQs" && (
                <div className="space-y-3 text-sm">
                  <p><strong>Does the compass work?</strong> Yes — needles are balanced.</p>
                  <p><strong>Can you engrave a logo?</strong> Yes, from 50 pieces.</p>
                  <p><strong>Do you ship worldwide?</strong> Yes, from India with tracking.</p>
                </div>
              )}
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl">Product Description</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-700">{product.description}</p>
            <p className="mt-3 text-sm leading-relaxed text-navy-700">{product.story}</p>
            <h3 className="mt-8 font-serif text-2xl">Customer Reviews</h3>
            <div className="mt-4 space-y-4">
              {reviews.slice(0, 2).map((r) => (
                <blockquote key={r.name} className="border-l-2 border-[#C9A84C] pl-4">
                  <p className="text-sm text-navy-800">“{r.body}”</p>
                  <p className="mt-1 text-xs text-navy-500">{r.name}, {r.location}</p>
                </blockquote>
              ))}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="hidden py-14 lg:block">
            <h2 className="font-serif text-3xl">You may also like</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="lg:hidden">
        <ShopTabs items={shopItems} currentProduct={product} />
      </div>
    </div>
  );
}
