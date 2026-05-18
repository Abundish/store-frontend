"use client"

import AppliedPromotions from "@modules/cart/components/applied-promotions"
import CartTotals from "@modules/common/components/cart-totals"
import DiscountCode from "@modules/checkout/components/discount-code"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

type SummaryProps = {
  cart: HttpTypes.StoreCart & {
    promotions: HttpTypes.StorePromotion[]
  }
}

function getCheckoutStep(cart: HttpTypes.StoreCart) {
  if (!cart?.shipping_address?.address_1 || !cart.email) return "address"
  if (cart?.shipping_methods?.length === 0) return "delivery"
  return "payment"
}

const Summary = ({ cart }: SummaryProps) => {
  const step = getCheckoutStep(cart)

  return (
    <div className="bg-white rounded-[20px] border border-[#D8E8D0] px-6 py-6 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-fraunces text-[#1A3B1A] text-[22px]">
          Summary
        </h2>
        <div className="w-6 h-[2px] bg-[#FFCC00] rounded-full" />
      </div>

      {/* Discount code */}
      <DiscountCode cart={cart} />

      {/* Applied promotions */}
      <AppliedPromotions
        promotions={cart.promotions}
        currencyCode={cart.currency_code}
      />

      {/* Divider */}
      <div className="w-full h-px bg-[#D8E8D0]" />

      {/* Totals */}
      <CartTotals totals={cart} />

      {/* Divider */}
      <div className="w-full h-px bg-[#D8E8D0]" />

      {/* Checkout CTA */}
      <LocalizedClientLink
        href={"/checkout?step=" + step}
        data-testid="checkout-button"
      >
        <button className="w-full h-[52px] rounded-full bg-[#006b2f] text-white font-dm-sans font-semibold text-[15px] hover:bg-[#008528] active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2">
          Go to checkout
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </LocalizedClientLink>

      {/* Trust note */}
      <p className="font-dm-mono text-[#7A9B7A] text-[11px] text-center uppercase tracking-wide">
        Secure checkout · Farm-fresh guarantee
      </p>
    </div>
  )
}

export default Summary