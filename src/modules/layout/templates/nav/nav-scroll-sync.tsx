"use client"

import { useEffect } from "react"

export default function NavScrollSync() {
  useEffect(() => {
    const header = document.getElementById("abundish-nav")
    if (!header) return

    const apply = () => {
      const scrolled = window.scrollY > 80
      header.classList.toggle("bg-[#006b2f]", scrolled)
      header.classList.toggle("bg-transparent", !scrolled)
      header.classList.toggle("text-[#F9F6EE]", scrolled)
      header.classList.toggle("text-white", !scrolled)
      header.classList.toggle(
        "shadow-[0_10px_30px_rgba(0,0,0,0.18)]",
        scrolled
      )
    }

    apply()
    window.addEventListener("scroll", apply, { passive: true })
    return () => window.removeEventListener("scroll", apply)
  }, [])

  return null
}

