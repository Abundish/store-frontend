"use client"

import { useEffect } from "react"

export default function NavScrollSync() {
  useEffect(() => {
    const header = document.getElementById("abundish-nav")
    if (!header) return

    const apply = () => {
      const scrolled = window.scrollY > 80
      header.setAttribute("data-scrolled", scrolled ? "true" : "false")
      header.classList.toggle("bg-[#006b2f]", scrolled)
      header.classList.toggle("bg-transparent", !scrolled)
      header.classList.toggle("shadow-[0_4px_24px_rgba(0,0,0,0.12)]", scrolled)
    }

    apply()
    window.addEventListener("scroll", apply, { passive: true })
    return () => window.removeEventListener("scroll", apply)
  }, [])

  return null
}

