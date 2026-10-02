import Link from "next/link";
import Image from "next/image";
import { reviews, trustStats } from "@/lib/products";
import { HomeHero } from "@/components/HomeHero";
import { HomeCollections } from "@/components/HomeCollections";
import { HomeAllProducts } from "@/components/HomeAllProducts";
import { MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-[#FAF7F2]">
      <HomeHero />
      <HomeCollections />
      <HomeAllProducts />

      <section className="relative overflow-hidden bg-navy-900 py-10 text-cream-50 md:py-14">
        <Image
          src="/contact-us-slide.jpeg"
          alt="Brass globe, binoculars and export cartons with a cargo ship"
          fill
          sizes="100vw"
          className="object-cover object-right opacity-45"
        />
        <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 px-5 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#C9A84C]">B2B / Wholesale</p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">
              Built for Businesses.
              <br />
              Priced for Volume.
            </h2>
            <p className="mt-5 max-w-lg text-cream-100/75">
              Partner with us for premium nautical & brass products. Competitive pricing, reliable supply and global logistics — from 50 pieces to container programmes.
            </p>
            <p className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#C9A84C] sm:tracking-[0.25em]">
              <MapPin className="h-4 w-4 shrink-0" />
              From Roorkee, Uttarakhand, India
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Link href="/wholesale/register" className="btn-gold w-full sm:w-auto">
                Create Wholesale Account
              </Link>
              <Link href="/login" className="btn-outline w-full sm:w-auto">
                Already a member? Login
              </Link>
              <Link href="/about" className="btn-outline w-full sm:w-auto">
                Our Story
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {trustStats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-navy-950/60 p-4 backdrop-blur md:p-6">
                <p className="font-serif text-3xl md:text-4xl text-[#C9A84C]">{s.value}</p>
                <p className="mt-2 text-sm text-cream-100/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F1EA] px-5 py-10 md:py-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center">
            <div className="mx-auto mb-3 h-px w-16 bg-[#C9A84C]" />
            <h2 className="whitespace-nowrap font-serif text-[clamp(1.5rem,7.4vw,2.25rem)] text-navy-900 md:text-5xl">What Our Customers Say</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
            {reviews.filter((r) => ["James W.", "Priya S.", "Marco D."].includes(r.name)).map((r) => (
              <blockquote key={r.name} className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(26,20,12,0.06)] md:p-8">
                <p className="font-serif text-xl text-navy-900 md:text-2xl">“{r.title}”</p>
                <p className="mt-4 text-sm leading-relaxed text-navy-700">{r.body}</p>
                <p className="mt-6 text-sm font-medium text-navy-900">
                  {r.name} · {r.location}
                </p>
                <p className="text-xs text-[#8C6E28]">{r.product}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
