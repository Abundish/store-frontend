import { HttpTypes } from "@medusajs/types"
import { clx } from "@medusajs/ui"
import React from "react"

type OptionSelectProps = {
  option: HttpTypes.StoreProductOption
  current: string | undefined
  updateOption: (title: string, value: string) => void
  title: string
  disabled: boolean
  "data-testid"?: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  const filteredOptions = (option.values ?? []).map((v) => v.value)

  return (
    <div className="flex flex-col gap-3">
      <p className="font-dm-mono text-[#7A9B7A] text-[11px] uppercase tracking-[0.12em]">
        {title}
      </p>
      <div className="flex flex-wrap gap-2" data-testid={dataTestId}>
        {filteredOptions.map((v) => (
          <button
            key={v}
            onClick={() => updateOption(option.id, v)}
            disabled={disabled}
            data-testid="option-button"
            className={clx(
              "font-dm-sans text-[14px] px-4 py-2 rounded-full border transition-all duration-150",
              v === current
                ? "bg-[#006b2f] text-white border-[#006b2f]"
                : "bg-white text-[#3D5A3D] border-[#C8DEC2] hover:border-[#008528] hover:text-[#008528]",
              disabled && "opacity-40 cursor-not-allowed"
            )}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  )
}

export default OptionSelect