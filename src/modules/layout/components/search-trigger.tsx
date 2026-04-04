"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import dynamic from "next/dynamic"

const SearchModal = dynamic(() => import("./search-modal"), { ssr: false })

export default function SearchTrigger({
  scrolled,
  className,
  label,
}: {
  scrolled?: boolean
  className?: string
  label?: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation() // prevent parent handlers from interfering
          setOpen(true)
        }}
        aria-label="Open search"
        className={`relative inline-flex items-center gap-3 text-[15px] font-medium transition-colors duration-200 ${className ?? ""} ${scrolled ? "text-white" : ""
          }`}
      >
        <Search size={18} />
        {label && <span>{label}</span>}
      </button>

      {open && <SearchModal onClose={() => setOpen(false)} />}
    </>
  )
}