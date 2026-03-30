type FilterRadioGroupProps = {
  title: string
  items: { value: string; label: string }[]
  value: any
  handleChange: (...args: any[]) => void
  "data-testid"?: string
}

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
  "data-testid": dataTestId,
}: FilterRadioGroupProps) => {
  return (
    <div className="flex flex-col gap-3" data-testid={dataTestId}>
      <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.14em]">
        {title}
      </p>

      <div className="flex flex-col gap-1">
        {items.map((item) => {
          const isActive = item.value === value
          return (
            <button
              key={item.value}
              onClick={() => handleChange(item.value)}
              data-testid="radio-label"
              data-active={isActive}
              className={`
                group flex items-center gap-3 py-2 px-3 rounded-[10px] text-left
                transition-all duration-150 w-full
                ${isActive
                  ? "bg-[#006b2f]/8 text-[#006b2f]"
                  : "text-[#4A6B4A] hover:bg-[#EEF3EC] hover:text-[#006b2f]"
                }
              `}
            >
              {/* Custom radio dot */}
              <span
                className={`
                  w-[14px] h-[14px] rounded-full border flex items-center justify-center shrink-0 transition-all duration-150
                  ${isActive
                    ? "border-[#006b2f] bg-[#006b2f]"
                    : "border-[#B5CEB5] group-hover:border-[#008528]"
                  }
                `}
              >
                {isActive && (
                  <span className="w-[5px] h-[5px] rounded-full bg-white block" />
                )}
              </span>

              <span className="font-dm-sans text-[14px] leading-none">
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default FilterRadioGroup