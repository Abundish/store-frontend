"use client"

import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Help from "@modules/order/components/help"
import Items from "@modules/order/components/items"
import OrderDetails from "@modules/order/components/order-details"
import OrderSummary from "@modules/order/components/order-summary"
import ShippingDetails from "@modules/order/components/shipping-details"
import React from "react"

type OrderDetailsTemplateProps = {
  order: HttpTypes.StoreOrder
}

const OrderDetailsTemplate: React.FC<OrderDetailsTemplateProps> = ({ order }) => {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.14em] mb-1">
              Account / Orders
            </p>
            <h1 className="font-fraunces text-[#1A3B1A] text-[32px] leading-tight">
              Order #{order.display_id}
            </h1>
            <div className="w-8 h-[2px] bg-[#FFCC00] rounded-full mt-2" />
          </div>

          <LocalizedClientLink
            href="/account/orders"
            data-testid="back-to-overview-button"
            className="font-dm-sans text-[13px] text-[#7A9B7A] hover:text-[#006b2f] transition-colors flex items-center gap-1.5 mt-1 shrink-0"
          >
            ← Back to orders
          </LocalizedClientLink>
        </div>
      </div>

      {/* Main content */}
      <div
        className="flex flex-col gap-6"
        data-testid="order-details-container"
      >
        <OrderDetails order={order} showStatus />
        <Items order={order} />
        <ShippingDetails order={order} />
        <OrderSummary order={order} />
        <Help />
      </div>
    </div>
  )
}

export default OrderDetailsTemplate