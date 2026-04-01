import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"
import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  cart?: HttpTypes.StoreCart
}

const ItemsTemplate = ({ cart }: ItemsTemplateProps) => {
  const items = cart?.items?.sort((a, b) =>
    (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
  )

  return (
    <div>
      {/* Header row */}
      <div className="flex items-end justify-between mb-6">
        <h1 className="font-fraunces text-[#1A3B1A] text-[36px] leading-none">
          Your cart
        </h1>
        <span className="font-dm-mono text-[#7A9B7A] text-[12px] uppercase tracking-[0.12em]">
          {items?.length ?? 0} {(items?.length ?? 0) === 1 ? "item" : "items"}
        </span>
      </div>

      {/* Column labels */}
      <div className="hidden small:grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 pb-3 border-b border-[#D8E8D0]">
        <span className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.12em]">Product</span>
        <span className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.12em] text-center">Qty</span>
        <span className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.12em] text-right">Unit</span>
        <span className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.12em] text-right">Total</span>
      </div>

      {/* Items */}
      <div className="flex flex-col divide-y divide-[#D8E8D0]" data-testid="items-list">
        {items
          ? items.map((item) => (
              <Item
                key={item.id}
                item={item}
                currencyCode={cart?.currency_code}
              />
            ))
          : repeat(3).map((i) => <SkeletonLineItem key={i} />)}
      </div>
    </div>
  )
}

export default ItemsTemplate