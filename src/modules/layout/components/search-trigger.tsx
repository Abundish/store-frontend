"use client"

import { useState, useRef } from "react"
import { flushSync } from "react-dom"
import { Search } from "lucide-react"
import SearchModal from "./search-modal"

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
    // Render the input before this click handler returns, then focus it
    // in the same gesture so the caret (and mobile keyboard) land in the field.
    flushSync(() => {
      setOpen(true)
    })
    inputRef.current?.focus()
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

      {open && <SearchModal onClose={() => setOpen(false)} inputRef={inputRef as React.RefObject<HTMLInputElement>} />}
    </>
  )
}