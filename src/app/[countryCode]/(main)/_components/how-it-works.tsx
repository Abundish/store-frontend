import { MapPin, Sprout, Truck } from "lucide-react"
import type { ReactNode } from "react"

const STEPS: {
  number: string
  icon: ReactNode
  headline: string
  body: string
}[] = [
  {
    number: "01",
    icon: (
      <Sprout
        size={36}
        strokeWidth={1.5}
        className="text-[#FFCC00]"
        aria-hidden
      />
    ),
    headline: "Harvested at peak nutrition",
    body:
      "Partner farmers cut only when produce has reached full nutritional density. Never early, never held.",
  },
  {
    number: "02",
    icon: (
      <Truck
        size={36}
        strokeWidth={1.5}
        className="text-[#FFCC00]"
        aria-hidden
      />
    ),
    headline: "Cold-chain, same-day dispatch",
    body:
      "From farm gate to our facility in hours — handled at controlled temperature the entire way.",
  },
  {
    number: "03",
    icon: (
      <MapPin
        size={36}
        strokeWidth={1.5}
        className="text-[#FFCC00]"
        aria-hidden
      />
    ),
    headline: "To your door, fully traceable",
    body:
      "Real-time order tracking. Get notified upon dispatch and delivery.",
  },
]

const DOT_GRID_SVG =
  "data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white'/%3E%3C/svg%3E"

function StepBody({
  icon,
  headline,
  body,
}: {
  icon: ReactNode
  headline: string
  body: string
}) {
  return (
    <>
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#FFCC00]/30">
        {icon}
      </div>
      <h3 className="font-fraunces mt-6 text-[26px] font-semibold leading-[1.15] text-white">
        {headline}
      </h3>
      <p className="font-dm-sans mt-3 max-w-[220px] text-[14px] leading-[1.8] text-white/70">
        {body}
      </p>
      <div className="mt-6 h-[2px] w-8 bg-[#FFCC00]" aria-hidden />
    </>
  )
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-hidden py-16 lg:py-28"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 110%, #004d22 0%, #006b2f 60%, #007a35 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("${DOT_GRID_SVG}")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <p className="font-dm-mono text-xs uppercase tracking-[0.14em] text-[#FFCC00]">
            The Abundish Way
          </p>
        </div>

        <h2 className="font-fraunces mt-4 text-[36px] leading-[1.1] text-white lg:text-[48px]">
          From soil to your table.
        </h2>
        <p className="font-dm-sans mt-3 max-w-md text-[15px] leading-[1.7] text-white/65">
          Three deliberate moves — harvest, move, arrive — so what lands on your plate
          still tastes like the field.
        </p>

        {/* Mobile: vertical timeline */}
        <div className="relative mt-12 md:hidden">
          <div
            className="absolute bottom-0 left-5 top-0 w-0.5 bg-white/15"
            aria-hidden
          />
          {STEPS.map((step) => (
            <div key={step.number} className="relative pb-10 pl-12 last:pb-0">
              <div
                className="absolute left-[14px] top-1 h-3 w-3 rounded-full bg-[#FFCC00]"
                aria-hidden
              />
              <StepBody
                icon={step.icon}
                headline={step.headline}
                body={step.body}
              />
            </div>
          ))}
        </div>

        {/* Desktop: editorial strip */}
        <div className="mt-14 hidden md:grid md:grid-cols-[1fr_1px_1fr_1px_1fr] md:items-stretch">
          {STEPS.map((step, index) => (
            <div key={step.number} className="contents">
              <div className="relative overflow-hidden px-10 py-8">
                <span
                  className="pointer-events-none absolute right-0 top-0 z-0 select-none font-fraunces text-[120px] font-black leading-none text-white/[0.06]"
                  aria-hidden
                >
                  {step.number}
                </span>
                <div className="relative z-10 flex flex-col items-start">
                  <StepBody
                    icon={step.icon}
                    headline={step.headline}
                    body={step.body}
                  />
                </div>
              </div>
              {index < STEPS.length - 1 ? (
                <div className="w-px bg-white/[0.12] self-stretch" aria-hidden />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
