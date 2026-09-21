"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { heroImg } from "@/lib/images";

const slides = [
  {
    src: heroImg.compass,
    alt: "Antique brass compass and magnifier on a maritime chart",
    title: "Crafted in Brass.\nDesigned to Last.",
    text: "Discover premium nautical instruments, handcrafted brass décor and custom-made products from India.",
  },
  {
    src: heroImg.telescope,
    alt: "Vintage brass nautical telescope",
    title: "Instruments of\nthe Open Sea.",
    text: "Telescopes, spyglasses and officer pieces finished by hand in our Roorkee factory.",
  },
  {
    src: heroImg.goldCompass,
    alt: "Gold compass on a nautical map",
    title: "True North,\nin Solid Brass.",
    text: "Working compasses for collectors, hotels and corporate gifting — engraved on request.",
  },
  {
    src: heroImg.harbor,
    alt: "Harbour with working vessels",
    title: "Built for Business.\nShipped Worldwide.",
    text: "Wholesale lots, OEM logos and export documents from India to 46 countries.",
  },
  {
    src: heroImg.sail,
    alt: "Classic sailing ship at sea",
    title: "Nautical Décor\nfor Homes & Hotels.",
    text: "Ship wheels, lanterns, anchors and diving helmets — statement brass for every interior.",
  },
];

export function HomeHero() {
  const [i, setI] = useState(0);
  const slide = slides[i];

  useEffect(() => {
    const id = window.setInterval(() => {
      setI((n) => (n === slides.length - 1 ? 0 : n + 1));
    }, 5500);
    return () => window.clearInterval(id);
  }, []);

  function prev() {
    setI((n) => (n === 0 ? slides.length - 1 : n - 1));
  }
  function next() {
    setI((n) => (n === slides.length - 1 ? 0 : n + 1));
  }

  return (
    <section className="relative h-[78vh] min-h-[560px] overflow-hidden bg-[#1a140c] text-cream-50">
      {slides.map((s, idx) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          fill
          priority={idx === 0}
          className={`object-cover object-[68%_center] transition-opacity duration-700 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />

      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="relative mx-auto flex h-full max-w-[1320px] items-center px-5 py-16">
        <div className="max-w-xl">
          <h1 className="font-serif text-[3.2rem] leading-[1.05] tracking-tight text-white md:text-7xl">
            {slide.title.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/85">{slide.text}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/shop" className="btn-gold">
              B2C Retail Collection
            </Link>
            <Link href="/wholesale" className="btn-outline">
              B2B Wholesale Collection
            </Link>
          </div>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2.5 text-sm text-white/90 hover:text-gold-300"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/50">
              <Play className="h-3 w-3 fill-current" />
            </span>
            Watch Our Story
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.src}
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
