import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post?.title ?? "Blog" };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="bg-[#FAF7F2] pb-20">
      <div className="relative h-[42vh] min-h-[280px] overflow-hidden bg-navy-950">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#081525]/55" />
      </div>
      <div className="mx-auto max-w-[720px] px-5">
        <p className="mt-10 text-[11px] uppercase tracking-[0.22em] text-[#8C6E28]">{post.date}</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl">{post.title}</h1>
        <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-navy-700">
          {post.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Link href="/blog" className="mt-10 inline-block text-sm text-[#8C6E28] underline">
          Back to blog
        </Link>
      </div>
    </article>
  );
}
