import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Order",
  description: "Track a Marina Muse retail or wholesale shipment with your order number and email.",
};

export default function TrackOrderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
