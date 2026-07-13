import { BlogPost } from "@lib/blog"
import { getBaseURL } from "@lib/util/env"

type BlogJsonLdProps = {
  post: BlogPost
  countryCode: string
}

export default function BlogJsonLd({ post, countryCode }: BlogJsonLdProps) {
  const baseUrl = getBaseURL()
  const postUrl = `${baseUrl}/${countryCode}/blog/${post.slug}`
  const blogUrl = `${baseUrl}/${countryCode}/blog`
  const imageUrl = post.heroImage.startsWith("http")
    ? post.heroImage
    : `${baseUrl}${post.heroImage}`

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: [imageUrl],
    datePublished: post.date,
    dateModified: post.updatedDate,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Abundish Produce",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/abundish-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    url: postUrl,
    keywords: post.tags.join(", "),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/${countryCode}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: blogUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
