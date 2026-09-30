import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Check,
  Eye,
  Factory,
  FileText,
  Mail,
  Maximize2,
  MessageCircle,
  Settings,
  Tag,
  Truck,
} from "lucide-react";
import { CustomFaq } from "@/components/CustomFaq";
import { img } from "@/lib/images";
import { companyWhatsApp } from "@/lib/company";

export const metadata: Metadata = {
  title: "Custom Manufacturing",
  description:
    "Custom brass telescopes and binoculars manufactured in our own factory. Size, lens, finish, tripod, private label and wholesale programmes.",
};

const WHATSAPP = companyWhatsApp;

const reasons = [
  { icon: Factory, title: "Own Factory Manufacturing", body: "Direct from our factory to you — no middlemen." },
  { icon: Maximize2, title: "Custom Size & Design", body: "Any size, any design, we make it for you." },
  { icon: Eye, title: "Custom Lens & Optical Specifications", body: "Choose your lens size, magnification and viewing range." },
  { icon: Settings, title: "Brass, Wood & Leather Finish", body: "Premium materials with multiple finish options." },
  { icon: BadgeCheck, title: "Custom Tripod & Stand", body: "Brass, wood or steel tripod/stand options." },
  { icon: Boxes, title: "Bulk & Wholesale Orders", body: "For retailers, resellers and business partners." },
  { icon: Tag, title: "Private Label / Business Orders", body: "Your brand, our quality." },
  { icon: Truck, title: "Global Shipping", body: "Safe and reliable delivery worldwide." },
];

const customizable = [
  { label: "Product Size", image: img.tripodWood },
  { label: "Lens", image: img.magnifier },
  { label: "Magnification", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80" },
  { label: "Brass Finish", image: img.telescope },
  { label: "Wood", image: img.workshop },
  { label: "Leather", image: img.binoculars },
  { label: "Tripod/Stand", image: img.tripodSpyglass },
  { label: "Quantity", image: img.gift },
  { label: "Packaging", image: img.antiques5 },
];

const process = [
  { n: "1", icon: Mail, title: "Send Your Requirements", body: "Tell us what you need." },
  { n: "2", icon: FileText, title: "Design & Specifications", body: "We confirm design, size and details." },
  { n: "3", icon: Tag, title: "Price Confirmation", body: "Get a clear quote with timeline." },
  { n: "4", icon: Settings, title: "Manufacturing", body: "Skilled craftsmanship at our factory." },
  { n: "5", icon: BadgeCheck, title: "Quality Check", body: "Every piece is checked for perfection." },
  { n: "6", icon: Truck, title: "Worldwide Shipping", body: "Safe and reliable delivery to your location." },
];

const buyers = [
  "Retailers",
  "Hotels & Resorts",
  "Interior / Lifestyle Businesses",
  "Export Orders",
  "International Buyers",
];

export default function CustomManufacturingPage() {
  return (
    <div className="bg-white">
      <section className="relative min-h-[38vh] overflow-hidden bg-[#0B1D36] text-white md:min-h-[48vh]">
        <Image
          src="/custom-manufacturing-hero.jpg"
          alt="Custom brass telescope and binoculars on a workshop table"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081525]/88 via-[#081525]/40 to-transparent" />
        <div className="relative mx-auto flex min-h-[38vh] max-w-[1200px] items-center px-5 py-10 md:min-h-[48vh] md:py-14">
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl leading-[1.05] md:text-6xl">Custom Manufacturing</h1>
            <p className="mt-4 font-serif text-xl text-white/95 md:text-[1.85rem]">
              Custom Brass Telescopes &amp; Binoculars
              <br />
              Manufactured in Our Own Factory
            </p>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/80">
              We create custom-made telescopes and binoculars as per your requirements. Your design, our
              craftsmanship.
            </p>
            <Link href="/wholesale/quote" className="btn-gold mt-8 gap-2">
              Request a Custom Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-10 md:py-14">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-center font-serif text-3xl md:text-4xl">
            Why Choose Our Custom Manufacturing?
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6">
            {reasons.map((r) => (
              <div key={r.title} className="min-w-0 text-center">
                <div className="mx-auto grid h-[84px] w-[84px] place-items-center rounded-full bg-[#0B1D36] text-[#C9A84C]">
                  <r.icon className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-navy-900">{r.title}</h3>
                <p
                  className={
                    r.title === "Custom Lens & Optical Specifications"
                      ? "mt-2 max-md:whitespace-normal whitespace-nowrap text-[12px] leading-snug tracking-tight text-navy-600"
                      : "mt-2 text-[13px] leading-relaxed text-navy-600"
                  }
                >
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F2] px-5 py-10 md:py-14">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-center font-serif text-3xl md:text-4xl">What Can Be Customized?</h2>
          <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 lg:gap-3">
              {customizable.map((c) => (
                <div key={c.label} className="min-w-0 text-center">
                  <div className="relative mx-auto aspect-square w-full max-w-[96px] overflow-hidden rounded-full border-[3px] border-[#C9A84C]/70 shadow-soft">
                    <Image src={c.image} alt={c.label} fill className="object-cover" />
                  </div>
                  <p className="mt-2 text-[11px] font-medium leading-tight text-navy-900 sm:mt-3 sm:text-sm">
                    {c.label}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0B1D36] px-5 py-10 text-white md:py-14">
        <Image src="/5-slide.jpeg" alt="" fill sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-[#0B1D36]/55" />
        <div className="relative mx-auto max-w-[1200px]">
          <h2 className="text-center font-serif text-3xl md:text-4xl">Our Custom Manufacturing Process</h2>
          <div className="mt-8 flex flex-wrap items-start justify-center gap-y-8">
            {process.map((step, i) => (
              <div key={step.title} className="flex items-start">
                <div className="w-[150px] text-center md:w-[160px]">
                  <div className="mx-auto grid h-[72px] w-[72px] place-items-center rounded-full bg-[#C9A84C] text-[#0B1D36]">
                    <step.icon className="h-7 w-7" strokeWidth={1.75} />
                  </div>
                  <p className="mt-4 text-sm font-semibold">
                    {step.n}. {step.title}
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-white/75">{step.body}</p>
                </div>
                {i < process.length - 1 ? (
                  <ArrowRight className="mt-6 hidden h-5 w-5 shrink-0 text-[#C9A84C] md:mx-1 lg:mx-2 lg:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-10 md:py-14">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
            <Image
              src={img.tripodSpyglass}
              alt="Brass telescope on a wooden tripod"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Wholesale &amp; Business Orders</h2>
            <p className="mt-5 font-medium text-navy-800">Perfect for:</p>
            <ul className="mt-3 space-y-2.5">
              {buyers.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-navy-800">
                  <Check className="h-4 w-4 shrink-0 text-[#C9A84C]" strokeWidth={2.5} />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-navy-600">
              Let’s grow together. We offer competitive pricing for bulk and long-term orders.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/wholesale" className="btn-gold">
                Wholesale collection
              </Link>
              <Link href="/wholesale/quote" className="btn-navy">
                Request a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F2] px-5 py-10 md:py-14">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={img.binoculars} alt="Brass binoculars in a presentation case" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-6">
              <CustomFaq />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0B1D36] px-5 py-10 text-center text-white md:py-14">
        <Image src="/2-slide.jpeg" alt="" fill sizes="100vw" className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-[#081525]/60" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl">Have a Custom Requirement?</h2>
          <p className="mt-4 text-white/80">
            Tell us what you need. Our team will review your requirements and provide a quotation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/wholesale/quote" className="btn-gold gap-2">
              Request a Custom Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-outline gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
