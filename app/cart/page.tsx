"use client";

import { MAX_ORDER_QTY, formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { items, setQty, remove, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-serif text-5xl">Your cart is empty</h1>
        <p className="mt-3 text-navy-600">The foundry is full. The bag is not.</p>
        <Link href="/shop" className="btn-gold mt-8">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[1fr_340px]">
      <div>
        <h1 className="font-serif text-4xl">Cart</h1>
        <ul className="mt-8 divide-y divide-cream-300">
          {items.map(({ product, qty }) => (
            <li key={product.slug} className="flex gap-4 py-6">
              <div className="relative h-28 w-28 overflow-hidden rounded-xl bg-cream-200">
                <Image src={product.image} alt="" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <Link href={`/product/${product.slug}`} className="font-serif text-2xl">
                  {product.name}
                </Link>
                <p className="text-sm text-navy-600">{formatPrice(product.price)}</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center rounded-full border border-cream-300">
                    <button className="px-3 py-1" onClick={() => setQty(product.slug, qty - 1)}>
                      −
                    </button>
                    <span className="w-6 text-center text-sm">{qty}</span>
                    <button
                      className="px-3 py-1 disabled:cursor-not-allowed disabled:opacity-30"
                      disabled={qty >= MAX_ORDER_QTY}
                      aria-label="Increase quantity"
                      onClick={() => setQty(product.slug, qty + 1)}
                    >
                      +
                    </button>
                  </div>
                  {qty >= MAX_ORDER_QTY && (
                    <span className="text-xs text-[#8C6E28]">Max. {MAX_ORDER_QTY} pieces per order</span>
                  )}
                  <button className="text-sm text-navy-500 underline" onClick={() => remove(product.slug)}>
                    Remove
                  </button>
                </div>
              </div>
              <p className="font-serif text-xl">{formatPrice(product.price * qty)}</p>
            </li>
          ))}
        </ul>
      </div>
      <aside className="h-fit rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="font-serif text-2xl">Summary</h2>
        <div className="mt-4 flex justify-between text-sm">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="mt-2 flex justify-between text-sm text-navy-600">
          <span>Shipping</span>
          <span>Calculated at checkout</span>
        </div>
        <Link href="/checkout" className="btn-gold mt-6 w-full">
          Checkout
        </Link>
        <Link href="/wholesale/quote" className="mt-3 block text-center text-sm text-navy-600 underline">
          Need a wholesale lot instead?
        </Link>
      </aside>
    </div>
  );
}
