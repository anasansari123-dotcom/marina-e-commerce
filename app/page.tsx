import Link from "next/link";
import Image from "next/image";
import { reviews } from "@/lib/products";
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

      <section className="relative overflow-hidden bg-[#081525] py-12 text-cream-50 md:py-16">
        <Image
          src="/contact-us-slide.jpeg"
          alt="Brass globe, binoculars and export cartons with a cargo ship"
          fill
          sizes="100vw"
          className="object-cover object-[68%_center] opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081525] via-[#081525]/78 to-[#081525]/20" />
        <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-5 text-center md:grid-cols-[minmax(0,1.15fr)_minmax(320px,420px)] md:gap-10 md:text-left">
          <div className="max-w-2xl md:max-w-none">
            <p className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9A84C] md:text-[13px]">
              B2B / Wholesale
            </p>
            <h2 className="mt-3 font-serif text-[2.1rem] leading-[1.12] md:text-[3.35rem] lg:text-[3.75rem]">
              Built for Businesses.
              <br />
              Priced for Volume.
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-[16px] leading-relaxed text-cream-100/85 md:mx-0 md:text-[18px]">
              Partner with us for premium nautical & brass products. Competitive pricing, reliable supply and global logistics — from 50 pieces to container programmes.
            </p>
            <p className="mt-5 flex items-center justify-center gap-2 text-[12px] uppercase tracking-[0.14em] text-[#C9A84C] sm:tracking-[0.2em] md:justify-start md:text-[13px]">
              <MapPin className="h-4 w-4 shrink-0 md:h-5 md:w-5" />
              From Roorkee, Uttarakhand, India
            </p>
          </div>
          <div className="mx-auto w-full max-w-md rounded-2xl border border-[#C9A84C]/30 bg-[#081525]/72 p-5 shadow-[0_24px_50px_rgba(0,0,0,0.4)] backdrop-blur-md md:mx-0 md:ml-auto md:p-7">
            <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C9A84C] md:text-[12px]">
              Open a trade account
            </p>
            <div className="flex flex-col gap-3.5">
              <Link href="/wholesale/register" className="btn-gold w-full">
                Create Wholesale Account
              </Link>
              <Link href="/login" className="btn-outline w-full">
                Already a member? Login
              </Link>
              <Link href="/about" className="btn-outline w-full">
                Our Story
              </Link>
            </div>
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
