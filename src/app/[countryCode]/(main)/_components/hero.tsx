import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[calc(100vh-64px)]">
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[calc(100vh-64px)]">
        {/* Left panel */}
        <div className="relative bg-[#F9F6EE] px-6 py-16 lg:px-14 lg:py-24 flex flex-col justify-center">
          <div className="absolute inset-0 pointer-events-none">
            <div className="abundish-grain-overlay h-full w-full" />
          </div>

          <div className="relative z-10 max-w-[560px]">
            <h1 className="font-fraunces text-[#006b2f] text-[44px] leading-[1.02] mt-4 lg:text-[72px]">
              Sourced from the farm. Fresh to your door.
            </h1>

            <p className="font-dm-sans text-[18px] leading-[1.6] text-[#1A1A1A] mt-6 max-w-[480px]">
              Abundish partners with verified Nigerian farms to bring you fresh,
              quality produce. Stored at our facility and delivered with full traceability.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-10">
              <LocalizedClientLink
                href="/store"
                className="group h-[52px] px-8 rounded-[6px] bg-[#006b2f] text-white font-dm-sans font-semibold text-[15px] tracking-[-0.01em] inline-flex items-center justify-center gap-3 w-full sm:w-auto shadow-[0_2px_12px_rgba(0,107,47,0.25)] hover:bg-[#008528] transition-colors duration-200"
              >
                Shop Fresh Produce
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </LocalizedClientLink>

              <a
                href="#how-it-works"
                className="group inline-flex items-center justify-center sm:justify-start gap-2 font-dm-sans font-medium text-[15px] text-[#006b2f] hover:text-[#008528] transition-colors w-full sm:w-auto"
              >
                <Play size={14} fill="currentColor" className="opacity-70" />
                <span className="relative inline-block pb-[3px]">
                  <span>How It Works</span>
                  <span className="absolute left-0 bottom-0 h-[2px] w-full origin-left scale-x-100 bg-[#FFCC00] transition-transform duration-200 group-hover:scale-x-95" />
                </span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-10 font-dm-mono text-[12px] text-[#008528] uppercase tracking-wide">
              <span>🌿 100% Farm Direct</span>
              <span className="text-[#1A1A1A]/40 inline">|</span>

              <span>⚡ Same-Day Delivery</span>
              <span className="text-[#1A1A1A]/40 inline">|</span>

              <span>📍 Lagos</span>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="relative bg-[#006b2f] min-h-[360px] lg:min-h-0">
          <div className="absolute inset-0">
            <Image
              src="/hero-image.jpg"
              alt="Fresh farm produce — harvested at peak freshness for Abundish"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

