"use client";

import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n/LocaleProvider";

type Review = {
  id: string;
  title: string;
  body: string;
  name: string;
  location: string;
  product: string;
};

export function CustomerReviewsSection() {
  const t = useT();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/testimonials?home=1")
      .then((r) => r.json())
      .then((data) => setReviews(data.items ?? []))
      .catch(() => setReviews([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-[#F4F1EA] px-5 py-10 md:py-14">
      <div className="mx-auto max-w-[1320px]">
        <div className="text-center">
          <div className="mx-auto mb-3 h-px w-16 bg-[#C9A84C]" />
          <h2 className="whitespace-nowrap font-serif text-[clamp(1.5rem,7.4vw,2.25rem)] text-navy-900 md:text-5xl">
            {t("home.reviews.title")}
          </h2>
        </div>
        {loading ? (
          <p className="mt-8 text-center text-sm text-navy-600">Loading reviews…</p>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
            {reviews.map((r) => (
              <blockquote
                key={r.id}
                className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(26,20,12,0.06)] md:p-8"
              >
                <p className="font-serif text-xl text-navy-900 md:text-2xl">“{r.title}”</p>
                <p className="mt-4 text-sm leading-relaxed text-navy-700">{r.body}</p>
                <p className="mt-6 text-sm font-medium text-navy-900">
                  {r.name} · {r.location}
                </p>
                <p className="text-xs text-[#8C6E28]">{r.product}</p>
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
