import { MapPin, Sprout, Truck } from "lucide-react"
import type { ReactNode } from "react"

function StepCard({
  step,
  icon,
  headline,
  body,
}: {
  step: string
  icon: ReactNode
  headline: string
  body: string
}) {
  return (
    <article className="bg-[#006b2f] border-t-2 border-[#FFCC00] text-white p-6 rounded-none">
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center w-[68px] shrink-0">
          <p className="font-fraunces text-[#FFCC00] text-[44px] leading-[1]">
            {step}
          </p>
        </div>
        <div className="flex flex-col">
          <div className="text-[#FFCC00]">
            {icon}
          </div>
          <h3 className="font-fraunces text-[20px] mt-2">{headline}</h3>
          <p className="font-dm-sans text-[14px] leading-[1.7] mt-3 text-white/90">
            {body}
          </p>
        </div>
      </div>
    </article>
  )
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full bg-[#006b2f] py-16 lg:py-28 overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <p className="font-dm-mono text-[#FFCC00] uppercase tracking-[0.14em] text-xs">
          The Abundish Way
        </p>
        <h2 className="font-fraunces text-white text-[36px] lg:text-[48px] mt-4">
          From soil to your table in one step.
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <StepCard
            step="01"
            icon={<Sprout size={26} strokeWidth={2.25} />}
            headline="Farmers Harvest at Peak"
            body="Our partner farmers harvest only when produce is at its nutritional peak — never before."
          />
          <StepCard
            step="02"
            icon={<Truck size={26} strokeWidth={2.25} />}
            headline="We Handle It Fresh"
            body="Cold-chain logistics and same-day dispatch means zero time wasted."
          />
          <StepCard
            step="03"
            icon={<MapPin size={26} strokeWidth={2.25} />}
            headline="Delivered to Your Door"
            body="Track your order in real time. Know exactly which farm your food came from."
          />
        </div>
      </div>
    </section>
  )
}

