"use client";

import { PackageSearch } from "lucide-react";
import { useState } from "react";

export default function TrackOrderPage() {
  const [done, setDone] = useState(false);
  const [ref, setRef] = useState("");

  return (
    <div className="bg-[#FAF7F2] px-5 py-10 md:py-12">
      <div className="mx-auto max-w-[640px]">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#8C6E28]">Orders</p>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl">Track Order</h1>
        <p className="mt-3 text-navy-600">
          Enter your order number and email. We will show the latest shipping status for retail and wholesale despatches.
        </p>

        {done ? (
          <div className="mt-10 rounded-3xl bg-white p-8 shadow-soft">
            <PackageSearch className="h-10 w-10 text-[#C9A84C]" />
            <h2 className="mt-4 font-serif text-3xl">In transit</h2>
            <p className="mt-2 text-sm text-navy-600">
              Order <span className="font-medium text-navy-900">{ref || "MM-20418"}</span> left the atelier and is with the carrier.
              Tracking updates usually appear within 24 hours of handover.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-navy-700">
              <li className="flex justify-between border-b border-[#eee7db] pb-2">
                <span>Packed & inspected</span>
                <span className="text-[#8C6E28]">Complete</span>
              </li>
              <li className="flex justify-between border-b border-[#eee7db] pb-2">
                <span>Collected by carrier</span>
                <span className="text-[#8C6E28]">Complete</span>
              </li>
              <li className="flex justify-between">
                <span>Out for delivery</span>
                <span>Pending</span>
              </li>
            </ul>
            <button type="button" className="btn-navy mt-8" onClick={() => setDone(false)}>
              Track another order
            </button>
          </div>
        ) : (
          <form
            className="mt-10 space-y-4 rounded-3xl bg-white p-6 shadow-soft md:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <input
              className="input"
              required
              placeholder="Order number (e.g. MM-20418)"
              value={ref}
              onChange={(e) => setRef(e.target.value)}
            />
            <input className="input" type="email" required placeholder="Email on the order" />
            <button className="btn-gold w-full">Track order</button>
          </form>
        )}
      </div>
    </div>
  );
}
