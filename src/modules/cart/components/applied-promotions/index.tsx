"use client"

import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type AppliedPromotionsProps = {
  promotions?: HttpTypes.StorePromotion[]
  currencyCode: string
}

const AppliedPromotions = ({
  promotions = [],
  currencyCode,
}: AppliedPromotionsProps) => {
  if (!promotions.length) {
    return null
  }

  return (
    <div className="flex flex-col gap-2" data-testid="applied-promotions">
      {promotions.map((promo) => {
        const method = promo.application_method
        const discountLabel =
          method?.value !== undefined
            ? method.type === "percentage"
              ? `-${method.value}%`
              : `-${convertToLocale({
                  amount: +method.value,
                  currency_code: method.currency_code ?? currencyCode,
                })}`
            : null

        return (
          <div
            key={promo.id}
            className="flex justify-between text-[#006b2f] text-sm font-dm-sans"
            data-testid="applied-promotion-row"
          >
            <span>Promo: {promo.code}</span>
            {discountLabel && <span>{discountLabel}</span>}
          </div>
        )
      })}
    </div>
  )
}

export default AppliedPromotions
