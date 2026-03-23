import Image from "next/image"

import { farmersData } from "../_data/farmers-data"

export default function FarmerSpotlight() {
  return (
    <section className="w-full bg-[#006b2f] py-16 lg:py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="font-fraunces text-white text-[32px] sm:text-[40px] lg:text-[48px]">
          Meet the people growing your food
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {farmersData.map((f) => (
            <article
              key={f.name}
              className="bg-[#006b2f] border-l-4 border-[#FFCC00] p-7 flex flex-col gap-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-[#D6E8D0]">
                  <Image
                    src={f.avatarUrl}
                    alt={`${f.name} profile photo`}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-dm-sans text-white font-semibold text-[16px] leading-tight">
                    {f.name}
                  </p>
                  <p className="font-dm-sans text-white/90 text-[14px]">
                    {f.state}
                  </p>
                </div>
              </div>

              <div className="font-dm-mono text-[#FFCC00] text-[12px] uppercase tracking-wide">
                {f.crop}
              </div>

              <p className="font-fraunces italic text-white text-[18px] leading-[1.5]">
                “{f.quote}”
              </p>

              <div className="mt-auto inline-flex items-center gap-2 bg-[#D6E8D0] text-[#006b2f] rounded-full px-4 py-2 w-fit">
                <span className="text-[14px]">✓</span>
                <span className="font-dm-sans text-[14px] font-semibold">
                  Verified Abundish Partner
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

