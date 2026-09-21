import Link from "next/link";
import Image from "next/image";
import { ShopNowCatalog } from "@/components/ShopNowCatalog";
import { heroImg } from "@/lib/images";

export default function WholesalePage() {
  return (
    <div className="bg-[#FAF7F2]">
      <section className="relative min-h-[58vh] overflow-hidden bg-navy-950 text-cream-50">
        <Image
          src={heroImg.compass}
          alt="Antique brass compass on a nautical chart"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081525]/88 via-[#081525]/50 to-[#081525]/15" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-[1320px] items-center justify-between gap-8 px-5 py-16">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C9A84C]">B2B / Wholesale</p>
            <h1 className="mt-3 font-serif text-5xl leading-[1.08] md:text-[3.35rem]">
              Built for Businesses.
              <br />
              Priced for Volume.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/80">
              Partner with us for premium nautical & brass products. Competitive pricing, reliable supply and global logistics.
            </p>
            <div className="relative z-10 mt-8 flex flex-wrap items-center gap-3">
              <Link href="/wholesale/register" className="btn-gold">
                Create Wholesale Account
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Already a member?{" "}
              <Link href="/login" className="text-[#C9A84C] underline-offset-2 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#eee7db] bg-white">
        <ShopNowCatalog />
      </section>
    </div>
  );
}
