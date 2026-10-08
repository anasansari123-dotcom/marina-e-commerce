import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BannerHero } from "@/components/BannerHero";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on brass, nautical instruments, wholesale and custom manufacturing from Marina Muse International.",
};

export default function BlogPage() {
  return (
    <div className="bg-[#FAF7F2]">
      <BannerHero
        src="/blog-slide.jpeg"
        mobileSrc="/mobile/blog.png"
        alt="Marina Muse blog — craft, collections and trade from the atelier"
        title="Blog"
      />
      <section className="px-5 py-10 md:py-12">
        <div className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-3xl bg-white shadow-soft">
              <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-[75%_center]"
                />
              </Link>
              <div className="p-5 md:p-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#8C6E28]">{post.date}</p>
                <h2 className="mt-2 font-serif text-xl md:text-2xl">
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
