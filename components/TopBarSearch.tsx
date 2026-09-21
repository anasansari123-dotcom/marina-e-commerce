"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { SearchModal } from "./SearchModal";

export function TopBarSearch() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Search"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 text-[#d9c9a3] hover:text-[#C9A84C]"
      >
        <Search className="h-3 w-3 text-[#C9A84C]" />
        <span className="hidden sm:inline">Search</span>
      </button>
      <SearchModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
