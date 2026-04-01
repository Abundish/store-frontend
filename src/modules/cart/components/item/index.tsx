"use client"

import { updateLineItem } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import { useState } from "react"

type ItemProps = {
  item: HttpTypes.StoreCartLineItem
  currencyCode?: string
}

const Item = ({ item, currencyCode }: ItemProps) => {
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { handle } = item.variant?.product ?? {}

  const changeQuantity = async (quantity: number) => {
    setError(null)
    setUpdating(true)
    try {
      await updateLineItem({ lineId: item.id, quantity })
    } catch (e: any) {
      setError(e.message)
    } finally {
      setUpdating(false)
    }
  }

  return (
    <div
      className="grid grid-cols-[auto_1fr] small:grid-cols-[auto_2fr_1fr_1fr_1fr] gap-4 py-5 items-center"
      data-testid="product-row"
    >
      {/* Thumbnail */}
      <LocalizedClientLink href={`/products/${handle}`}>
        <div className="w-[80px] h-[80px] small:w-[88px] small:h-[88px] rounded-[12px] overflow-hidden bg-[#EEF3EC] shrink-0 relative">
          {item.thumbnail ? (
            <Image
              src={item.thumbnail}
              alt={item.product_title ?? "Product"}
              fill
              className="object-cover"
              sizes="88px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M6 22l5-8 4 6 3-4 4 6H6z" fill="#B5CEB5" />
                <circle cx="19" cy="9" r="3" fill="#B5CEB5" />
              </svg>
            </div>
          )}
        </div>
      </LocalizedClientLink>

      {/* Product info — spans full width on mobile */}
      <div className="flex flex-col gap-1 col-span-1 small:col-span-1 min-w-0">
        <LocalizedClientLink href={`/products/${handle}`} className="group">
          <p
            className="font-fraunces text-[#1A3B1A] text-[17px] leading-snug group-hover:text-[#006b2f] transition-colors truncate"
            data-testid="product-title"
          >
            {item.product_title}
          </p>
        </LocalizedClientLink>
        <LineItemOptions variant={item.variant} data-testid="product-variant" />

        {/* Mobile: qty + price inline */}
        <div className="flex items-center justify-between small:hidden mt-2">
          <QuantityControl
            quantity={item.quantity}
            onChange={changeQuantity}
            updating={updating}
          />
          <LineItemPrice
            item={item}
            currencyCode={currencyCode ?? ""}
            style="tight"
          />
        </div>

        <DeleteButton id={item.id} className="mt-1 small:mt-0" />
        {error && (
          <p className="font-dm-mono text-[11px] text-[#cc4400] mt-1">{error}</p>
        )}
      </div>

      {/* Desktop: Qty */}
      <div className="hidden small:flex justify-center">
        <QuantityControl
          quantity={item.quantity}
          onChange={changeQuantity}
          updating={updating}
        />
      </div>

      {/* Desktop: Unit price */}
      <div className="hidden small:flex justify-end">
        <LineItemUnitPrice
          item={item}
          currencyCode={currencyCode ?? ""}
          style="tight"
        />
      </div>

      {/* Desktop: Total */}
      <div className="hidden small:flex justify-end">
        <LineItemPrice
          item={item}
          currencyCode={currencyCode ?? ""}
          style="tight"
        />
      </div>
    </div>
  )
}

const QuantityControl = ({
  quantity,
  onChange,
  updating,
}: {
  quantity: number
  onChange: (q: number) => void
  updating: boolean
}) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange(Math.max(1, quantity - 1))}
        disabled={updating || quantity <= 1}
        className="w-7 h-7 rounded-full border border-[#C8DEC2] text-[#3D5A3D] text-[14px] flex items-center justify-center hover:border-[#008528] hover:text-[#008528] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span
        className="font-dm-mono text-[#1A3B1A] text-[14px] w-5 text-center"
        data-testid="product-quantity"
      >
        {updating ? (
          <span className="inline-block w-3 h-3 border-2 border-[#C8DEC2] border-t-[#008528] rounded-full animate-spin" />
        ) : quantity}
      </span>
      <button
        onClick={() => onChange(quantity + 1)}
        disabled={updating}
        className="w-7 h-7 rounded-full border border-[#C8DEC2] text-[#3D5A3D] text-[14px] flex items-center justify-center hover:border-[#008528] hover:text-[#008528] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

export default Item