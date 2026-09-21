"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Can you manufacture custom sizes?",
    a: "Yes. Telescopes, binoculars and related pieces can be made to your length, barrel diameter, height and overall proportions. Share a drawing or sample and we will confirm what is possible in production.",
  },
  {
    q: "Can I choose the lens specification?",
    a: "Yes. You may specify lens size, magnification and viewing range. We will match optical glass to the brief so the piece is suitable for display and, where required, actual viewing.",
  },
  {
    q: "Can you manufacture bulk quantities?",
    a: "Yes. We accept wholesale and repeat programmes for retailers, hotels and importers — from modest MOQs through to container lots, with consistent finishing across the run.",
  },
  {
    q: "Can you make a custom tripod?",
    a: "Yes. Tripods and stands can be specified in brass, hardwood or steel, in tabletop or floor-standing heights, to match the instrument.",
  },
  {
    q: "Can I provide my own design?",
    a: "Yes. Send sketches, CAD, photographs or a physical sample. We review the design, confirm materials and finish, then sample before production.",
  },
  {
    q: "Do you offer private-label manufacturing?",
    a: "Yes. Logos, engraving, branded packaging and your labels can be applied in our own facility. Your brand, our metalworking.",
  },
  {
    q: "Do you ship worldwide?",
    a: "Yes. Every piece is inspected, packed for export and shipped worldwide, with documents for retail and wholesale buyers.",
  },
];

export function CustomFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#e6dfd2] rounded-2xl border border-[#eee7db] bg-white">
      {faqs.map((item, i) => {
        const active = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(active ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-medium text-navy-900">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[#C9A84C] transition ${active ? "rotate-180" : ""}`}
              />
            </button>
            {active ? (
              <p className="px-5 pb-4 text-sm leading-relaxed text-navy-600">{item.a}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
