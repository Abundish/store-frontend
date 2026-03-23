import Image from "next/image"
import { Leaf } from "lucide-react"

export default function BrandStory() {
  return (
    <section className="w-full py-16 lg:py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-stretch">
          {/* Image */}
          <div className="relative flex-1 min-h-[320px] md:min-h-[520px] overflow-hidden rounded-none md:rounded-tr-[16px] md:rounded-br-[16px]">
            <Image
              src="https://images.unsplash.com/photo-1524594154908-edd198179e22?auto=format&fit=crop&w=2000&q=80"
              alt="Farm hands sorting fresh produce"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={false}
            />

            <div className="absolute top-6 left-6">
              <div className="bg-white rounded-full px-4 py-2 inline-flex items-center gap-2 shadow-sm">
                <Leaf size={18} className="text-[#FFCC00]" />
                <span className="font-dm-mono text-[#1A1A1A] text-[12px] font-semibold">
                  Farm to Table
                </span>
              </div>
            </div>
          </div>

          {/* Text panel */}
          <div className="flex-1 bg-[#F9F6EE] md:p-12 p-8 md:rounded-tl-[16px] md:rounded-bl-[16px]">
            <p className="font-dm-mono text-[#008528] uppercase tracking-[0.12em] text-xs">
              Why Abundish Exists
            </p>

            <h2 className="font-fraunces text-[#006b2f] text-[36px] leading-[1.1] mt-4 sm:text-[40px]">
              Food you can trust. Farmers you empower.
            </h2>

            <div className="mt-6 font-dm-sans text-[16px] leading-[1.8] text-[#1A1A1A] flex flex-col gap-4">
              <p>
                In Nigeria, the supply chain is often broken: middlemen inflate
                prices, and produce loses freshness while it travels.
              </p>
              <p>
                Abundish&apos;s model connects farmers directly, verifies supply
                through traceable partnerships, and delivers with technology-enabled
                cold-chain logistics.
              </p>
              <blockquote className="border-l-4 border-[#FFCC00] pl-4">
                We&apos;re building a mission-first marketplace for affordable,
                traceable produce — while strengthening farmers&apos; livelihoods
                for the long term.
              </blockquote>
            </div>

            <a
              href="/about"
              className="inline-flex mt-8 font-dm-sans font-semibold text-[#006b2f] hover:underline"
            >
              Our Story →
            </a>
          </div>
        </div>

        {/* Stats band */}
        <div className="mt-10 w-full bg-[#D6E8D0]/60 rounded-none py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[900px] mx-auto px-6">
            <div className="text-center">
              <p className="font-fraunces text-[#FFCC00] text-[52px] sm:text-[64px] leading-[0.9]">
                500+
              </p>
              <p className="font-dm-sans text-[#1A1A1A] text-[16px]">
                Verified Farmers
              </p>
            </div>
            <div className="text-center">
              <p className="font-fraunces text-[#FFCC00] text-[52px] sm:text-[64px] leading-[0.9]">
                20+
              </p>
              <p className="font-dm-sans text-[#1A1A1A] text-[16px]">
                Fresh Categories
              </p>
            </div>
            <div className="text-center">
              <p className="font-fraunces text-[#FFCC00] text-[52px] sm:text-[64px] leading-[0.9]">
                24hr
              </p>
              <p className="font-dm-sans text-[#1A1A1A] text-[16px]">
                Max Farm-to-Door
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

