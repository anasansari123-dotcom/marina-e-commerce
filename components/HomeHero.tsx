"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const btnBase =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-center font-semibold uppercase transition duration-300";

const slides = [
  {
    src: "/hero-1.jpeg",
    alt: "See More. Explore Further. Handcrafted brass telescopes and binoculars on a mountain overlook at sunset",
    at: { left: "4.2%", top: "62%" },
    accent: "#E8D5A3",
    primaryCls: "bg-[#F3E6C8] text-[#0B1D36] hover:bg-[#fff1d0]",
    secondaryCls: "border border-[#C9A84C] bg-[#081525]/35 text-[#E8D5A3] backdrop-blur-sm hover:bg-[#C9A84C]/20",
  },
  {
    src: "/hero-2.jpeg",
    alt: "Forged for Collectors. Armour, helmets, diving pieces and brass instruments on a Mediterranean harbour terrace",
    at: { left: "50%", top: "55%", center: true },
    accent: "#E08A2C",
    primaryCls: "bg-[#E08A2C] text-[#1a1208] hover:bg-[#f09a3c]",
    secondaryCls: "border border-[#E08A2C] bg-[#081525]/35 text-[#F3D5A0] backdrop-blur-sm hover:bg-[#E08A2C]/20",
  },
  {
    src: "/hero-3.jpeg",
    alt: "Brass & Copper for the Table. Hammered copper cookware and brass serveware overlooking the Bosphorus",
    at: { left: "4.5%", top: "59%" },
    accent: "#C9A227",
    primaryCls: "bg-[#C9A227] text-[#1a1408] hover:bg-[#d4b03a]",
    secondaryCls: "border border-[#B87333] bg-[#081525]/35 text-[#E8C4A0] backdrop-blur-sm hover:bg-[#B87333]/20",
  },
  {
    src: "/hero-4.jpeg",
    alt: "Built for Business. Shipped Worldwide. Brass globe, telescope and lanterns with a cargo ship behind",
    at: { left: "5.5%", top: "57%" },
    accent: "#E0B455",
    primaryCls: "bg-[#E0B455] text-[#1a1208] hover:bg-[#ecc46a]",
    secondaryCls: "border border-[#E0B455] bg-[#081525]/35 text-[#F3DDA8] backdrop-blur-sm hover:bg-[#E0B455]/20",
  },
  {
    src: "/hero-5.jpeg",
    alt: "Nautical Décor for Every Room. Study with brass telescope, globe, hourglass, compass and lanterns",
    at: { left: "17.5%", top: "54%" },
    accent: "#D4AF37",
    primaryCls: "bg-[#D4AF37] text-[#1a1408] hover:bg-[#e0c04a]",
    secondaryCls: "border border-[#D4AF37] bg-[#081525]/35 text-[#E8D5A3] backdrop-blur-sm hover:bg-[#D4AF37]/20",
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
      <h1 className="sr-only">Marina Muse International — handcrafted brass, nautical and armour products</h1>
      <div
        className="relative mx-auto aspect-[1600/633] w-full max-w-[1920px] overflow-hidden"
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
            className={`object-cover transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        <div
          key={slide.src}
          className={`absolute z-20 flex animate-fadeIn items-center gap-1.5 sm:gap-2 md:gap-3 ${slide.at.center ? "-translate-x-1/2" : ""}`}
          style={{ left: slide.at.left, top: slide.at.top }}
        >
          <Link
            href="/shop"
            className={`${btnBase} px-2 py-1 text-[7px] tracking-[0.04em] shadow-[0_4px_12px_rgba(0,0,0,0.3)] sm:px-3 sm:py-1.5 sm:text-[9px] md:px-4 md:py-2 md:text-[10px] md:tracking-[0.1em] lg:px-6 lg:py-3 lg:text-[12px] 2xl:px-7 2xl:py-3.5 2xl:text-[13px] ${slide.primaryCls}`}
          >
            B2C Retail Collection
          </Link>
          <Link
            href="/wholesale"
            className={`${btnBase} px-2 py-1 text-[7px] tracking-[0.04em] sm:px-3 sm:py-1.5 sm:text-[9px] md:px-4 md:py-2 md:text-[10px] md:tracking-[0.1em] lg:px-6 lg:py-3 lg:text-[12px] 2xl:px-7 2xl:py-3.5 2xl:text-[13px] ${slide.secondaryCls}`}
          >
            B2B Wholesale Collection
          </Link>
        </div>

        <div className="absolute bottom-3 right-3 z-30 hidden gap-2 sm:flex lg:bottom-5 lg:right-5">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-[#081525]/45 text-white backdrop-blur-sm hover:bg-[#081525]/75 lg:h-10 lg:w-10"
          >
            <ChevronLeft className="h-4 w-4 lg:h-5 lg:w-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-[#081525]/45 text-white backdrop-blur-sm hover:bg-[#081525]/75 lg:h-10 lg:w-10"
          >
            <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5" />
          </button>
        </div>

        <div className="absolute bottom-2 left-1/2 z-30 flex -translate-x-1/2 gap-1.5 sm:bottom-4 sm:gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all sm:h-2 ${idx === i ? "w-5 sm:w-7" : "w-1.5 bg-white/60 hover:bg-white sm:w-2"}`}
              style={idx === i ? { backgroundColor: slide.accent } : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
