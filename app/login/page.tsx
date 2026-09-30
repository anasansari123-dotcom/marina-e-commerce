"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/Logo";

export default function LoginPage() {
  const router = useRouter();
  const [view, setView] = useState<"login" | "register">("login");
  const [mode, setMode] = useState<"customer" | "wholesale">("customer");

  return (
    <div className="mx-auto max-w-md px-4 py-10 md:py-12">
      <Link href="/" className="flex justify-center">
        <BrandLogo size="auth" priority />
      </Link>
      <h1 className="sr-only">{view === "login" ? "Login" : "Register"}</h1>
      <div className="mt-6 grid grid-cols-2 rounded-full bg-cream-300 p-1 text-sm">
        <button
          type="button"
          className={`rounded-full py-2 ${view === "login" ? "bg-white shadow" : ""}`}
          onClick={() => setView("login")}
        >
          Login
        </button>
        <button
          type="button"
          className={`rounded-full py-2 ${view === "register" ? "bg-white shadow" : ""}`}
          onClick={() => setView("register")}
        >
          Register
        </button>
      </div>
      <div className="mt-4 grid grid-cols-2 rounded-full bg-[#F4F1EA] p-1 text-sm">
        <button
          type="button"
          className={`rounded-full py-2 ${mode === "customer" ? "bg-white shadow" : ""}`}
          onClick={() => setMode("customer")}
        >
          Customer
        </button>
        <button
          type="button"
          className={`rounded-full py-2 ${mode === "wholesale" ? "bg-white shadow" : ""}`}
          onClick={() => setMode("wholesale")}
        >
          Wholesale
        </button>
      </div>
      <form
        className="mt-8 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (mode === "wholesale" && view === "register") {
            router.push("/wholesale/register");
            return;
          }
          router.push("/account");
        }}
      >
        {view === "register" ? <input className="input" required placeholder="Full name" /> : null}
        <input className="input" type="email" required placeholder="Email" />
        <input className="input" type="password" required placeholder="Password" />
        {view === "register" ? (
          <input className="input" type="password" required placeholder="Confirm password" />
        ) : null}
        <button className="btn-gold w-full">{view === "login" ? "Sign in" : "Create account"}</button>
      </form>
      {mode === "wholesale" && view === "register" ? (
        <p className="mt-4 text-center text-sm text-navy-600">
          Trade applications can also be completed on the{" "}
          <Link href="/wholesale/register" className="underline decoration-gold-500">
            wholesale form
          </Link>
          .
        </p>
      ) : null}
      <p className="mt-6 text-center text-xs text-navy-500">
        Demo account — any email works. Staff can open the{" "}
        <Link href="/admin" className="underline">
          admin dashboard
        </Link>
        .
      </p>
    </div>
  );
}
