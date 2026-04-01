import { getPercentageDiff } from "@lib/util/get-percentage-diff"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type LineItemPriceProps = {
  item: HttpTypes.StoreCartLineItem | HttpTypes.StoreOrderLineItem
  style?: "default" | "tight"
  currencyCode: string
}

const LineItemPrice = ({ item, style = "default", currencyCode }: LineItemPriceProps) => {
  const { total, original_total } = item
  const hasReducedPrice = total < original_total

  return (
    <div className="flex flex-col items-end gap-0.5">
      {hasReducedPrice && (
        <span
          className="font-dm-mono text-[11px] text-[#7A9B7A] line-through"
          data-testid="product-original-price"
        >
          {convertToLocale({ amount: original_total, currency_code: currencyCode })}
        </span>
      )}
      <span
        className={`font-dm-mono text-[14px] font-semibold ${
          hasReducedPrice ? "text-[#cc4400]" : "text-[#1A3B1A]"
        }`}
        data-testid="product-price"
      >
        {convertToLocale({ amount: total, currency_code: currencyCode })}
      </span>
      {hasReducedPrice && style === "default" && (
        <span className="font-dm-mono text-[10px] bg-[#FFCC00] text-[#1A3B1A] px-1.5 py-0.5 rounded-full">
          -{getPercentageDiff(original_total, total)}%
        </span>
      )}
    </div>
  )
}

export default LineItemPrice