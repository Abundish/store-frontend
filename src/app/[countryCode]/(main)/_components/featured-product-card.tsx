"use client"

import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"

import { addToCart } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function FeaturedProductCard({
  product,
  price,
  imageUrl,
  isFresh,
  variantId,
}: {
  product: HttpTypes.StoreProduct
  price: string | null
  imageUrl: string | null
  isFresh: boolean
  variantId: string | null
}) {
  const [isAdding, setIsAdding] = useState(false)
  const { countryCode } = useParams() as { countryCode: string }

  const handleAddToCart = async () => {
    if (!variantId) return
    setIsAdding(true)
    try {
      await addToCart({
        variantId,
        quantity: 1,
        countryCode,
      })
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <article className="flex flex-col gap-4">
      <LocalizedClientLink
        href={`/products/${product.handle ?? product.id}`}
        className="group focus:outline-none"
        aria-label={`View ${product.title}`}
      >
        <div className="relative aspect-square rounded-[12px] overflow-hidden bg-[#F3F6F1] ring-1 ring-transparent group-hover:ring-[#008528]/30 group-focus-visible:ring-[#008528]/40 transition">
          {isFresh && (
            <div className="absolute top-3 left-3 z-10 bg-[#FFCC00] text-[#1A1A1A] rounded-full px-3 py-1 font-dm-mono text-[12px] font-semibold">
              Peak Fresh
            </div>
          )}

          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${product.title} product photo`}
              fill
              sizes="(max-width: 640px) 86vw, (max-width: 768px) 41vw, 18vw"
              className="object-cover"
              draggable={false}
            />
          ) : (
            <div className="w-full h-full" />
          )}
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <h3 className="font-fraunces text-[20px] text-[#006b2f] leading-[1.25] group-hover:underline">
            {product.title}
          </h3>
          <p className="font-dm-mono font-semibold text-[#008528] text-[16px]">
            {price ?? "—"}
          </p>
        </div>
      </LocalizedClientLink>

      <button
        type="button"
        onClick={handleAddToCart}
        disabled={!variantId || isAdding}
        className="h-[44px] rounded-full border border-[#008528] text-[#008528] font-dm-sans font-semibold hover:bg-[#008528] hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={`Add ${product.title} to cart`}
      >
        {isAdding ? "Adding..." : "Add to cart"}
      </button>
    </article>
  )
}

