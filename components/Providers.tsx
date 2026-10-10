"use client";

import { CartProvider } from "@/lib/cart-context";
import { WishlistProvider } from "@/lib/wishlist-context";
import { SessionProvider } from "next-auth/react";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { WholesaleGateProvider } from "@/components/WholesaleGateProvider";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider refetchOnWindowFocus>
      <WholesaleGateProvider>
        <LocaleProvider>
          <CartProvider>
            <WishlistProvider>{children}</WishlistProvider>
          </CartProvider>
        </LocaleProvider>
      </WholesaleGateProvider>
    </SessionProvider>
  );
}
