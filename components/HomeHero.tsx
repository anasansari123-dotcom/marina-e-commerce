"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const btnBase =
  "inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-full px-3 py-2.5 text-center text-[9px] font-semibold uppercase tracking-[0.06em] transition duration-300 sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.1em]";

const slides = [
  {
    src: "/1-slide.jpeg",
    pos: "object-[40%_center]",
    alt: "Brass spyglass and tripod telescope on a mountain overlook at sunset",
    eyebrow: "Brass optics · Nautical · Exploration",
    title: "See More.\nExplore Further.",
    text: "Handcrafted brass telescopes and binoculars — real viewing, premium finish, worldwide shipping.",
    accent: "#E8D5A3",
    primaryCls: "bg-[#F3E6C8] text-[#0B1D36] hover:bg-[#fff1d0]",
    secondaryCls: "border border-[#C9A84C] text-[#E8D5A3] hover:bg-[#C9A84C]/10",
  },
  {
    src: "/2-slide.jpeg",
    pos: "object-[92%_center]",
    alt: "Suit of armour, helmets, diving helmet and brass instruments on a Mediterranean harbour terrace",
    eyebrow: "Armour · Instruments · Heritage",
    title: "Forged for\nCollectors.",
    text: "Armour, helmets, diving pieces and brass instruments from our Roorkee factory.",
    accent: "#E08A2C",
    primaryCls: "bg-[#E08A2C] text-[#1a1208] hover:bg-[#f09a3c]",
    secondaryCls: "border border-[#E08A2C] text-[#F3D5A0] hover:bg-[#E08A2C]/15",
  },
  {
    src: "/3-slide.jpeg",
    pos: "object-[80%_center]",
    alt: "Hammered copper cookware and brass serveware overlooking the Bosphorus at sunset",
    eyebrow: "Kitchen · Table · Hospitality",
    title: "Brass & Copper\nfor the Table.",
    text: "Serveware, cookware and cutlery programmes for homes, hotels and wholesale.",
    accent: "#C9A227",
    primaryCls: "bg-[#C9A227] text-[#1a1408] hover:bg-[#d4b03a]",
    secondaryCls: "border border-[#B87333] text-[#E8C4A0] hover:bg-[#B87333]/15",
  },
  {
    src: "/4-slide.jpeg",
    pos: "object-[78%_center]",
    alt: "Brass globe, telescope and lanterns with a cargo ship and world trade routes behind",
    eyebrow: "Export · Wholesale · OEM",
    title: "Built for Business.\nShipped Worldwide.",
    text: "Wholesale lots, custom logos and export documents from India.",
    accent: "#E0B455",
    primaryCls: "bg-[#E0B455] text-[#1a1208] hover:bg-[#ecc46a]",
    secondaryCls: "border border-[#E0B455] text-[#F3DDA8] hover:bg-[#E0B455]/15",
  },
  {
    src: "/5-slide.jpeg",
    pos: "object-[72%_center]",
    alt: "Nautical study with brass telescope, globe, hourglass, compass and lanterns",
    eyebrow: "Décor · Interiors · Gifting",
    title: "Nautical Décor\nfor Every Room.",
    text: "Lanterns, globes, clocks and brass accents for homes and hotels.",
    accent: "#D4AF37",
    primaryCls: "bg-[#D4AF37] text-[#1a1408] hover:bg-[#e0c04a]",
    secondaryCls: "border border-[#D4AF37] text-[#E8D5A3] hover:bg-[#D4AF37]/10",
  },
];

export function HomeHero() {
  const [i, setI] = useState(0);
  const touchX = useRef<number | null>(null);
  const slide = slides[i];

  useEffect(() => {
    const id = window.setInterval(() => {
      setI((n) => (n === slides.length - 1 ? 0 : n + 1));
    }, 6000);
    return () => window.clearInterval(id);
  }, [i]);

  function prev() {
    setI((n) => (n === 0 ? slides.length - 1 : n - 1));
  }
  function next() {
    setI((n) => (n === slides.length - 1 ? 0 : n + 1));
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#081525] text-white">
      <div
        className="relative h-[min(80svh,620px)] min-h-[500px] w-full overflow-hidden sm:h-[580px] lg:aspect-[1600/633] lg:h-auto lg:max-h-[760px] lg:min-h-0"
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (dx > 40) prev();
          if (dx < -40) next();
          touchX.current = null;
        }}
      >
        {slides.map((s, idx) => (
          <Image
            key={s.src}
            src={s.src}
            alt={s.alt}
            fill
            priority={idx === 0}
            sizes="100vw"
            className={`object-cover ${s.pos} transition-opacity duration-700 lg:object-center ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#081525]/85 via-[#081525]/55 to-[#081525]/35 lg:hidden" />

        <button
          type="button"
          aria-label="Previous slide"
          onClick={prev}
          className="absolute left-3 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#081525]/40 text-white backdrop-blur-sm hover:bg-[#081525]/70 sm:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={next}
          className="absolute right-3 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#081525]/40 text-white backdrop-blur-sm hover:bg-[#081525]/70 sm:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 gap-2 sm:bottom-5">
          {slides.map((s, idx) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all sm:h-2 ${idx === i ? "w-6 sm:w-7" : "w-1.5 bg-white/60 hover:bg-white sm:w-2"}`}
              style={idx === i ? { backgroundColor: slide.accent } : undefined}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 z-20 flex items-center px-5 sm:px-16 lg:px-20">
          <div className="mx-auto w-full max-w-[1320px]">
            <div className="pointer-events-auto w-full max-w-[34rem] text-left lg:rounded-2xl lg:bg-[#081525]/80 lg:px-8 lg:py-7 lg:shadow-[0_20px_50px_rgba(0,0,0,0.35)] lg:ring-1 lg:ring-white/15 lg:backdrop-blur-sm">
              <p
                className="text-[10px] uppercase tracking-[0.26em] drop-shadow transition-colors duration-500 sm:text-[11px]"
                style={{ color: slide.accent }}
              >
                {slide.eyebrow}
              </p>
              <h1 className="mt-2 font-serif text-[2rem] leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:mt-3 sm:text-4xl xl:text-[2.75rem]">
                {slide.title.split("\n").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-white/90 drop-shadow sm:mt-4 sm:text-[15px]">{slide.text}</p>
              <div className="mt-5 flex flex-wrap items-center justify-start gap-2 sm:mt-7 sm:gap-3">
                <Link href="/shop" className={`${btnBase} ${slide.primaryCls}`}>
                  B2C Retail Collection
                </Link>
                <Link href="/wholesale" className={`${btnBase} ${slide.secondaryCls}`}>
                  B2B Wholesale Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
