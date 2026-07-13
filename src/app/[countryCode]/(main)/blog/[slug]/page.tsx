import Image from "next/image"
import { Metadata } from "next"
import { notFound } from "next/navigation"

import { getPostBySlug, getPostSlugs } from "@lib/blog"
import { listRegions } from "@lib/data/regions"
import { getBaseURL } from "@lib/util/env"
import BlogJsonLd from "@modules/blog/components/blog-json-ld"
import MdxContent from "@modules/blog/components/mdx-content"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type Props = {
  params: Promise<{ countryCode: string; slug: string }>
}

export async function generateStaticParams() {
  const slugs = getPostSlugs()

  try {
    const countryCodes = await listRegions().then((regions) =>
      regions
        ?.map((region) => region.countries?.map((country) => country.iso_2))
        .flat()
        .filter(Boolean)
    )

    if (!countryCodes?.length) {
      return slugs.map((slug) => ({ countryCode: "ng", slug }))
    }

    return countryCodes.flatMap((countryCode) =>
      slugs.map((slug) => ({
        countryCode,
        slug,
      }))
    )
  } catch {
    return slugs.map((slug) => ({ countryCode: "ng", slug }))
  }
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { countryCode, slug } = await props.params
  const post = getPostBySlug(slug)

  if (!post) {
    return {}
  }

  const baseUrl = getBaseURL()
  const canonical = `${baseUrl}/${countryCode}/blog/${post.slug}`
  const imageUrl = post.heroImage.startsWith("http")
    ? post.heroImage
    : `${baseUrl}${post.heroImage}`

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: canonical,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedDate,
      images: [
        {
          url: imageUrl,
          alt: post.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [imageUrl],
    },
  }
}

export default async function BlogPostPage(props: Props) {
  const { countryCode, slug } = await props.params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <BlogJsonLd post={post} countryCode={countryCode} />

      <div className="bg-[#F9F6EE] min-h-screen">
        <section className="max-w-[1100px] mx-auto px-6 pt-16 pb-10 lg:pt-24">
          <div className="flex flex-col gap-6 max-w-[760px]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#FFCC00]" />
              <p className="font-dm-mono text-[#008528] text-[11px] uppercase tracking-[0.16em]">
                Abundish Blog
              </p>
            </div>

            <h1 className="font-fraunces text-[#006b2f] text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05]">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 font-dm-mono text-[11px] uppercase tracking-[0.12em] text-[#7A9B7A]">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readTimeMinutes} min read</span>
              <span aria-hidden="true">·</span>
              <span>{post.author}</span>
            </div>
          </div>
        </section>

        <section className="max-w-[1100px] mx-auto px-6 pb-12">
          <div className="relative aspect-[16/9] w-full max-w-[900px] overflow-hidden rounded-[12px] bg-[#F3F6F1]">
            <Image
              src={post.heroImage}
              alt={post.heroImageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 900px"
              className="object-cover"
            />
          </div>
        </section>

        <div className="max-w-[1100px] mx-auto px-6">
          <div className="w-full h-px bg-[#D8E8D0]" />
        </div>

        <article className="max-w-[1100px] mx-auto px-6 py-16 lg:py-20">
          <div className="max-w-[640px]">
            <MdxContent source={post.content} />
          </div>
        </article>

        <section className="bg-[#FFCC00] py-16 lg:py-20">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
              <div className="flex flex-col gap-4 max-w-[520px]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-[#006b2f]" />
                  <p className="font-dm-mono text-[#006b2f] text-[11px] uppercase tracking-[0.16em]">
                    Ready to order?
                  </p>
                </div>
                <h2 className="font-fraunces text-[#0D3D20] text-[34px] lg:text-[44px] leading-[1.1]">
                  Shop Fresh Farm Produce Today
                </h2>
                <p className="font-dm-sans text-[#1A4A2A] text-[15px] leading-[1.75]">
                  Skip the market stress and enjoy fresh produce delivered
                  directly to your home or business across Lagos.
                </p>
              </div>

              <LocalizedClientLink
                href="/store"
                className="shrink-0 inline-flex items-center justify-center gap-2 font-dm-mono text-[12px] uppercase tracking-[0.14em] bg-[#006b2f] text-white rounded-full px-7 py-4 hover:bg-[#0D3D20] transition-colors duration-200"
              >
                Shop Fresh Produce Now →
              </LocalizedClientLink>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
