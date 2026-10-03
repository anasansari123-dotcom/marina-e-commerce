"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [done, setDone] = useState(false);
  const [kind, setKind] = useState<"retail" | "wholesale">("retail");

  if (done) {
    return (
      <div className="rounded-3xl bg-white p-8 py-10 text-center shadow-soft md:p-10">
        <CheckCircle2 className="mx-auto h-12 w-12 text-[#C9A84C]" />
        <h2 className="mt-4 font-serif text-3xl">Message received</h2>
        <p className="mt-2 text-navy-600">We’ll reply within one business day.</p>
      </div>
    );
  }

  return (
    <form
      className="rounded-3xl bg-white p-6 shadow-soft md:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <h2 className="font-serif text-2xl md:text-3xl">Send an Enquiry</h2>
      <div className="mt-5 grid grid-cols-2 rounded-full bg-[#F4F1EA] p-1 text-sm">
        <button
          type="button"
          className={`rounded-full py-2 ${kind === "retail" ? "bg-white shadow" : "text-navy-600"}`}
          onClick={() => setKind("retail")}
        >
          Retail
        </button>
        <button
          type="button"
          className={`rounded-full py-2 ${kind === "wholesale" ? "bg-white shadow" : "text-navy-600"}`}
          onClick={() => setKind("wholesale")}
        >
          Wholesale / B2B
        </button>
      </div>
      <div className="mt-6 space-y-4">
        <input className="input" required placeholder="Full name" />
        <input className="input" type="email" required placeholder="Email" />
        <input className="input" type="tel" placeholder="Phone / WhatsApp" />
        {kind === "wholesale" ? <input className="input" placeholder="Company" /> : null}
        <select className="input" defaultValue="">
          <option value="" disabled>
            Subject
          </option>
          <option>Product enquiry</option>
          <option>Wholesale pricing</option>
          <option>Custom manufacturing</option>
          <option>Order / shipping</option>
        </select>
        <textarea className="input min-h-36" required placeholder="How can we help?" />
        <button className="btn-gold w-full">Send message</button>
      </div>
    </form>
  );
}
