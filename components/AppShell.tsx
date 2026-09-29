"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { ChatWidget } from "./ChatWidget";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TopBar } from "./TopBar";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <div className="min-h-screen bg-[#F4F1EA]">{children}</div>;
  }

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        <TopBar />
        <Header />
      </div>
      <main className="flex-1 pt-[var(--site-nav)]">{children}</main>
      <Footer />
      <ChatWidget />
    </>
  );
}
