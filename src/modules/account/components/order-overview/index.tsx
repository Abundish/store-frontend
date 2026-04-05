"use client"

import OrderCard from "../order-card"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

const OrderOverview = ({ orders }: { orders: HttpTypes.StoreOrder[] }) => {
  if (orders?.length) {
    return (
      <div className="flex flex-col gap-4 w-full">
        {orders.map((o) => (
          <OrderCard key={o.id} order={o} />
        ))}
      </div>
    )
  }

  return (
    <div
      className="w-full flex flex-col items-center gap-5 py-20"
      data-testid="no-orders-container"
    >
      {/* Illustration */}
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <circle cx="36" cy="36" r="35" stroke="#D8E8D0" strokeWidth="1.5" />
        <path d="M24 48l10-14 8 10 5-6 8 10H24z" fill="#D8E8D0" />
        <circle cx="48" cy="26" r="5" fill="#D8E8D0" />
      </svg>

      <div className="text-center">
        <p className="font-fraunces text-[#1A3B1A] text-[22px] mb-2">
          No orders yet
        </p>
        <p className="font-dm-sans text-[#7A9B7A] text-[15px]">
          Your order history will appear here once you&apos;ve made a purchase.
        </p>
      </div>

      <LocalizedClientLink
        href="/store"
        data-testid="continue-shopping-button"
        className="mt-2 inline-flex items-center gap-2 h-[46px] px-7 rounded-full bg-[#006b2f] text-white font-dm-sans font-semibold text-[14px] hover:bg-[#008528] transition-colors duration-150"
      >
        Shop now →
      </LocalizedClientLink>
    </div>
  )
}

export default OrderOverview