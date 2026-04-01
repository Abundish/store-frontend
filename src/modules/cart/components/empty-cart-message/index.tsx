import LocalizedClientLink from "@modules/common/components/localized-client-link"

const EmptyCartMessage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-32 gap-6 text-center"
      data-testid="empty-cart-message"
    >
      {/* Illustration */}
      <div className="w-24 h-24 rounded-full bg-[#EEF3EC] flex items-center justify-center">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M8 38l9-14 7 10 5-7 7 11H8z" fill="#B5CEB5" />
          <circle cx="33" cy="12" r="5" fill="#B5CEB5" />
          <path d="M4 44 C4 44 12 38 22 38 C32 38 40 44 40 44" stroke="#D8E8D0" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      <div>
        <h1 className="font-fraunces text-[#1A3B1A] text-[36px] leading-tight mb-3">
          Your cart is empty
        </h1>
        <p className="font-dm-sans text-[#3D5A3D] text-[16px] max-w-[26rem] leading-relaxed">
          Nothing here yet — but the farm has plenty waiting for you.
        </p>
      </div>

      {/* Gold accent rule */}
      <div className="w-10 h-[2px] bg-[#FFCC00] rounded-full" />

      <LocalizedClientLink
        href="/store"
        className="h-[48px] px-8 rounded-full bg-[#006b2f] text-white font-dm-sans font-semibold text-[14px] hover:bg-[#008528] active:scale-[0.98] transition-all duration-150 flex items-center gap-2"
      >
        Browse the store
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </LocalizedClientLink>
    </div>
  )
}

export default EmptyCartMessage