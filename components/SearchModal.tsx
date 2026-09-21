"use client";

import { products, formatPrice } from "@/lib/products";
import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export function SearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return products.slice(0, 6);
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.collection.includes(query) ||
        p.sku.toLowerCase().includes(query)
    );
  }, [q]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-navy-950/70 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        className="mx-auto mt-16 max-w-2xl overflow-hidden rounded-2xl bg-cream-50 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-cream-300 px-4 py-3">
          <Search className="h-5 w-5 text-navy-600" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search compasses, telescopes, gifts…"
            className="w-full bg-transparent text-navy-900 outline-none placeholder:text-navy-500/50"
          />
          <button onClick={onClose} aria-label="Close search">
            <X className="h-5 w-5 text-navy-600" />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {results.length === 0 && (
            <p className="p-6 text-center text-sm text-navy-600">No pieces found.</p>
          )}
          {results.map((p) => (
            <Link
              key={p.slug}
              href={`/product/${p.slug}`}
              onClick={onClose}
              className="flex items-center gap-3 rounded-xl p-3 hover:bg-cream-200"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-cream-300">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-navy-900">{p.name}</p>
                <p className="text-xs text-navy-600">{p.sku}</p>
              </div>
              <p className="font-serif text-lg text-navy-900">{formatPrice(p.price)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
