"use server"

import { listProducts } from "@lib/data/products"
import { Meilisearch } from "meilisearch"

const client = new Meilisearch({
  host: process.env.NEXT_PUBLIC_MEILISEARCH_HOST!,
  apiKey: process.env.NEXT_PUBLIC_MEILISEARCH_SEARCH_KEY!,
})

export type SearchProduct = {
  id: string
  title: string
  handle: string
  description: string | null
  thumbnail: string | null
  collection_title: string | null
  tags: string[]
}

export async function searchProducts(
  query: string,
  countryCode: string
): Promise<SearchProduct[]> {
  if (!query.trim()) return []

  const result = await client
    .index("products")
    .search<SearchProduct>(query, { limit: 8 })

  if (!result.hits.length) return []

  const {
    response: { products },
  } = await listProducts({
    countryCode,
    queryParams: {
      id: result.hits.map((hit) => hit.id),
      limit: result.hits.length,
    },
  })

  const inStockIds = new Set(products.map((product) => product.id))

  return result.hits.filter((hit) => inStockIds.has(hit.id))
}
