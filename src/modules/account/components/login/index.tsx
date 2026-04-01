"use client"

import { useActionState } from "react"
import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { login } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(login, null)

  return (
    <div className="flex flex-col" data-testid="login-page">
      <h1 className="font-fraunces text-[#1A3B1A] text-[34px] leading-tight mb-2">
        Welcome back
      </h1>
      <p className="font-dm-sans text-[#3D5A3D] text-[15px] mb-8">
        Sign in to access your orders and profile.
      </p>

      <form className="w-full flex flex-col gap-4" action={formAction}>
        <Input
          label="Email"
          name="email"
          type="email"
          title="Enter a valid email address."
          autoComplete="email"
          required
          data-testid="email-input"
        />
        <Input
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          data-testid="password-input"
        />

        <ErrorMessage error={message} data-testid="login-error-message" />

        <SubmitButton
          data-testid="sign-in-button"
          className="w-full h-[50px] !rounded-full !bg-[#006b2f] hover:!bg-[#008528] !border-0 font-dm-sans font-semibold text-[15px] mt-2"
        >
          Sign in
        </SubmitButton>
      </form>

      <p className="font-dm-sans text-[#3D5A3D] text-[13px] text-center mt-6">
        Not a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="text-[#008528] font-semibold hover:underline"
          data-testid="register-button"
        >
          Join us
        </button>
      </p>
    </div>
  )
}

export default Login