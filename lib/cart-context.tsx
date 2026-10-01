"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { MAX_ORDER_QTY, products, type Product } from "./products";

const clampQty = (qty: number) => Math.min(MAX_ORDER_QTY, qty);

export type CartLine = {
  slug: string;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  add: (slug: string, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number;
  items: { product: Product; qty: number }[];
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const KEY = "marina-muse-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLines((JSON.parse(raw) as CartLine[]).map((l) => ({ ...l, qty: clampQty(l.qty) })));
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const value = useMemo<CartContextValue>(() => {
    const items = lines
      .map((l) => {
        const product = products.find((p) => p.slug === l.slug);
        return product ? { product, qty: l.qty } : null;
      })
      .filter((x): x is { product: Product; qty: number } => Boolean(x));
    return {
      lines,
      add: (slug, qty = 1) =>
        setLines((prev) => {
          const found = prev.find((l) => l.slug === slug);
          if (found) {
            return prev.map((l) =>
              l.slug === slug ? { ...l, qty: clampQty(l.qty + qty) } : l
            );
          }
          return [...prev, { slug, qty: clampQty(qty) }];
        }),
      remove: (slug) => setLines((prev) => prev.filter((l) => l.slug !== slug)),
      setQty: (slug, qty) =>
        setLines((prev) =>
          qty <= 0
            ? prev.filter((l) => l.slug !== slug)
            : prev.map((l) => (l.slug === slug ? { ...l, qty: clampQty(qty) } : l))
        ),
      clear: () => setLines([]),
      count: items.reduce((n, i) => n + i.qty, 0),
      items,
      subtotal: items.reduce((n, i) => n + i.product.price * i.qty, 0),
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
