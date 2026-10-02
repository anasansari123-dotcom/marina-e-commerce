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
import { company } from "@/lib/company";

const columns = [
  {
    title: "Shop",
    links: [
      ["B2C Retail Collection", "/shop"],
      ["Collections", "/collections"],
      ["My Wishlist", "/wishlist"],
      ["Add to Cart", "/cart"],
    ],
  },
  {
    title: "Business with Us",
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
      ["Contact Us", "/contact"],
      ["Blog", "/blog"],
      ["Shipping", "/shipping"],
    ],
  },
];

const socials = [
  { label: "Facebook", Icon: Facebook },
  { label: "Instagram", Icon: Instagram },
  { label: "YouTube", Icon: Youtube },
  { label: "LinkedIn", Icon: Linkedin },
];

const promises = [
  { icon: CreditCard, title: "Multiple Payment Options", body: "Cards, UPI, bank transfer & trade terms" },
  { icon: MessageCircle, title: "WhatsApp & Email", body: "Quotes and order updates, same day" },
  { icon: Sparkles, title: "AI Search & Recommendations", body: "Smarter nautical finds, faster results" },
  { icon: ShieldCheck, title: "Secure & Trusted", body: "SSL checkout · Export documents · Trade Terms" },
];

export function Footer() {
  return (
    <footer className="mt-auto overflow-x-hidden bg-[#031D38] text-cream-100">
      <div className="border-y border-white/10 bg-[#0D3159]">
        <div className="mx-auto grid max-w-[1320px] gap-5 px-5 py-5 sm:grid-cols-2 lg:py-6 xl:flex xl:justify-between xl:gap-6">
          {promises.map((p) => (
            <div key={p.title} className="flex gap-3">
              <p.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" />
              <div className="min-w-0">
                <p className="whitespace-nowrap text-sm font-medium">{p.title}</p>
                <p className="mt-1 whitespace-nowrap text-xs text-cream-100/60">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-5 py-8 md:py-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <BrandLogo size="footer" />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream-100/70">
              Premium nautical instruments, handcrafted brass décor and custom manufacturing from India — exporter,
              manufacturer &amp; supplier.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#C9A84C]">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map(([label, href]) => (
                  <li key={`${col.title}-${label}`}>
                    <Link href={href} className="text-sm text-cream-100/75 transition hover:text-[#C9A84C]">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Corporate Office &amp; Factory</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream-100/65">
              {company.address[0]}, {company.address[1]}, {company.address[2]}
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {socials.map(({ label, Icon }) => (
              <span
                key={label}
                aria-label={label}
                aria-disabled="true"
                title={label}
                className="inline-flex h-10 w-10 cursor-default items-center justify-center rounded-full bg-[#C9A84C] text-[#031D38]"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1320px] px-5 py-4 pb-[4.5rem] text-center text-xs text-cream-100/45 sm:pb-4">
          © 2026 {company.name}. Exporter · Manufacturer · Supplier.
        </div>
      </div>
    </footer>
  );
}
