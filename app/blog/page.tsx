import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on brass, nautical instruments, wholesale and custom manufacturing from Marina Muse International.",
};

export default function BlogPage() {
  return (
    <div className="bg-[#FAF7F2]">
      <section className="bg-[#0B1D36] px-5 py-10 text-cream-50 md:py-12">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#C9A84C]">Journal</p>
          <h1 className="mt-3 font-serif text-5xl">Blog</h1>
          <p className="mt-4 max-w-xl text-white/75">
            Craft, collections and trade — from the Marina Muse atelier.
          </p>
        </div>
      </section>
      <section className="px-5 py-10 md:py-12">
        <div className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-3xl bg-white shadow-soft">
              <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10]">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </Link>
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#8C6E28]">{post.date}</p>
                <h2 className="mt-2 font-serif text-2xl">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#8C6E28]">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-xs uppercase tracking-[0.16em] text-[#8C6E28]">
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
