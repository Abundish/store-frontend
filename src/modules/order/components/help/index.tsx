import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Help = () => {
  return (
    <div className="bg-[#EEF3EC] border border-[#C8DEC2] rounded-[18px] px-5 py-4 flex flex-col small:flex-row small:items-center small:justify-between gap-4">
      <div className="flex items-start gap-3">
        <span className="text-[#008528] text-[18px] mt-0.5 shrink-0">✦</span>
        <div>
          <p className="font-dm-sans text-[#1A3B1A] text-[14px] font-semibold mb-0.5">
            Need help with this order?
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <LocalizedClientLink
          href="/contact"
          className="font-dm-sans text-[13px] font-semibold text-[#008528] hover:text-[#006b2f] transition-colors"
        >
          Contact us →
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default Help