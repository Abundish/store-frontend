"use client"

import { useMemo, useState } from "react"

import { faqData } from "../_data/faq-data"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const items = useMemo(() => faqData, [])

  return (
    <section id="faq" className="w-full bg-white py-16 lg:py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="border-l-4 border-[#D6E8D0] pl-6">
          <h2 className="font-fraunces text-[#006b2f] text-[32px] sm:text-[40px]">
            Got questions?
          </h2>
          <p className="font-dm-sans text-[16px] leading-[1.7] text-[#1A1A1A] mt-3">
            We keep it transparent — just like our supply chain.
          </p>

          <div className="mt-8 flex flex-col">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx
              const panelId = `faq-panel-${idx}`
              const buttonId = `faq-button-${idx}`

              return (
                <div
                  key={item.question}
                  className="border-b border-[#D6E8D0] py-3"
                >
                  <button
                    id={buttonId}
                    type="button"
                    className="w-full text-left flex items-center justify-between gap-4"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                  >
                    <span className="font-dm-sans font-semibold text-[16px] text-[#1A1A1A]">
                      {item.question}
                    </span>
                    <span className="font-fraunces text-[#FFCC00] text-[22px] leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                    style={{ maxHeight: isOpen ? 220 : 0 }}
                  >
                    <p className="pt-3 pb-1 font-dm-sans text-[15px] leading-[1.7] text-[#1A1A1A] opacity-90">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

