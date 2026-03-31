import { clx } from "@medusajs/ui"
import { VariantPrice } from "types/global"
export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) return null

  function formatNaira(value: string | number) {
    if (!value) return ""

    // Convert to number (handles "NGN 1000.00" or "1000.00")
    const numeric = Number(value.toString().replace(/[^0-9.]/g, ""))

    // Format without decimals and add ₦
    return `₦${Math.trunc(numeric)}`
  }

  return (
    <div className="flex flex-col items-end gap-0.5">
      {price.price_type === "sale" && (
        <span
          className="font-dm-mono text-[12px] text-[#7A9B7A] line-through leading-none"
          data-testid="original-price"
        >
          {formatNaira(price.original_price)}
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
        {formatNaira(price.calculated_price)}
      </span>
    </div>
  )
}