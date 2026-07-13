import { Metadata } from "next"

import { getAllPosts } from "@lib/blog"
import { getBaseURL } from "@lib/util/env"
import BlogPostCard from "@modules/blog/components/blog-post-card"

type Props = {
  params: Promise<{ countryCode: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { countryCode } = await props.params
  const baseUrl = getBaseURL()
  const canonical = `${baseUrl}/${countryCode}/blog`
  const title = "Farm Produce Delivery Tips & Guides | Abundish Blog"
  const description =
    "Fresh farm produce delivery tips, Lagos grocery guides, and seasonal insights from Abundish Produce — farm to table, delivered across Lagos."

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      images: [
        {
          url: `${baseUrl}/blog/home-delivery-hero.jpeg`,
          alt: "Fresh farm produce ready for delivery in Lagos",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/blog/home-delivery-hero.jpeg`],
    },
  }
}

export default async function BlogIndexPage(props: Props) {
  const { countryCode } = await props.params
  const posts = getAllPosts()

  return (
    <div className="bg-[#F9F6EE] min-h-screen">
      <section className="max-w-[1100px] mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#FFCC00]" />
            <p className="font-dm-mono text-[#008528] text-[11px] uppercase tracking-[0.16em]">
              Insights
            </p>
          </div>

          <h1 className="font-fraunces text-[#006b2f] text-[48px] sm:text-[64px] lg:text-[72px] leading-[1.0] max-w-[820px]">
            Abundish Blog
          </h1>

          <p className="font-dm-sans text-[#3D5A3D] text-[17px] leading-[1.8] max-w-[560px]">
            Practical guides on fresh farm produce, home delivery in Lagos, and
            making better food choices for your family or business.
          </p>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6">
        <div className="w-full h-px bg-[#D8E8D0]" />
      </div>

      <section className="max-w-[1100px] mx-auto px-6 py-16 lg:py-24">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {posts.map((post) => (
              <BlogPostCard
                key={post.slug}
                post={post}
                countryCode={countryCode}
              />
            ))}
          </div>
        ) : (
          <p className="font-dm-sans text-[#3D5A3D] text-[16px]">
            New posts are on the way. Check back soon.
          </p>
        )}
      </section>
    </div>
  )
}
