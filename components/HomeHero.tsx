"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { heroImg } from "@/lib/images";

const slides = [
  {
    src: "/1.jpeg",
    alt: "Marina Muse International — brass binoculars and telescope",
    eyebrow: "Brass optics · Nautical · Exploration",
    title: "See More.\nExplore Further.",
    text: "Handcrafted brass telescopes and binoculars — real viewing, premium finish, worldwide shipping.",
  },
  {
    src: "/2.jpeg",
    alt: "Marina Muse International — armour, helmets and nautical instruments",
    eyebrow: "Armour · Instruments · Heritage",
    title: "Forged for\nCollectors.",
    text: "Armour, helmets, diving pieces and brass instruments from our Roorkee factory.",
  },
  {
    src: "/3.jpeg",
    alt: "Marina Muse International — brass and copper kitchenware",
    eyebrow: "Kitchen · Table · Hospitality",
    title: "Brass & Copper\nfor the Table.",
    text: "Serveware, cookware and cutlery programmes for homes, hotels and wholesale.",
  },
  {
    src: heroImg.harbor,
    alt: "Harbour with working vessels — built for business, shipped worldwide",
    eyebrow: "Export · Wholesale · OEM",
    title: "Built for Business.\nShipped Worldwide.",
    text: "Wholesale lots, custom logos and export documents from India.",
  },
  {
    src: "/5.jpeg",
    alt: "Marina Muse International — nautical brass décor",
    eyebrow: "Décor · Interiors · Gifting",
    title: "Nautical Décor\nfor Every Room.",
    text: "Lanterns, globes, clocks and brass accents for homes and hotels.",
  },
];

export function HomeHero() {
  const [i, setI] = useState(0);
  const slide = slides[i];

  useEffect(() => {
    const id = window.setInterval(() => {
      setI((n) => (n === slides.length - 1 ? 0 : n + 1));
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  function prev() {
    setI((n) => (n === 0 ? slides.length - 1 : n - 1));
  }
  function next() {
    setI((n) => (n === slides.length - 1 ? 0 : n + 1));
  }

  return (
    <section className="relative isolate h-[min(78vh,760px)] min-h-[480px] overflow-hidden bg-[#081525] text-white md:min-h-[580px]">
      <div className="absolute inset-0 z-0">
        {slides.map((s, idx) => (
          <Image
            key={s.src}
            src={s.src}
            alt={s.alt}
            fill
            priority={idx === 0}
            sizes="100vw"
            className={`object-cover object-center transition-opacity duration-700 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="relative z-20 mx-auto flex h-full max-w-[1320px] items-center px-5 py-12 sm:px-8">
        <div className="max-w-lg rounded-2xl bg-[#081525]/92 px-6 py-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] ring-1 ring-white/15 backdrop-blur-sm sm:px-8 sm:py-8">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#C9A84C]">{slide.eyebrow}</p>
          <h1 className="mt-3 font-serif text-[2rem] leading-[1.08] tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
            {slide.title.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-white/90">{slide.text}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link href="/shop" className="btn-gold w-full text-center sm:w-auto">
              Shop Now
            </Link>
            <Link href="/wholesale" className="btn-outline w-full text-center sm:w-auto">
              B2B Wholesale Collection
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#081525]/40 text-white backdrop-blur-sm hover:bg-[#081525]/70 sm:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#081525]/40 text-white backdrop-blur-sm hover:bg-[#081525]/70 sm:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === i ? "w-7 bg-[#C9A84C]" : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
