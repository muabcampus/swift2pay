import { PhoneFrame } from "@/components/phone-frame"
import { SiteHeader } from "@/components/site-header"
import { LoginScreen } from "@/components/screens/login-screen"
import { HomeScreen } from "@/components/screens/home-screen"
import { TransactionScreen } from "@/components/screens/transaction-screen"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-5 pt-10 text-center sm:px-8 sm:pt-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-accent/60 px-3.5 py-1.5 text-[13px] font-medium text-accent-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Fintech Mobile App — 3 Screen Concept
        </div>
        <h1 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Swift2Pay — Fast, secure payments for traders
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
          A clean, high-trust mobile experience. Toggle light and dark mode from the top right — your
          preference is saved automatically with a smooth fade transition.
        </p>
      </section>

      {/* Screens */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-wrap items-start justify-center gap-10 lg:gap-14">
          <PhoneFrame label="1 — Login">
            <LoginScreen />
          </PhoneFrame>
          <PhoneFrame label="2 — Home">
            <HomeScreen />
          </PhoneFrame>
          <PhoneFrame label="3 — Confirm Payment">
            <TransactionScreen />
          </PhoneFrame>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center">
        <p className="text-[13px] text-muted-foreground">
          Swift2Pay · Secured by CBN Licensed Bank · 256-bit encryption
        </p>
      </footer>
    </main>
  )
}
