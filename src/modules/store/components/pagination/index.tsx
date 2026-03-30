"use client"

import { clx } from "@medusajs/ui"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function Pagination({
  page,
  totalPages,
  "data-testid": dataTestid,
}: {
  page: number
  totalPages: number
  "data-testid"?: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", newPage.toString())
    router.push(`${pathname}?${params.toString()}`)
  }

  const arrayRange = (start: number, stop: number) =>
    Array.from({ length: stop - start + 1 }, (_, i) => start + i)

  const renderDot = (key: string) => (
    <span
      key={key}
      className="w-9 h-9 flex items-center justify-center font-dm-mono text-[14px] text-[#7A9B7A]"
    >
      ···
    </span>
  )

  const renderPage = (p: number, isCurrent: boolean) => (
    <button
      key={p}
      onClick={() => handlePageChange(p)}
      disabled={isCurrent}
      className={clx(
        "w-9 h-9 rounded-full font-dm-mono text-[14px] transition-all duration-150",
        isCurrent
          ? "bg-[#006b2f] text-white cursor-default"
          : "text-[#4A7A4A] hover:bg-[#EEF3EC] hover:text-[#006b2f]"
      )}
    >
      {p}
    </button>
  )

  const renderButtons = () => {
    const buttons: React.ReactNode[] = []

    if (totalPages <= 7) {
      arrayRange(1, totalPages).forEach((p) =>
        buttons.push(renderPage(p, p === page))
      )
    } else if (page <= 4) {
      arrayRange(1, 5).forEach((p) => buttons.push(renderPage(p, p === page)))
      buttons.push(renderDot("e1"))
      buttons.push(renderPage(totalPages, totalPages === page))
    } else if (page >= totalPages - 3) {
      buttons.push(renderPage(1, 1 === page))
      buttons.push(renderDot("e2"))
      arrayRange(totalPages - 4, totalPages).forEach((p) =>
        buttons.push(renderPage(p, p === page))
      )
    } else {
      buttons.push(renderPage(1, 1 === page))
      buttons.push(renderDot("e3"))
      arrayRange(page - 1, page + 1).forEach((p) =>
        buttons.push(renderPage(p, p === page))
      )
      buttons.push(renderDot("e4"))
      buttons.push(renderPage(totalPages, totalPages === page))
    }

    return buttons
  }

  return (
    <div className="flex justify-center w-full mt-16" data-testid={dataTestid}>
      <div className="flex items-center gap-1">
        {/* Prev */}
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="w-9 h-9 rounded-full flex items-center justify-center text-[#4A7A4A] hover:bg-[#EEF3EC] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150"
          aria-label="Previous page"
        >
          ←
        </button>

        {renderButtons()}

        {/* Next */}
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className="w-9 h-9 rounded-full flex items-center justify-center text-[#4A7A4A] hover:bg-[#EEF3EC] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150"
          aria-label="Next page"
        >
          →
        </button>
      </div>
    </div>
  )
}