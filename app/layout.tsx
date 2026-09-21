import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/AppShell";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Marina Muse International — Exporter, Manufacturer & Supplier",
    template: "%s · Marina Muse International",
  },
  description:
    "Premium nautical instruments, handcrafted brass décor and custom-made products from India. Wholesale, corporate gifts and global shipping.",
  icons: {
    icon: "/logo1.png",
    apple: "/logo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${outfit.variable} flex min-h-screen flex-col font-sans`}
        suppressHydrationWarning
      >
        <Providers>
          <AppShell footer={<Footer />}>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
