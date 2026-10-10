"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function ReturnRequestForm() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (done) {
    return (
      <div className="rounded-2xl border border-[#C9A84C]/35 bg-white px-5 py-8 text-center md:px-10">
        <CheckCircle2 className="mx-auto h-8 w-8 text-[#C9A84C]" strokeWidth={1.6} />
        <h2 className="mt-4 font-serif text-2xl text-navy-900">Return request submitted</h2>
        <p className="mt-2 text-sm text-navy-600">Our team will email return instructions within one business day.</p>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border border-[#C9A84C]/35 bg-white px-5 py-8 md:px-10"
      onSubmit={async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        const fd = new FormData(e.currentTarget);
        const res = await fetch("/api/returns", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderNumber: fd.get("orderNumber"),
            customerName: fd.get("customerName"),
            productName: fd.get("productName"),
            reason: fd.get("reason"),
            email: fd.get("email"),
          }),
        });
        setLoading(false);
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          setError(data.error ?? "Could not submit. Please try again.");
          return;
        }
        setDone(true);
      }}
    >
      <h2 className="font-serif text-2xl text-navy-900">Start a Return</h2>
      <div className="mt-6 space-y-4">
        <input className="input" name="orderNumber" required placeholder="Order number" />
        <input className="input" name="customerName" required placeholder="Your name" />
        <input className="input" name="email" type="email" required placeholder="Email" />
        <input className="input" name="productName" required placeholder="Product name" />
        <textarea className="input min-h-28" name="reason" required placeholder="Reason for return" />
        {error ? <p className="text-sm text-red-700">{error}</p> : null}
        <button type="submit" className="btn-gold w-full" disabled={loading}>
          {loading ? "Submitting…" : "Submit return request"}
        </button>
      </div>
    </form>
  );
}
