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

export async function searchProducts(query: string): Promise<SearchProduct[]> {
  if (!query.trim()) return []

  const result = await client
    .index("products")
    .search<SearchProduct>(query, { limit: 8 })

  return result.hits
}