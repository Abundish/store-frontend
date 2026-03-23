const pressLinks = [
  {
    label: "Daily Trust",
    href:
      "https://dailytrust.com/abundish-nigeria-ceo-barr-gboyega-adetunji-honoured-by-oau/",
  },
  {
    label: "This Day Live",
    href:
      "https://www.thisdaylive.com/2024/07/07/lagos-lawyer-gboyega-adetunji-delves-into-agriculture-floats-abundish-2/",
  },
  {
    label: "Lagos Today",
    href:
      "https://lagostoday.com.ng/lagos-lawyer-gboyega-adetunji-delves-into-agriculture-floats-abundish-a-revolutionary-farm-to-table-outfit/",
  },
]

export default function TrustBar() {
  return (
    <section className="w-full bg-[#F9F6EE] border-y border-[#D6E8D0] py-10">
      <div className="max-w-[1100px] w-full mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <p className="font-dm-sans text-[12px] tracking-[0.18em] text-[#1A1A1A] uppercase">
            FEATURED IN
          </p>
          <div className="w-full flex flex-wrap justify-center gap-4">
            {pressLinks.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full bg-white border border-[#D6E8D0] text-[#1A1A1A] font-dm-sans text-[13px] font-semibold hover:bg-[#F3F6F1] transition"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

