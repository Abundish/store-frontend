import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"

export default function ProductPrice({
  product,
  variant,
}: {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return <div className="w-28 h-9 bg-[#D8E8D0] animate-pulse rounded-lg" />
  }

  return (
    <div className="flex items-baseline gap-3">
      <span
        className="font-fraunces text-[#006b2f] text-[32px] leading-none"
        data-testid="product-price"
        data-value={selectedPrice.calculated_price_number}
      >
        {!variant && (
          <span className="font-dm-sans text-[14px] text-[#7A9B7A] font-normal mr-1">
            From
          </span>
        )}
        {selectedPrice.calculated_price}
      </span>

      {selectedPrice.price_type === "sale" && (
        <div className="flex items-center gap-2">
          <span
            className="font-dm-mono text-[15px] text-[#7A9B7A] line-through"
            data-testid="original-product-price"
          >
            {selectedPrice.original_price}
          </span>
          <span className="font-dm-mono text-[12px] bg-[#FFCC00] text-[#1A3B1A] px-2 py-0.5 rounded-full font-semibold">
            -{selectedPrice.percentage_diff}%
          </span>
        </div>
      )}
    </div>
  )
}