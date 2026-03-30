import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import PreviewPrice from "./price"

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

  return (
    <LocalizedClientLink
      href={`/products/${product.handle}`}
      className="group block"
    >
      <div
        data-testid="product-wrapper"
        className="flex flex-col gap-0"
      >
        {/* Image */}
        <div
          className="relative w-full overflow-hidden bg-[#EEF3EC] rounded-[16px]"
          style={{ aspectRatio: "1 / 1" }}
        >
          {isFeatured && (
            <div className="absolute top-3 left-3 z-10 bg-[#FFCC00] text-[#1A3B1A] rounded-full px-3 py-1 font-dm-mono text-[11px] font-semibold tracking-wide uppercase">
              Featured
            </div>
          )}

          {image ? (
            <img
              src={image}
              alt={product.title ?? "Product"}
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#D4E6CE" />
                <path
                  d="M12 28l7-10 5 7 3-4 5 7H12z"
                  fill="#7AAD6E"
                  opacity="0.6"
                />
                <circle cx="26" cy="15" r="3" fill="#7AAD6E" opacity="0.6" />
              </svg>
            </div>
          )}

          {/* Hover overlay with subtle green tint */}
          <div className="absolute inset-0 bg-[#006b2f]/0 group-hover:bg-[#006b2f]/5 transition-colors duration-300 rounded-[16px]" />
        </div>

        {/* Info row */}
        <div className="mt-3 flex items-start justify-between gap-2 px-1">
          <p
            className="font-fraunces text-[#1A3B1A] text-[17px] leading-snug group-hover:text-[#006b2f] transition-colors duration-200"
            data-testid="product-title"
          >
            {product.title}
          </p>

          {cheapestPrice && (
            <div className="shrink-0 mt-[2px]">
              <PreviewPrice price={cheapestPrice} />
            </div>
          )}
        </div>
      </div>
    </LocalizedClientLink>
  )
}