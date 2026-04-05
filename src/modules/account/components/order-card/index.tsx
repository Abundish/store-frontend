import { useMemo } from "react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type OrderCardProps = {
  order: HttpTypes.StoreOrder
}

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  // fulfillment statuses
  not_fulfilled:        { label: "Not fulfilled",  color: "#854F0B", bg: "#FAEEDA" },
  partially_fulfilled:  { label: "Partial",         color: "#854F0B", bg: "#FAEEDA" },
  fulfilled:            { label: "Fulfilled",        color: "#0F6E56", bg: "#E1F5EE" },
  partially_shipped:    { label: "Partial ship",     color: "#185FA5", bg: "#E6F1FB" },
  shipped:              { label: "Shipped",          color: "#185FA5", bg: "#E6F1FB" },
  returned:             { label: "Returned",         color: "#5F5E5A", bg: "#F1EFE8" },
  cancelled:            { label: "Cancelled",        color: "#A32D2D", bg: "#FCEBEB" },
  requires_action:      { label: "Action required",  color: "#993C1D", bg: "#FAECE7" },
  // payment statuses
  awaiting:             { label: "Awaiting payment", color: "#854F0B", bg: "#FAEEDA" },
  captured:             { label: "Paid",             color: "#0F6E56", bg: "#E1F5EE" },
  refunded:             { label: "Refunded",         color: "#5F5E5A", bg: "#F1EFE8" },
}

const StatusPill = ({ status }: { status: string }) => {
  const cfg = statusConfig[status] ?? { label: status, color: "#5F5E5A", bg: "#F1EFE8" }
  return (
    <span
      className="font-dm-mono text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full"
      style={{ color: cfg.color, backgroundColor: cfg.bg }}
    >
      {cfg.label}
    </span>
  )
}

const OrderCard = ({ order }: OrderCardProps) => {
  const numberOfLines = useMemo(
    () => order.items?.reduce((acc, item) => acc + item.quantity, 0) ?? 0,
    [order]
  )
  const numberOfProducts = useMemo(() => order.items?.length ?? 0, [order])

  const formattedDate = new Date(order.created_at).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  const visibleItems = order.items?.slice(0, 4) ?? []
  const overflow = numberOfProducts > 4 ? numberOfProducts - 4 : 0

  return (
    <div
      className="bg-white border border-[#D8E8D0] rounded-[18px] p-5 flex flex-col gap-4"
      data-testid="order-card"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <p className="font-dm-mono text-[#7A9B7A] text-[11px] uppercase tracking-[0.12em]">
            Order
          </p>
          <p className="font-fraunces text-[#1A3B1A] text-[22px] leading-none" data-testid="order-display-id">
            #{order.display_id}
          </p>
        </div>

        {/* Status pills — fulfillment + payment */}
        <div className="flex flex-col items-end gap-1.5">
          <StatusPill status={order.fulfillment_status} />
        </div>
      </div>

      {/* Meta row */}
      <div className="flex items-center gap-4 flex-wrap">
        <span className="font-dm-sans text-[13px] text-[#7A9B7A]" data-testid="order-created-at">
          {formattedDate}
        </span>
        <span className="w-1 h-1 rounded-full bg-[#C8DEC2]" />
        <span className="font-dm-sans text-[13px] text-[#7A9B7A]" data-testid="order-amount">
          {convertToLocale({
            amount: order.total,
            currency_code: order.currency_code,
          })}
        </span>
        <span className="w-1 h-1 rounded-full bg-[#C8DEC2]" />
        <span className="font-dm-sans text-[13px] text-[#7A9B7A]">
          {numberOfLines} {numberOfLines === 1 ? "item" : "items"}
        </span>
      </div>

      {/* Item thumbnails */}
      {visibleItems.length > 0 && (
        <div className="flex items-center gap-2">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="relative w-14 h-14 rounded-[10px] overflow-hidden bg-[#EEF3EC] shrink-0"
              data-testid="order-item"
              title={item.title}
            >
              {item.thumbnail ? (
                <Image
                  src={item.thumbnail}
                  alt={item.title ?? "Order item"}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 16l4-6 3 4 2-3 4 5H3z" fill="#C8DEC2" />
                  </svg>
                </div>
              )}
              {item.quantity > 1 && (
                <span className="absolute bottom-0.5 right-0.5 bg-[#006b2f] text-white font-dm-mono text-[9px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {item.quantity}
                </span>
              )}
            </div>
          ))}

          {overflow > 0 && (
            <div className="w-14 h-14 rounded-[10px] bg-[#EEF3EC] border border-dashed border-[#C8DEC2] flex flex-col items-center justify-center shrink-0">
              <span className="font-dm-mono text-[#7A9B7A] text-[10px] font-semibold">
                +{overflow}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex justify-end pt-1 border-t border-[#EEF3EC]">
        <LocalizedClientLink
          href={`/account/orders/details/${order.id}`}
          data-testid="order-details-link"
          className="font-dm-sans text-[13px] font-semibold text-[#008528] hover:text-[#006b2f] transition-colors flex items-center gap-1"
        >
          View details →
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default OrderCard