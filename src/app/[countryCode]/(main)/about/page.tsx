import LocalizedClientLink from "@modules/common/components/localized-client-link"

const stats = [
  { value: "100%", label: "Farm-direct sourcing" },
  { value: "48h", label: "Farm to doorstep" },
  { value: "5+", label: "Partner farmers" },
  { value: "NGN", label: "Fair local pricing" },
]

const values = [
  {
    index: "01",
    title: "Freshness is a process",
    body:
      "We grow some of our produce ourselves, and work directly with trusted farmers to source the rest. Every item is carefully sorted and packaged to preserve its nutritional value and taste — no cold-chain shortcuts.",
  },
  {
    index: "02",
    title: "Farmers first",
    body:
      "By partnering with small- and medium-scale farmers across Nigeria, we create sustainable income at the source. When you shop with Abundish, you're putting money directly into rural communities.",
  },
  {
    index: "03",
    title: "Affordable without compromise",
    body:
      "We understand the economic realities Nigerian families face. Our pricing model gives customers genuine value while ensuring farmers are fairly paid — no one gets squeezed.",
  },
  {
    index: "04",
    title: "Convenience you can trust",
    body:
      "Easy ordering, same-day delivery, and responsive support. We exist to remove the stress of finding quality produce so you can focus on what you're making with it.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-[#F9F6EE] min-h-screen">

      {/* ── HERO ── */}
      <section className="max-w-[1100px] mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="flex flex-col gap-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#FFCC00]" />
            <p className="font-dm-mono text-[#008528] text-[11px] uppercase tracking-[0.16em]">
              Our story
            </p>
          </div>

          {/* Headline */}
          <h1 className="font-fraunces text-[#006b2f] text-[48px] sm:text-[64px] lg:text-[80px] leading-[1.0] max-w-[820px]">
            From the farm.<br />To your table.<br />
            <span className="text-[#1A3B1A]">Naturally.</span>
          </h1>

          {/* Subtext + CTA row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mt-4 max-w-[900px]">
            <p className="font-dm-sans text-[#3D5A3D] text-[17px] leading-[1.8] max-w-[480px]">
              Abundish is a Nigerian farm-to-table platform built on one conviction:
              access to quality food is not a luxury — it's a necessity. We connect
              local farmers directly with homes and businesses, cutting out the
              middlemen and keeping produce genuinely fresh.
            </p>
            <LocalizedClientLink
              href="/store"
              className="shrink-0 inline-flex items-center gap-2 font-dm-mono text-[12px] uppercase tracking-[0.14em] text-[#006b2f] border border-[#006b2f] rounded-full px-6 py-3 hover:bg-[#006b2f] hover:text-white transition-all duration-200"
            >
              Shop the harvest →
            </LocalizedClientLink>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="bg-[#006b2f] py-10">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#008528]">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#006b2f] px-8 py-8 flex flex-col gap-1">
                <p className="font-fraunces text-[#FFCC00] text-[40px] leading-none">
                  {s.value}
                </p>
                <p className="font-dm-mono text-[#A8C8A8] text-[11px] uppercase tracking-[0.12em]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="max-w-[1100px] mx-auto px-6 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-start">

          {/* Left label */}
          <div className="lg:w-[220px] shrink-0 flex flex-col gap-3 lg:pt-2">
            <div className="w-8 h-px bg-[#FFCC00]" />
            <p className="font-dm-mono text-[#7A9B7A] text-[11px] uppercase tracking-[0.14em]">
              Who we are
            </p>
          </div>

          {/* Right content */}
          <div className="flex flex-col gap-6 max-w-[640px]">
            <h2 className="font-fraunces text-[#006b2f] text-[34px] lg:text-[42px] leading-[1.15]">
              Revolutionizing the Nigerian agriculture ecosystem, one harvest at a time.
            </h2>
            <div className="flex flex-col gap-4 font-dm-sans text-[#3D5A3D] text-[16px] leading-[1.8]">
              <p>
                Abundish is not just a produce supplier. We cultivate a powerful network
                of local farmers — growing some produce ourselves, sourcing the rest
                directly from trusted partners — so that businesses and households
                across Nigeria always have access to farm-fresh food at honest prices.
              </p>
              <p>
                Our direct relationships with farmers reduce delays, eliminate
                unnecessary middlemen, and preserve the natural quality of every item we
                deliver. Every piece of produce is carefully handled, sorted, and
                packaged before it reaches you.
              </p>
              <p>
                When you patronize Abundish, you gain a reliable, high-quality food
                source — and you directly support the local communities and sustainable
                practices that make it possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="w-full h-px bg-[#D8E8D0]" />
      </div>

      {/* ── VALUES ── */}
      <section className="max-w-[1100px] mx-auto px-6 py-20 lg:py-28">
        <div className="flex flex-col gap-4 mb-14">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#FFCC00]" />
            <p className="font-dm-mono text-[#7A9B7A] text-[11px] uppercase tracking-[0.14em]">
              What we stand for
            </p>
          </div>
          <h2 className="font-fraunces text-[#1A3B1A] text-[34px] lg:text-[42px] leading-[1.1]">
            Our commitments
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D8E8D0]">
          {values.map((v) => (
            <div
              key={v.index}
              className="bg-[#F9F6EE] p-8 lg:p-10 flex flex-col gap-4 hover:bg-[#EEF3EC] transition-colors duration-200"
            >
              <p className="font-dm-mono text-[#C8DEC2] text-[12px]">{v.index}</p>
              <h3 className="font-fraunces text-[#006b2f] text-[22px] leading-snug">
                {v.title}
              </h3>
              <p className="font-dm-sans text-[#3D5A3D] text-[15px] leading-[1.75]">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="bg-[#FFCC00] py-16 lg:py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="flex flex-col gap-4 max-w-[520px]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#006b2f]" />
                <p className="font-dm-mono text-[#006b2f] text-[11px] uppercase tracking-[0.16em]">
                  Growing together
                </p>
              </div>
              <h2 className="font-fraunces text-[#0D3D20] text-[34px] lg:text-[44px] leading-[1.1]">
                Join us in building a healthier, more food-secure Nigeria.
              </h2>
              <p className="font-dm-sans text-[#1A4A2A] text-[15px] leading-[1.75]">
                Whether you're shopping for your home, your restaurant, or your business
                — Abundish has fresh, fairly priced produce ready for you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <LocalizedClientLink
                href="/store"
                className="inline-flex items-center justify-center gap-2 font-dm-mono text-[12px] uppercase tracking-[0.14em] bg-[#006b2f] text-white rounded-full px-7 py-4 hover:bg-[#0D3D20] transition-colors duration-200"
              >
                Shop now →
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-dm-mono text-[12px] uppercase tracking-[0.14em] border border-[#006b2f] text-[#006b2f] rounded-full px-7 py-4 hover:bg-[#006b2f] hover:text-white transition-all duration-200"
              >
                Get in touch
              </LocalizedClientLink>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}