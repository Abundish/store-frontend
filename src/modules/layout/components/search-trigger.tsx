"use client"

import { useState, useRef } from "react"
import { Search } from "lucide-react"
import dynamic from "next/dynamic"

const SearchModal = dynamic(() => import("./search-modal"), { ssr: false })

export default function SearchTrigger({
  className,
  label,
}: {
  className?: string
  label?: string
}) {
  const [open, setOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleOpen = (e: React.MouseEvent) => {
    e.stopPropagation()
    setOpen(true)
    // Focus must happen synchronously inside the user-gesture handler
    // so mobile browsers honour it. rAF keeps it after React's paint.
    requestAnimationFrame(() => {
      inputRef.current?.focus()
    })
  }

  return (
    <>
      <button
        onClick={handleOpen}
        aria-label="Open search"
        className={`relative inline-flex items-center gap-3 text-[15px] font-medium 
          text-[#1A1A1A] md:group-data-[scrolled=true]:text-white 
          transition-colors duration-200 ${className ?? ""}`}
      >
        <Search size={18} />
        {label && <span>{label}</span>}
      </button>

      {open && <SearchModal onClose={() => setOpen(false)} inputRef={inputRef} />}
    </>
  )
}