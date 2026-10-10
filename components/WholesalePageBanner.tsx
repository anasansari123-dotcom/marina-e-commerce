"use client";

import { BannerHero, type BannerHotspot } from "@/components/BannerHero";
import { useSession } from "next-auth/react";
import { canAccessWholesale } from "@/lib/wholesale-access";

const guestHotspots: BannerHotspot[] = [
  {
    href: "/login?mode=wholesale&view=register&callbackUrl=/wholesale",
    label: "Create Wholesale Account",
    left: 13.5,
    top: 57.6,
    width: 24.7,
    height: 10.2,
    mobile: { left: 13.8, top: 43.2, width: 30.8, height: 6.1 },
  },
  {
    href: "/login?mode=wholesale&callbackUrl=/wholesale",
    label: "Login",
    left: 26.9,
    top: 71.8,
    width: 4.5,
    height: 3.7,
    mobile: { left: 31.5, top: 51.8, width: 5.4, height: 3.1 },
  },
];

export function WholesalePageBanner() {
  const { data: session } = useSession();
  const wholesaleOk = canAccessWholesale(session?.user);

  return (
    <BannerHero
      src="/wholesaledekstop.jpeg"
      mobileSrc="/wholesalemobileview.jpeg"
      alt="B2B / Wholesale — Built for Businesses, Priced for Volume."
      title="B2B Wholesale — Built for Businesses. Priced for Volume."
      hotspots={wholesaleOk ? [] : guestHotspots}
    />
  );
}
