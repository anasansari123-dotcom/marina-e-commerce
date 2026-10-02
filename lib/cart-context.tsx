"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { B2B_MIN_ORDER_QTY, products, type Product } from "./products";

export type CartLine = {
  slug: string;
  qty: number;
  b2b?: boolean;
};

const minQty = (line: Pick<CartLine, "b2b">) => (line.b2b ? B2B_MIN_ORDER_QTY : 1);
const normalize = (line: CartLine): CartLine => ({ ...line, qty: Math.max(minQty(line), line.qty) });

type CartContextValue = {
  lines: CartLine[];
  add: (slug: string, qty?: number, opts?: { b2b?: boolean }) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number;
  items: { product: Product; qty: number; b2b: boolean }[];
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
      if (raw) setLines((JSON.parse(raw) as CartLine[]).map(normalize));
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
        return product ? { product, qty: l.qty, b2b: Boolean(l.b2b) } : null;
      })
      .filter((x): x is { product: Product; qty: number; b2b: boolean } => Boolean(x));
    return {
      lines,
      add: (slug, qty = 1, opts) =>
        setLines((prev) => {
          const b2b = Boolean(opts?.b2b);
          const found = prev.find((l) => l.slug === slug);
          if (found) {
            return prev.map((l) =>
              l.slug === slug ? normalize({ ...l, b2b: l.b2b || b2b, qty: l.qty + qty }) : l
            );
          }
          return [...prev, normalize({ slug, qty, b2b })];
        }),
      remove: (slug) => setLines((prev) => prev.filter((l) => l.slug !== slug)),
      setQty: (slug, qty) =>
        setLines((prev) =>
          qty <= 0
            ? prev.filter((l) => l.slug !== slug)
            : prev.map((l) => (l.slug === slug ? normalize({ ...l, qty }) : l))
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
