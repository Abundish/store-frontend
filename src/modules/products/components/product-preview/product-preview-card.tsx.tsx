"use client"

import { addToCart } from "@lib/data/cart"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useParams } from "next/navigation"
import { useMemo, useState } from "react"
import PreviewPrice from "./price"

type Props = {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  cheapestPrice: ReturnType<typeof getProductPrice>["cheapestPrice"]
  showRange: boolean
  priciest: ReturnType<typeof getProductPrice>["variantPrice"] | null
  image: string | null
}

export default function ProductPreviewCard({
  product,
  isFeatured,
  cheapestPrice,
  showRange,
  priciest,
  image,
}: Props) {
  const countryCode = useParams().countryCode as string
  const variants = product.variants ?? []
    // Build a flat list of options for the select.
  // If there's only one option dimension (e.g. "Weight"), each entry is one variant.
  // We label by joining all option values so "1kg / Red" is human-readable.
  const variantOptions = useMemo(() => {
    return variants.map((v) => ({
      id: v.id!,
      label: v.options?.map((o) => o.value).join(" / ") ?? v.title ?? v.id!,
      inStock:
        !v.manage_inventory ||
        v.allow_backorder ||
        (v.inventory_quantity ?? 0) > 0,
    }))
  }, [variants])

  const singleVariant = variantOptions.length === 1
  const hasVariants = variantOptions.length > 0

  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    hasVariants ? variantOptions[0].id : ""
  )
  const [isAdding, setIsAdding] = useState(false)
  const [added, setAdded] = useState(false)

  const selectedOption = variantOptions.find((v) => v.id === selectedVariantId)
  const inStock = selectedOption?.inStock ?? false

  const handleAddToCart = async () => {
    if (!selectedVariantId || !inStock || isAdding) return
    setIsAdding(true)
    try {
      await addToCart({ variantId: selectedVariantId, quantity: 1, countryCode })
      setAdded(true)
      setTimeout(() => setAdded(false), 2000)
    } finally {
      setIsAdding(false)
    }
  }

  const buttonLabel = isAdding
    ? "Adding…"
    : added
      ? "Added ✓"
      : !inStock
        ? "Out of stock"
        : "Add to cart"

  const buttonDisabled = !inStock || isAdding || !selectedVariantId

  return (
    <div data-testid="product-wrapper" className="group flex flex-col gap-0">
      {/* ── Linked region: image + title + price ── */}
      <LocalizedClientLink href={`/products/${product.handle}`} className="block">
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
                <path d="M12 28l7-10 5 7 3-4 5 7H12z" fill="#7AAD6E" opacity="0.6" />
                <circle cx="26" cy="15" r="3" fill="#7AAD6E" opacity="0.6" />
              </svg>
            </div>
          )}

          <div className="absolute inset-0 bg-[#006b2f]/0 group-hover:bg-[#006b2f]/5 transition-colors duration-300 rounded-[16px]" />
        </div>

        {/* Title + price */}
        <div className="mt-3 flex flex-col gap-1 px-1">
          <p
            className="font-fraunces text-[#1A3B1A] text-[17px] leading-snug group-hover:text-[#006b2f] transition-colors duration-200 truncate"
            data-testid="product-title"
            title={product.title ?? ""}
          >
            {product.title}
          </p>

          {cheapestPrice && (
            <div className="flex items-center gap-1">
              <PreviewPrice price={cheapestPrice} />
              {showRange && priciest && (
                <>
                  <span className="font-dm-mono text-[12px] text-[#7A9B7A]">–</span>
                  <PreviewPrice price={priciest} />
                </>
              )}
            </div>
          )}
        </div>
      </LocalizedClientLink>

      {/* ── Non-linked region: variant selector + add to cart ── */}
      <div className="mt-3 px-1 flex flex-col gap-2">
        {/*
          Variant selector — always rendered for uniform card height.
          Hidden visually when there's only one variant but still occupies space.
        */}
        <div className={singleVariant ? "invisible" : ""}>
          <div className="relative">
            <select
              value={selectedVariantId}
              onChange={(e) => setSelectedVariantId(e.target.value)}
              disabled={singleVariant || isAdding}
              className="
                w-full appearance-none
                bg-white border border-[#D4E6CE] rounded-full
                px-4 py-2
                font-dm-mono text-[12px] text-[#1A3B1A]
                cursor-pointer
                focus:outline-none focus:border-[#006b2f] focus:ring-1 focus:ring-[#006b2f]/20
                transition-colors duration-150
                pr-8
              "
            >
              {variantOptions.map((v) => (
                <option key={v.id} value={v.id} disabled={!v.inStock}>
                  {v.label}{!v.inStock ? " — Out of stock" : ""}
                </option>
              ))}
            </select>
            {/* Custom chevron */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="#7A9B7A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          disabled={buttonDisabled}
          data-testid="add-product-button"
          className={`
            w-full h-[44px] rounded-full
            font-dm-sans font-semibold text-[13px] tracking-wide
            transition-all duration-200
            flex items-center justify-center gap-2
            ${added
              ? "bg-[#EEF3EC] text-[#006b2f] border border-[#006b2f]/30"
              : buttonDisabled
                ? "bg-[#D8E8D0] text-[#7A9B7A] cursor-not-allowed"
                : "bg-[#006b2f] text-white hover:bg-[#008528] active:scale-[0.98]"
            }
          `}
        >
          {isAdding ? (
            <>
              <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              Adding…
            </>
          ) : buttonLabel}
        </button>
      </div>
    </div>
  )
}