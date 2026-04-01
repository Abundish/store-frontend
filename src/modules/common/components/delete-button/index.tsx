"use client"

import { deleteLineItem } from "@lib/data/cart"
import { useState } from "react"
import { clx } from "@medusajs/ui"

const DeleteButton = ({
  id,
  children,
  className,
}: {
  id: string
  children?: React.ReactNode
  className?: string
}) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    setIsDeleting(true)
    await deleteLineItem(id).catch(() => setIsDeleting(false))
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className={clx(
        "flex items-center gap-1.5 font-dm-mono text-[10px] uppercase tracking-wide text-[#7A9B7A] hover:text-[#cc4400] transition-colors duration-150 disabled:opacity-40",
        className
      )}
    >
      {isDeleting ? (
        <span className="w-3 h-3 border border-[#7A9B7A] border-t-transparent rounded-full animate-spin" />
      ) : (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
      {children ?? "Remove"}
    </button>
  )
}

export default DeleteButton