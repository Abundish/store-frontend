import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="flex items-center justify-between bg-[#EEF3EC] border border-[#C8DEC2] rounded-[14px] px-5 py-4">
      <div>
        <p className="font-fraunces text-[#1A3B1A] text-[17px] leading-snug">
          Already have an account?
        </p>
        <p className="font-dm-sans text-[#3D5A3D] text-[13px] mt-0.5">
          Sign in for a faster checkout.
        </p>
      </div>
      <LocalizedClientLink
        href="/account"
        data-testid="sign-in-button"
        className="shrink-0 h-[38px] px-5 rounded-full border border-[#008528] text-[#008528] font-dm-sans font-semibold text-[13px] hover:bg-[#008528] hover:text-white transition-all duration-150 flex items-center"
      >
        Sign in
      </LocalizedClientLink>
    </div>
  )
}

export default SignInPrompt