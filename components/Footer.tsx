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
import { company, companyWhatsApp } from "@/lib/company";

const columns = [
  {
    title: "Shop",
    links: [
      ["B2C Retail Collection", "/shop"],
      ["Collections", "/collections"],
      ["My Wishlist", "/wishlist"],
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
      ["Contact Us", "/contact"],
      ["Blog", "/blog"],
      ["Shipping", "/shipping"],
    ],
  },
];

const socials = [
  { href: "https://www.facebook.com/", label: "Facebook", Icon: Facebook },
  { href: "https://www.instagram.com/", label: "Instagram", Icon: Instagram },
  { href: "https://www.youtube.com/", label: "YouTube", Icon: Youtube },
  { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: Linkedin },
];

const promises = [
  { icon: CreditCard, title: "Multiple Payment Options", body: "Cards, UPI, bank transfer & trade terms" },
  { icon: MessageCircle, title: "WhatsApp & Email", body: "Quotes and order updates, same day" },
  { icon: Sparkles, title: "AI Search & Recommendations", body: "Smarter nautical finds, faster results" },
  { icon: ShieldCheck, title: "Secure & Trusted", body: "SSL checkout · Export documents · Trade practices" },
];

export function Footer() {
  return (
    <footer className="mt-auto overflow-x-hidden bg-[#081525] text-cream-100">
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

      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div>
          <BrandLogo size="footer" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/70">
            Premium nautical instruments, handcrafted brass décor and custom manufacturing from India — exporter,
            manufacturer &amp; supplier.
          </p>
          <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Corporate Office &amp; Factory</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream-100/65">
            {company.address[0]}
            <br />
            {company.address[1]}
            <br />
            {company.address[2]}
          </p>
          <div className="mt-5 space-y-1.5 text-sm text-cream-100/80">
            {company.emails.map((mail) => (
              <a key={mail} href={`mailto:${mail}`} className="block break-all hover:text-[#C9A84C]">
                {mail}
              </a>
            ))}
            <a href={companyWhatsApp} target="_blank" rel="noreferrer" className="block hover:text-[#C9A84C]">
              WhatsApp {company.phone}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A84C] text-[#081525] hover:bg-[#d4b45a]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#C9A84C]">{col.title}</p>
            <ul className="mt-4 space-y-2.5">
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

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1320px] px-5 py-5 pb-8 text-center text-xs text-cream-100/45">
          © 2026 {company.name}. Exporter · Manufacturer · Supplier.
        </div>
      </div>
    </footer>
  );
}
