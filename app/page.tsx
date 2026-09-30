import Link from "next/link";
import Image from "next/image";
import { reviews, trustStats } from "@/lib/products";
import { HomeHero } from "@/components/HomeHero";
import { HomeCollections } from "@/components/HomeCollections";
import { ShieldCheck } from "lucide-react";
import { img } from "@/lib/images";

export default function HomePage() {
  return (
    <div className="bg-[#FAF7F2]">
      <HomeHero />
      <HomeCollections />

      <section className="relative overflow-hidden bg-navy-900 py-10 text-cream-50 md:py-14">
        <Image
          src="/contact-us-slide.jpeg"
          alt="Brass globe, binoculars and export cartons with a cargo ship"
          fill
          sizes="100vw"
          className="object-cover object-right opacity-45"
        />
        <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 px-5 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#C9A84C]">B2B / Wholesale</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Built for Businesses.
              <br />
              Priced for Volume.
            </h2>
            <p className="mt-5 max-w-lg text-cream-100/75">
              Partner with us for premium nautical & brass products. Competitive pricing, reliable supply and global logistics — from 50 pieces to container programmes.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Link href="/wholesale/register" className="btn-gold w-full sm:w-auto">
                Create Wholesale Account
              </Link>
              <Link href="/login" className="btn-outline w-full sm:w-auto">
                Already a member? Login
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {trustStats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-navy-950/60 p-6 backdrop-blur">
                <p className="font-serif text-4xl text-[#C9A84C]">{s.value}</p>
                <p className="mt-2 text-sm text-cream-100/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F2] px-5 py-10 md:py-14">
        <div className="mx-auto grid max-w-[1320px] items-center gap-8 md:grid-cols-2">
          <div className="grid h-[400px] w-full grid-cols-2 grid-rows-2 gap-3 sm:h-[480px] md:h-[540px]">
            <div className="relative col-span-2 overflow-hidden rounded-3xl bg-[#1a1510] sm:col-span-1 sm:row-span-2">
              <Image
                src="/about-us-slide.jpeg"
                alt="Brass telescope, globe, lantern and compass"
                fill
                sizes="(max-width: 640px) 130vw, 1400px"
                className="object-cover object-[82%_center]"
              />
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-[#1a1510]">
              <Image
                src={img.compassGold}
                alt="Antique brass compass on a nautical chart"
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-[#1a1510]">
              <Image
                src={img.binoculars}
                alt="Antique brass binoculars"
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#8C6E28]">From Roorkee, Uttarakhand, India</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">The foundry behind the finish</h2>
            <p className="mt-5 leading-relaxed text-navy-700">
              Marina Muse works with master casters, engravers and polishers whose families have worked brass for generations. We age, assemble and inspect every compass, lantern and helm before it leaves the atelier.
            </p>
            <ul className="mt-6 space-y-3 text-navy-800">
              {[
                "Solid brass — not plated zinc",
                "Hand patina, not a spray antique",
                "OEM logos, packaging and private label",
                "Export documentation for 30+ countries",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-[#C9A84C]" />
                  {line}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-navy mt-8">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F1EA] px-5 py-10 md:py-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-px w-16 bg-[#C9A84C]" />
            <h2 className="font-serif text-4xl text-navy-900 md:text-5xl">What Our Customers Say</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {reviews.filter((r) => ["James W.", "Priya S.", "Marco D."].includes(r.name)).map((r) => (
              <blockquote key={r.name} className="rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgba(26,20,12,0.06)]">
                <p className="font-serif text-2xl text-navy-900">“{r.title}”</p>
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
