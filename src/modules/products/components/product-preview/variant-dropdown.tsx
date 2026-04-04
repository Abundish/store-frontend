"use client"

import { useEffect, useRef, useState } from "react"

type VariantOption = {
    id: string
    label: string
    inStock: boolean
}

type Props = {
    options: VariantOption[]
    selected: string
    onChange: (id: string) => void
    disabled?: boolean
}

export default function VariantDropdown({ options, selected, onChange, disabled }: Props) {
    const [open, setOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const selectedOption = options.find((o) => o.id === selected)

    // Close on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }, [])

    // Close on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false)
        }
        document.addEventListener("keydown", handler)
        return () => document.removeEventListener("keydown", handler)
    }, [])

    const handleSelect = (id: string, inStock: boolean) => {
        if (!inStock) return
        onChange(id)
        setOpen(false)
    }

    return (
        <div ref={containerRef} className="relative w-full">
            {/* Trigger */}
            <button
                type="button"
                onClick={() => !disabled && setOpen((v) => !v)}
                disabled={disabled}
                aria-haspopup="listbox"
                aria-expanded={open}
                className={`
          w-full flex items-center justify-between
          px-4 py-[9px]
          rounded-full border
          font-dm-mono text-[12px]
          transition-all duration-200
          ${disabled
                        ? "border-[#D4E6CE] text-[#7A9B7A] cursor-not-allowed bg-white"
                        : open
                            ? "border-[#006b2f] bg-white text-[#1A3B1A] shadow-[0_0_0_3px_rgba(0,107,47,0.08)]"
                            : "border-[#D4E6CE] bg-white text-[#1A3B1A] hover:border-[#006b2f]/50"
                    }
        `}
            >
                <span className="flex items-center gap-2 min-w-0">
                    {/* Stock dot */}
                    <span
                        className={`flex-shrink-0 w-[6px] h-[6px] rounded-full transition-colors duration-200 ${selectedOption?.inStock ? "bg-[#008528]" : "bg-[#cc4400]"
                            }`}
                    />
                    <span className="truncate">{selectedOption?.label ?? "Select variant"}</span>
                </span>

                {/* Animated chevron */}
                <span
                    className={`flex-shrink-0 ml-2 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
                >
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path
                            d="M1.5 3.5l4 4 4-4"
                            stroke="#7A9B7A"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </button>

            {/* Panel */}
            <div
                role="listbox"
                className={`
          absolute z-50 left-0 right-0 mt-1.5
          bg-white border border-[#D4E6CE] rounded-[14px]
          shadow-[0_8px_24px_rgba(0,107,47,0.10)]
          overflow-hidden
          transition-all duration-200 origin-top
          ${open
                        ? "opacity-100 scale-y-100 pointer-events-auto"
                        : "opacity-0 scale-y-95 pointer-events-none"
                    }
        `}
                style={{ transformOrigin: "top center" }}
            >
                <div className="py-1.5 max-h-[200px] overflow-y-auto">
                    {options.map((opt, i) => {
                        const isSelected = opt.id === selected
                        return (
                            <button
                                key={opt.id}
                                role="option"
                                aria-selected={isSelected}
                                type="button"
                                onClick={() => handleSelect(opt.id, opt.inStock)}
                                disabled={!opt.inStock}
                                className={`
                  w-full flex items-center justify-between
                  px-4 py-[9px]
                  font-dm-mono text-[12px]
                  text-left transition-colors duration-100
                  ${!opt.inStock
                                        ? "text-[#AECAAE] cursor-not-allowed"
                                        : isSelected
                                            ? "text-[#006b2f] bg-[#EEF3EC]"
                                            : "text-[#1A3B1A] hover:bg-[#F4FAF0] cursor-pointer"
                                    }
                `}
                            >
                                <span className="flex items-center gap-2">
                                    <span
                                        className={`w-[6px] h-[6px] rounded-full flex-shrink-0 ${!opt.inStock
                                                ? "bg-[#DDEEDD]"
                                                : isSelected
                                                    ? "bg-[#006b2f]"
                                                    : "bg-[#008528]"
                                            }`}
                                    />
                                    {opt.label}
                                </span>

                                <span className="flex items-center gap-2">
                                    {!opt.inStock && (
                                        <span className="text-[10px] text-[#AECAAE] uppercase tracking-wider">
                                            Out of stock
                                        </span>
                                    )}
                                    {isSelected && opt.inStock && (
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path
                                                d="M2 6l3 3 5-5"
                                                stroke="#006b2f"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}