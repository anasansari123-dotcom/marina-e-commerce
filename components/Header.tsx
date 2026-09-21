"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, User, X, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "./Logo";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";

const nav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "B2C Retail Collection" },
  { href: "/wholesale", label: "B2B Wholesale Collection" },
  { href: "/custom-manufacturing", label: "Custom Manufacturing" },
  { href: "/shipping", label: "Shipping" },
  { href: "/wishlist", label: "My Wishlist" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const { count: wishCount } = useWishlist();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="relative bg-[#0B1D36]">
      <div className="mx-auto flex max-w-[1680px] items-center gap-2 px-3 py-2 sm:gap-4 sm:px-4 sm:py-2.5 xl:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <BrandLogo size="header" priority />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-x-5 2xl:gap-x-6 xl:flex mr-12">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap py-2 text-[10px] font-medium uppercase tracking-[0.08em] 2xl:text-[13px] ${
                isActive(pathname, item.href) ? "text-[#C9A84C]" : "text-white/85 hover:text-[#C9A84C]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-0.5 text-white">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 px-2 py-2 text-[10px] font-medium uppercase tracking-[0.14em] hover:text-[#C9A84C]"
          >
            <User className="h-[16px] w-[16px]" />
            <span className="hidden sm:inline">Login</span>
          </Link>
          <Link href="/wishlist" aria-label="My Wishlist" className="relative p-2 hover:text-[#C9A84C]">
            <Heart className="h-[18px] w-[18px]" />
            {wishCount > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#C9A84C] px-1 text-[10px] font-semibold text-navy-950">
                {wishCount}
              </span>
            )}
          </Link>
          <Link href="/cart" aria-label="Cart" className="relative p-2 hover:text-[#C9A84C]">
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#C9A84C] px-1 text-[10px] font-semibold text-navy-950">
                {count}
              </span>
            )}
          </Link>
          <button className="p-2 xl:hidden" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full z-50 max-h-[min(70vh,calc(100dvh-var(--site-nav)))] overflow-y-auto border-t border-white/10 bg-[#0B1D36] px-5 py-3 shadow-lg xl:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block py-2.5 text-xs uppercase tracking-[0.16em] ${
                isActive(pathname, item.href) ? "text-[#C9A84C]" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="block py-2.5 text-xs uppercase tracking-[0.16em] text-white"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
