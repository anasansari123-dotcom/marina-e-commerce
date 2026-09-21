"use client";

import { formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold-600" />
        <h1 className="mt-4 font-serif text-4xl">Order received</h1>
        <p className="mt-3 text-navy-600">
          A confirmation is on its way. Brass takes a moment — shipping takes five to seven days.
        </p>
        <Link href="/shop" className="btn-navy mt-8">
          Continue browsing
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-serif text-4xl">Nothing to check out</h1>
        <Link href="/shop" className="btn-gold mt-8">
          Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-2">
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          clear();
          setDone(true);
        }}
      >
        <h1 className="font-serif text-4xl">Checkout</h1>
        <input className="input" required placeholder="Full name" />
        <input className="input" type="email" required placeholder="Email" />
        <input className="input" required placeholder="Address" />
        <div className="grid gap-4 sm:grid-cols-2">
          <input className="input" required placeholder="City" />
          <input className="input" required placeholder="Postal code" />
        </div>
        <input className="input" required placeholder="Country" />
        <input className="input" required placeholder="Card number (demo)" defaultValue="4242 4242 4242 4242" />
        <button className="btn-gold w-full">Pay {formatPrice(subtotal)}</button>
        <p className="text-center text-xs text-navy-500">Demo checkout — no real charge is made.</p>
      </form>
      <aside className="h-fit rounded-2xl bg-white p-6 shadow-soft">
        {items.map(({ product, qty }) => (
          <div key={product.slug} className="flex justify-between border-b border-cream-300 py-3 text-sm">
            <span>
              {product.name} × {qty}
            </span>
            <span>{formatPrice(product.price * qty)}</span>
          </div>
        ))}
        <div className="mt-4 flex justify-between font-medium">
          <span>Total</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
      </aside>
    </div>
  );
}
