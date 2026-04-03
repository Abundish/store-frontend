"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import dynamic from "next/dynamic"

const SearchModal = dynamic(() => import("./search-modal"), { ssr: false })

export default function SearchTrigger({ scrolled }: { scrolled?: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open search"
        className={`relative inline-flex items-center text-[15px] font-medium transition-colors duration-200 ${
          scrolled ? "text-white" : "text-[#1A1A1A]"
        }`}
      >
        <Search size={18} />
      </button>

      {open && <SearchModal onClose={() => setOpen(false)} />}
    </>
  )
}