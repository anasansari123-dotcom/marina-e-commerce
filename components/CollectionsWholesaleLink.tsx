"use client";

import { WholesaleNavLink } from "@/components/WholesaleNavLink";

export function CollectionsWholesaleLink() {
  return (
    <p className="mt-4 text-center">
      <WholesaleNavLink
        callbackUrl="/wholesale"
        className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3A6EA5] hover:underline"
      >
        B2B · Wholesale collections →
      </WholesaleNavLink>
    </p>
  );
}
