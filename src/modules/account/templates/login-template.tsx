"use client"

import { useState } from "react"
import Register from "@modules/account/components/register"
import Login from "@modules/account/components/login"

export enum LOGIN_VIEW {
  SIGN_IN = "sign-in",
  REGISTER = "register",
}

const LoginTemplate = () => {
  const [currentView, setCurrentView] = useState("sign-in")

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#F9F6EE] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-[440px]">
        {/* Brand mark */}
        <div className="text-center mb-10">
          <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.18em] mb-2">
            Abundish
          </p>
          <div className="w-8 h-[2px] bg-[#FFCC00] rounded-full mx-auto" />
        </div>

        {currentView === "sign-in" ? (
          <Login setCurrentView={setCurrentView} />
        ) : (
          <Register setCurrentView={setCurrentView} />
        )}
      </div>
    </div>
  )
}

export default LoginTemplate