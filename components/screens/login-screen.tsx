"use client"

import { useState } from "react"
import { Eye, EyeOff, Lock, ScanFace, ShieldCheck } from "lucide-react"
import { Swift2PayLogo } from "@/components/swift2pay-logo"

export function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-full flex-col px-6 pb-10">
      {/* Logo */}
      <div className="flex justify-center pt-10">
        <Swift2PayLogo size={52} />
      </div>

      {/* Title */}
      <div className="mt-9 text-center">
        <h1 className="text-[26px] font-bold tracking-tight text-foreground">Welcome Back</h1>
        <p className="mt-1.5 text-[15px] text-muted-foreground">Sign in to continue to your wallet</p>
      </div>

      {/* Form */}
      <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone Number
          </label>
          <div className="flex items-center gap-2 rounded-2xl border border-input bg-card px-4 focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20">
            <span className="text-[15px] font-medium text-muted-foreground">+234</span>
            <div className="h-5 w-px bg-border" />
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              placeholder="801 234 5678"
              defaultValue="801 234 5678"
              className="h-13 w-full bg-transparent py-3.5 text-[15px] text-foreground outline-none placeholder:text-muted-foreground/60"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="password" className="text-sm font-medium text-foreground">
            Password
          </label>
          <div className="flex items-center gap-2 rounded-2xl border border-input bg-card px-4 focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              defaultValue="password123"
              className="h-13 w-full bg-transparent py-3.5 text-[15px] text-foreground outline-none placeholder:text-muted-foreground/60"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Trust element */}
        <div className="flex gap-2.5 rounded-2xl border border-brand/20 bg-accent/60 p-3.5">
          <Lock className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
          <p className="text-[12.5px] leading-relaxed text-accent-foreground">
            Secured by CBN Licensed Bank | 256-bit encryption. We never ask full BVN on login.
          </p>
        </div>

        {/* Buttons */}
        <button
          type="submit"
          className="mt-1 h-13 w-full rounded-2xl bg-brand text-[15px] font-semibold text-brand-foreground shadow-[0_10px_24px_-8px_var(--brand)] transition-all hover:brightness-105 active:scale-[0.99]"
        >
          Login
        </button>

        <button
          type="button"
          className="flex h-13 w-full items-center justify-center gap-2.5 rounded-2xl border border-border bg-card text-[15px] font-semibold text-foreground transition-colors hover:bg-accent active:scale-[0.99]"
        >
          <ScanFace className="h-5 w-5 text-brand" />
          Login with Face ID
        </button>
      </form>

      {/* Bottom */}
      <div className="mt-auto pt-8 text-center">
        <button type="button" className="text-sm font-semibold text-brand hover:underline">
          Forgot password?
        </button>
        <div className="mt-5 flex items-center justify-center gap-1.5 text-[12px] text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-brand" />
          <span>Bank-grade security</span>
        </div>
      </div>
    </div>
  )
}
