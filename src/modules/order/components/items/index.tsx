import { HttpTypes } from "@medusajs/types"
import Image from "next/image"
import { convertToLocale } from "@lib/util/money"

type ItemsProps = {
  order: HttpTypes.StoreOrder
}

const Items = ({ order }: ItemsProps) => {
  const items = [...(order.items ?? [])].sort((a, b) =>
    (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
  )

  return (
    <div className="bg-white border border-[#D8E8D0] rounded-[18px] overflow-hidden">
      {/* Section header */}
      <div className="px-5 py-4 border-b border-[#EEF3EC]">
        <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.14em]">
          Items ordered
        </p>
      </div>

      <div className="divide-y divide-[#EEF3EC]" data-testid="products-table">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 px-5 py-4"
            data-testid="order-item"
          >
            {/* Thumbnail */}
            <div className="relative w-16 h-16 rounded-[12px] overflow-hidden bg-[#EEF3EC] shrink-0">
              {item.thumbnail ? (
                <Image
                  src={item.thumbnail}
                  alt={item.title ?? ""}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 16l4-6 3 4 2-3 4 5H3z" fill="#C8DEC2" />
                  </svg>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p
                className="font-fraunces text-[#1A3B1A] text-[16px] leading-snug truncate"
                data-testid="item-title"
              >
                {item.product_title}
              </p>
              {item.variant_title && item.variant_title !== "Default Variant" && (
                <p className="font-dm-mono text-[#7A9B7A] text-[11px] mt-0.5">
                  {item.variant_title}
                </p>
              )}
              <p className="font-dm-sans text-[#7A9B7A] text-[13px] mt-1">
                Qty{" "}
                <span className="text-[#3D5A3D] font-semibold" data-testid="item-quantity">
                  {item.quantity}
                </span>
              </p>
            </div>

            {/* Price */}
            <div className="text-right shrink-0">
              <p className="font-dm-mono text-[#006b2f] text-[15px] font-semibold">
                {convertToLocale({
                  amount: item.total ?? 0,
                  currency_code: order.currency_code,
                })}
              </p>
              {item.quantity > 1 && (
                <p className="font-dm-mono text-[#7A9B7A] text-[11px] mt-0.5">
                  {convertToLocale({
                    amount: (item.unit_price ?? 0),
                    currency_code: order.currency_code,
                  })}{" "}
                  each
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Items