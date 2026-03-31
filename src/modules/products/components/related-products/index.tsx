import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { HttpTypes } from "@medusajs/types"
import ProductPreview from "../product-preview"

type RelatedProductsProps = {
  product: HttpTypes.StoreProduct
  countryCode: string
}

export default async function RelatedProducts({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)
  if (!region) return null

  const queryParams: HttpTypes.StoreProductListParams = {}
  if (region?.id) queryParams.region_id = region.id
  if (product.collection_id) queryParams.collection_id = [product.collection_id]
  if (product.tags) {
    queryParams.tag_id = product.tags.map((t) => t.id).filter(Boolean) as string[]
  }
  queryParams.is_giftcard = false

  const products = await listProducts({ queryParams, countryCode }).then(
    ({ response }) =>
      response.products.filter((p) => p.id !== product.id).slice(0, 4)
  )

  if (!products.length) return null

  return (
    <div>
      {/* Section header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="font-fraunces text-[#006b2f] text-[28px] small:text-[34px] leading-tight">
            You might also like
          </h2>
        </div>
        <div className="w-8 h-[2px] bg-[#FFCC00] rounded-full mb-2" />
      </div>

      <ul className="grid grid-cols-2 small:grid-cols-4 gap-5">
        {products.map((p) => (
          <li key={p.id}>
            <ProductPreview region={region} product={p} />
          </li>
        ))}
      </ul>
    </div>
  )
}