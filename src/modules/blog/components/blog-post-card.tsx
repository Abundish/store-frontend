import Image from "next/image"
import Link from "next/link"

import { BlogPost } from "@lib/blog"

type BlogPostCardProps = {
  post: BlogPost
  countryCode: string
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date))
}

export default function BlogPostCard({ post, countryCode }: BlogPostCardProps) {
  return (
    <article className="group flex flex-col gap-4">
      <Link
        href={`/${countryCode}/blog/${post.slug}`}
        className="focus:outline-none"
      >
        <div className="relative aspect-[16/10] rounded-[12px] overflow-hidden bg-[#F3F6F1] ring-1 ring-transparent group-hover:ring-[#008528]/30 group-focus-visible:ring-[#008528]/40 transition">
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center gap-3 font-dm-mono text-[11px] uppercase tracking-[0.12em] text-[#7A9B7A]">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readTimeMinutes} min read</span>
          </div>

          <h2 className="font-fraunces text-[#006b2f] text-[24px] leading-[1.25] group-hover:underline">
            {post.title}
          </h2>

          <p className="font-dm-sans text-[#3D5A3D] text-[15px] leading-[1.75]">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </article>
  )
}
