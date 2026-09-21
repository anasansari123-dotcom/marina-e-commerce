import Link from "next/link";
import {
  CreditCard,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Youtube,
} from "lucide-react";
import { BrandLogo } from "./Logo";

const columns = [
  {
    title: "Shop",
    links: [
      ["B2C Retail Collection", "/shop"],
      ["Collections", "/collections"],
      ["My Wishlist", "/wishlist"],
      ["Corporate Gifts", "/corporate-gifts"],
    ],
  },
  {
    title: "B2B",
    links: [
      ["B2B Wholesale Collection", "/wholesale"],
      ["Create Account", "/wholesale/register"],
      ["Bulk Quote", "/wholesale/quote"],
      ["Custom Manufacturing", "/custom-manufacturing"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/about"],
      ["Contact", "/contact"],
      ["Blog", "/blog"],
      ["Shipping", "/shipping"],
    ],
  },
];

const promises = [
  { icon: CreditCard, title: "Multiple Payment Options", body: "Cards, UPI, bank transfer & trade terms" },
  { icon: MessageCircle, title: "WhatsApp & Email", body: "Quotes and order updates, same day" },
  { icon: Sparkles, title: "AI Search & Recommendations", body: "Smarter nautical finds, faster results" },
  { icon: ShieldCheck, title: "Secure & Trusted", body: "SSL checkout · Export documents · Trade practices" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-[#081525] text-cream-100">
      <div className="border-y border-white/10 bg-[#0B1D36]">
        <div className="mx-auto grid max-w-[1320px] gap-6 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p) => (
            <div key={p.title} className="flex gap-3">
              <p.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" />
              <div>
                <p className="text-sm font-medium">{p.title}</p>
                <p className="mt-1 text-xs text-cream-100/60">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-[1320px] gap-8 px-5 py-10 md:grid-cols-4 md:gap-10 md:py-14">
        <div className="md:col-span-1">
          <BrandLogo size="footer" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/65">
            Premium nautical instruments, handcrafted brass décor and custom manufacturing from India — exporter, manufacturer &amp; supplier.
          </p>
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-cream-100/50">
            Corporate Office &amp; Factory
            <br />
            Rampur Chungi, Doon School Road
            <br />
            Green Park Colony, Lane No. 9
            <br />
            Roorkee-247667, Uttarakhand, India
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs uppercase tracking-[0.28em] text-[#C9A84C]">{col.title}</p>
            <ul className="mt-4 space-y-2">
              {col.links.map(([label, href]) => (
                <li key={`${col.title}-${label}`}>
                  <Link href={href} className="text-sm text-cream-100/75 hover:text-[#C9A84C]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-cream-100/50 sm:flex-row">
          <p>© 2026 Marina Muse International. Exporter · Manufacturer · Supplier.</p>
          <p className="flex flex-wrap justify-center gap-4">
            <span>Premium Nautical Instruments</span>
            <span>Handcrafted Brass Décor</span>
            <span>Custom Manufacturing</span>
          </p>
          <div className="flex items-center gap-3 text-white/70">
            <a href="#" aria-label="Facebook" className="hover:text-[#C9A84C]">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#C9A84C]">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-[#C9A84C]">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#C9A84C]">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
