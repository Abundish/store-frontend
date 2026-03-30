import { listProductsWithSort } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

const PRODUCT_LIMIT = 12

type PaginatedProductsParams = {
  limit: number
  collection_id?: string[]
  category_id?: string[]
  id?: string[]
  order?: string
}

export default async function PaginatedProducts({
  sortBy,
  page,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
}: {
  sortBy?: SortOptions
  page: number
  collectionId?: string
  categoryId?: string
  productsIds?: string[]
  countryCode: string
}) {
  const queryParams: PaginatedProductsParams = { limit: PRODUCT_LIMIT }

  if (collectionId) queryParams["collection_id"] = [collectionId]
  if (categoryId) queryParams["category_id"] = [categoryId]
  if (productsIds) queryParams["id"] = productsIds
  if (sortBy === "created_at") queryParams["order"] = "created_at"

  const region = await getRegion(countryCode)
  if (!region) return null

  let {
    response: { products, count },
  } = await listProductsWithSort({ page, queryParams, sortBy, countryCode })

  const totalPages = Math.ceil(count / PRODUCT_LIMIT)

  return (
    <>
      {/* Count label */}
      <p className="font-dm-mono text-[#7A9B7A] text-[12px] uppercase tracking-[0.12em] mb-6">
        {count} {count === 1 ? "product" : "products"}
      </p>

      <ul
        className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-5 gap-y-10 w-full"
        data-testid="products-list"
      >
        {products.map((p) => (
          <li key={p.id}>
            <ProductPreview product={p} region={region} />
          </li>
        ))}
      </ul>

      {products.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 gap-3">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="23" stroke="#D4E6CE" strokeWidth="1.5" />
            <path d="M16 32l8-12 6 8 4-5 6 9H16z" fill="#D4E6CE" />
          </svg>
          <p className="font-fraunces text-[#7A9B7A] text-[18px]">Nothing here yet</p>
          <p className="font-dm-sans text-[#7A9B7A] text-[14px]">Check back soon — fresh stock is added regularly.</p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination
          data-testid="product-pagination"
          page={page}
          totalPages={totalPages}
        />
      )}
    </>
  )
}