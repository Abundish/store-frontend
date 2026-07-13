import type { MetadataRoute } from "next"

import { getPostSlugs } from "@lib/blog"
import { listRegions } from "@lib/data/regions"
import { getBaseURL } from "@lib/util/env"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseURL()
  const postSlugs = getPostSlugs()
  const now = new Date()

  let countryCodes: string[] = ["ng"]

  try {
    const regions = await listRegions()
    const codes = regions
      ?.map((region) => region.countries?.map((country) => country.iso_2))
      .flat()
      .filter((code): code is string => Boolean(code))

    if (codes?.length) {
      countryCodes = [...new Set(codes)]
    }
  } catch {
    // Fall back to default country code when regions are unavailable at build time.
  }

  const staticPaths = ["", "/store", "/about", "/contact"]

  const staticEntries: MetadataRoute.Sitemap = countryCodes.flatMap(
    (countryCode) =>
      staticPaths.map((path) => ({
        url: `${baseUrl}/${countryCode}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "daily" : "weekly",
        priority: path === "" ? 1 : 0.8,
      }))
  )

  const blogIndexEntries: MetadataRoute.Sitemap = countryCodes.map(
    (countryCode) => ({
      url: `${baseUrl}/${countryCode}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    })
  )

  const blogPostEntries: MetadataRoute.Sitemap = countryCodes.flatMap(
    (countryCode) =>
      postSlugs.map((slug) => ({
        url: `${baseUrl}/${countryCode}/blog/${slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.85,
      }))
  )

  return [...staticEntries, ...blogIndexEntries, ...blogPostEntries]
}
