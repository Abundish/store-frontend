"use client"

import { useRef } from "react"

const pressLinks = [
  {
    label: "Daily Trust",
    href: "https://dailytrust.com/abundish-nigeria-ceo-barr-gboyega-adetunji-honoured-by-oau/",
  },
  {
    label: "This Day Live",
    href: "https://www.thisdaylive.com/2024/07/07/lagos-lawyer-gboyega-adetunji-delves-into-agriculture-floats-abundish-2/",
  },
  {
    label: "Lagos Today",
    href: "https://lagostoday.com.ng/lagos-lawyer-gboyega-adetunji-delves-into-agriculture-floats-abundish-a-revolutionary-farm-to-table-outfit/",
  },
]

const ITEMS = [...pressLinks, ...pressLinks, ...pressLinks, ...pressLinks]

export default function TrustBar() {
  const trackRef = useRef<HTMLDivElement>(null)

  return (
    <section className="w-full bg-[#F9F6EE] border-y border-[#D6E8D0] py-6">
      <style>{`
        @keyframes abundish-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .abundish-marquee-track {
            animation: none !important;
          }
        }
      `}</style>

      <p className="text-center font-dm-mono text-[11px] tracking-[0.2em] text-[#1A1A1A]/50 uppercase mb-5">
        Featured In
      </p>

      <div className="relative w-full overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
          style={{ background: "linear-gradient(to right, #F9F6EE, transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
          style={{ background: "linear-gradient(to left, #F9F6EE, transparent)" }}
        />

        <div
          ref={trackRef}
          className="abundish-marquee-track flex items-center w-max"
          style={{ animation: "abundish-marquee 28s linear infinite" }}
          onMouseEnter={() => {
            if (trackRef.current) {
              trackRef.current.style.animationPlayState = "paused"
            }
          }}
          onMouseLeave={() => {
            if (trackRef.current) {
              trackRef.current.style.animationPlayState = "running"
            }
          }}
        >
          {ITEMS.map((p, i) => (
            <div key={i} className="flex items-center shrink-0">
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="font-fraunces italic text-[18px] text-[#1A1A1A]/60 hover:text-[#006b2f] transition-colors duration-200 whitespace-nowrap px-2"
              >
                {p.label}
              </a>
              <span
                className="text-[#FFCC00] text-[10px] mx-5 select-none shrink-0"
                aria-hidden="true"
              >
                ◆
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}