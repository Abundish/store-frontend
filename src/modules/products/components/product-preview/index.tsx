import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import ProductPreviewCard from "./product-preview-card.tsx"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({ product })
  const image = product.thumbnail ?? product.images?.[0]?.url ?? null

  const allPrices = product.variants
    ?.map((v) => getProductPrice({ product, variantId: v.id })?.variantPrice)
    .filter(Boolean)

  const priciest = allPrices?.reduce(
    (max, p) =>
      (p!.calculated_price_number ?? 0) > (max!.calculated_price_number ?? 0)
        ? p
        : max,
    allPrices?.[0]
  )

  const showRange =
    !!allPrices &&
    allPrices.length > 1 &&
    cheapestPrice?.calculated_price_number !== priciest?.calculated_price_number

  return (
    <ProductPreviewCard
      product={product}
      isFeatured={isFeatured}
      cheapestPrice={cheapestPrice}
      showRange={showRange}
      priciest={priciest ?? null}
      image={image}
    />
  )
}