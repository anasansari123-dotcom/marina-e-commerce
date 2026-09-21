import Link from "next/link";
import { Compass, ShieldCheck, Sparkles } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { TopBarSearch } from "./TopBarSearch";

export function TopBar() {
  return (
    <div className="relative z-50 bg-[#081525] text-[11px] text-[#d9c9a3]">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-2 px-3 py-[7px] sm:gap-4 sm:px-5">
        <div className="hidden items-center gap-4 md:flex">
          <span className="inline-flex items-center gap-1.5">
            <Compass className="h-3 w-3 text-[#C9A84C]" />
            Worldwide Shipping
          </span>
          <span className="text-white/20">|</span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3 w-3 text-[#C9A84C]" />
            Premium Quality
          </span>
          <span className="text-white/20">|</span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-[#C9A84C]" />
            Custom Manufacturing
          </span>
        </div>
        <p className="min-w-0 flex-1 truncate pr-2 md:hidden">Worldwide Shipping</p>
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <LanguageSwitcher />
          <span className="text-white/20">|</span>
          <TopBarSearch />
          <span className="hidden text-white/20 sm:inline">|</span>
          <Link href="/wholesale/quote" className="hidden text-[#C9A84C] hover:text-[#e0c87a] sm:inline">
            Wholesale? Get a Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
