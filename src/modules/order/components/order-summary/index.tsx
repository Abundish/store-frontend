import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type OrderSummaryProps = {
  order: HttpTypes.StoreOrder
}

const OrderSummary = ({ order }: OrderSummaryProps) => {
  const fmt = (amount?: number | null) => {
    if (amount == null) return null
    return convertToLocale({ amount, currency_code: order.currency_code })
  }

  return (
    <div className="bg-white border border-[#D8E8D0] rounded-[18px] overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#EEF3EC]">
        <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.14em]">
          Order summary
        </p>
      </div>

      <div className="px-5 py-4 flex flex-col gap-2">
        {/* Subtotal */}
        <div className="flex items-center justify-between">
          <span className="font-dm-sans text-[#3D5A3D] text-[14px]">Subtotal</span>
          <span className="font-dm-mono text-[#1A3B1A] text-[14px]">
            {fmt(order.subtotal)}
          </span>
        </div>

        {/* Discount */}
        {order.discount_total > 0 && (
          <div className="flex items-center justify-between">
            <span className="font-dm-sans text-[#3D5A3D] text-[14px]">Discount</span>
            <span className="font-dm-mono text-[#cc4400] text-[14px]">
              − {fmt(order.discount_total)}
            </span>
          </div>
        )}

        {/* Gift card */}
        {order.gift_card_total > 0 && (
          <div className="flex items-center justify-between">
            <span className="font-dm-sans text-[#3D5A3D] text-[14px]">Gift card</span>
            <span className="font-dm-mono text-[#cc4400] text-[14px]">
              − {fmt(order.gift_card_total)}
            </span>
          </div>
        )}

        {/* Shipping */}
        <div className="flex items-center justify-between">
          <span className="font-dm-sans text-[#3D5A3D] text-[14px]">Shipping</span>
          <span className="font-dm-mono text-[#1A3B1A] text-[14px]">
            {fmt(order.shipping_total)}
          </span>
        </div>

        {/* Tax */}
        {(order.tax_total ?? 0) > 0 && (
          <div className="flex items-center justify-between">
            <span className="font-dm-sans text-[#3D5A3D] text-[14px]">Tax</span>
            <span className="font-dm-mono text-[#1A3B1A] text-[14px]">
              {fmt(order.tax_total)}
            </span>
          </div>
        )}

        {/* Divider */}
        <div className="w-full h-px border-t border-dashed border-[#D8E8D0] my-2" />

        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="font-fraunces text-[#1A3B1A] text-[18px]">Total</span>
          <span className="font-fraunces text-[#006b2f] text-[22px]">
            {fmt(order.total)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary