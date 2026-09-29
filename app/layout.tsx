import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/AppShell";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: {
    default: "Marina Muse International — Exporter, Manufacturer & Supplier",
    template: "%s · Marina Muse International",
  },
  description:
    "Premium nautical instruments, handcrafted brass décor and custom-made products from India. Wholesale and global shipping.",
  icons: {
    icon: "/newlogo.png",
    apple: "/newlogo.png",
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
        className="flex min-h-screen flex-col font-sans antialiased"
        suppressHydrationWarning
      >
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
