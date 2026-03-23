import Image from "next/image"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[100vh]">
        {/* Left panel */}
        <div className="relative bg-[#F9F6EE] px-6 py-16 lg:px-14 lg:py-24 flex flex-col justify-center">
          <div className="absolute inset-0 pointer-events-none">
            <div className="abundish-grain-overlay h-full w-full" />
          </div>

          <div className="relative z-10 max-w-[560px]">
            <p className="font-dm-mono text-[#008528] uppercase tracking-[0.14em] text-xs">
              Farm · Fork · Future
            </p>

            <h1 className="font-fraunces text-[#006b2f] text-[44px] leading-[1.02] mt-4 lg:text-[72px]">
              Fresh from the farm. Delivered to your door.
            </h1>

            <p className="font-dm-sans text-[18px] leading-[1.6] text-[#1A1A1A] mt-6 max-w-[480px]">
              Abundish connects you directly with Nigerian farmers — no
              middlemen, no mystery. Just honest, traceable food at its peak
              freshness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 items-start">
              <LocalizedClientLink
                href="/store"
                className="h-[44px] px-6 rounded-full bg-[#FFCC00] text-[#1A1A1A] font-dm-sans font-semibold inline-flex items-center justify-center min-w-[220px] hover:brightness-95 transition"
              >
                Shop Fresh Produce
              </LocalizedClientLink>

              <a
                href="#how-it-works"
                className="h-[44px] px-6 rounded-full border border-[#008528] text-[#008528] font-dm-sans font-semibold inline-flex items-center justify-center min-w-[220px] hover:bg-[#006b2f] hover:border-[#006b2f] hover:text-white transition-colors"
              >
                How It Works
              </a>
            </div>

            <div className="flex items-center gap-4 mt-10 font-dm-mono text-[12px] text-[#008528] uppercase tracking-wide">
              <span>🌿 100% Farm Direct</span>
              <span className="text-[#1A1A1A]/40">|</span>
              <span>⚡ Same-Day Delivery</span>
              <span className="text-[#1A1A1A]/40">|</span>
              <span>📍 Lagos &amp; Abuja</span>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="relative bg-[#006b2f]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1543362906-acfc16c67580?auto=format&fit=crop&w=2200&q=80"
              alt="Fresh vegetables on a farm table"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-[#FFCC00]/10 mix-blend-multiply" />

          {/* Floating partner card */}
          <div className="absolute bottom-6 left-6 lg:left-[-10px] bg-white rounded-[16px] shadow-[0_18px_50px_rgba(0,0,0,0.18)] px-5 py-4 max-w-[280px]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#F9F6EE]">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&h=128&q=80"
                  alt="Verified partner farmer portrait"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-dm-sans font-semibold text-[#1A1A1A] leading-tight">
                  Tunde Adeyemi, Ogun State
                </p>
                <p className="font-dm-mono text-[12px] text-[#1A1A1A] mt-1">
                  ✓ Verified Partner Farmer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

