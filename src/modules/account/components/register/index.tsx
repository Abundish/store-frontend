"use client"

import { useActionState } from "react"
import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signup } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(signup, null)

  return (
    <div className="flex flex-col" data-testid="register-page">
      <h1 className="font-fraunces text-[#1A3B1A] text-[34px] leading-tight mb-2">
        Join Abundish
      </h1>
      <p className="font-dm-sans text-[#3D5A3D] text-[15px] mb-8">
        Create an account for a better shopping experience.
      </p>

      <form className="w-full flex flex-col gap-4" action={formAction}>
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="First name"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
          />
          <Input
            label="Last name"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
          />
        </div>
        <Input
          label="Email"
          name="email"
          required
          type="email"
          autoComplete="email"
          data-testid="email-input"
        />
        <Input
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          data-testid="phone-input"
        />
        <Input
          label="Password"
          name="password"
          required
          type="password"
          autoComplete="new-password"
          data-testid="password-input"
        />

        <ErrorMessage error={message} data-testid="register-error" />

        <p className="font-dm-sans text-[#7A9B7A] text-[12px] leading-relaxed mt-1">
          By creating an account, you agree to Abundish&apos;s{" "}
          <LocalizedClientLink href="/content/privacy-policy" className="underline hover:text-[#006b2f]">
            Privacy Policy
          </LocalizedClientLink>{" "}
          and{" "}
          <LocalizedClientLink href="/content/terms-of-use" className="underline hover:text-[#006b2f]">
            Terms of Use
          </LocalizedClientLink>
          .
        </p>

        <SubmitButton
          className="w-full h-[50px] !rounded-full !bg-[#006b2f] hover:!bg-[#008528] !border-0 font-dm-sans font-semibold text-[15px] mt-2"
          data-testid="register-button"
        >
          Create account
        </SubmitButton>
      </form>

      <p className="font-dm-sans text-[#3D5A3D] text-[13px] text-center mt-6">
        Already a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="text-[#008528] font-semibold hover:underline"
        >
          Sign in
        </button>
      </p>
    </div>
  )
}

export default Register