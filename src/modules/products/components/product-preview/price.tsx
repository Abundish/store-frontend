import { clx } from "@medusajs/ui"
import { VariantPrice } from "types/global"

export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) return null

  return (
    <div className="flex flex-col items-end gap-0.5">
      {price.price_type === "sale" && (
        <span
          className="font-dm-mono text-[12px] text-[#7A9B7A] line-through leading-none"
          data-testid="original-price"
        >
          {price.original_price}
        </span>
      )}
      <span
        className={clx(
          "font-dm-mono text-[14px] font-semibold leading-none",
          price.price_type === "sale"
            ? "text-[#cc4400]"
            : "text-[#008528]"
        )}
        data-testid="price"
      >
        {price.calculated_price}
      </span>
    </div>
  )
}