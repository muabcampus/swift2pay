"use client"

import { useState } from "react"
import {
  BadgeCheck,
  Check,
  ChevronLeft,
  Download,
  RotateCcw,
  ShieldCheck,
  Store,
} from "lucide-react"

export function TransactionScreen() {
  const [success, setSuccess] = useState(false)

  return (
    <div className="relative flex min-h-full flex-col px-6 pb-10">
      {/* Header */}
      <header className="flex items-center gap-3 pt-5">
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent"
          aria-label="Go back"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h1 className="text-[18px] font-bold text-foreground">
          {success ? "Payment Complete" : "Confirm Payment"}
        </h1>
      </header>

      {success ? (
        <SuccessState />
      ) : (
        <>
          {/* Merchant */}
          <div className="mt-8 flex flex-col items-center text-center">
            <div className="flex h-18 w-18 items-center justify-center rounded-3xl bg-accent text-brand">
              <Store className="h-8 w-8" />
            </div>
            <h2 className="mt-4 text-[20px] font-bold text-foreground">Musa Store</h2>
            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-brand/15 px-3 py-1 text-[12.5px] font-semibold text-brand">
              <BadgeCheck className="h-4 w-4" />
              Verified Merchant
            </div>
          </div>

          {/* Amount breakdown */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card">
            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-[14px] text-muted-foreground">Amount</span>
              <span className="text-[15px] font-semibold tabular-nums text-foreground">₦5,000.00</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-[14px] text-muted-foreground">Transaction Fee</span>
              <span className="text-[15px] font-semibold tabular-nums text-foreground">₦10.00</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-center justify-between bg-accent/60 px-5 py-4">
              <span className="text-[15px] font-bold text-foreground">Total</span>
              <span className="text-[20px] font-bold tabular-nums text-brand">₦5,010.00</span>
            </div>
          </div>

          {/* Payment source */}
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-3.5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-[11px] font-bold text-brand-foreground">
                S2P
              </span>
              <div>
                <p className="text-[13.5px] font-semibold text-foreground">Swift2Pay Wallet</p>
                <p className="text-[12px] text-muted-foreground">Balance: ₦152,450.50</p>
              </div>
            </div>
            <span className="text-[12px] font-semibold text-brand">Change</span>
          </div>

          {/* Trust text */}
          <div className="mt-4 flex items-center justify-center gap-2 text-[12.5px] text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-brand" />
            <span>Your money is protected. Instant refund if failed.</span>
          </div>

          {/* Pay button */}
          <button
            type="button"
            onClick={() => setSuccess(true)}
            className="mt-auto h-14 w-full rounded-2xl bg-brand text-[16px] font-bold text-brand-foreground shadow-[0_12px_28px_-10px_var(--brand)] transition-all hover:brightness-105 active:scale-[0.99]"
          >
            Pay Now ₦5,010
          </button>
        </>
      )}
    </div>
  )
}

function SuccessState() {
  return (
    <div className="flex flex-1 flex-col items-center pt-6 text-center">
      {/* Checkmark */}
      <div className="relative mt-8 flex h-28 w-28 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/25 [animation-iteration-count:3]" />
        <span className="relative flex h-24 w-24 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-[0_16px_36px_-12px_var(--brand)]">
          <Check className="h-12 w-12" strokeWidth={3} />
        </span>
      </div>

      <h2 className="mt-7 text-[22px] font-bold text-foreground">Transaction Successful!</h2>
      <p className="mt-2 text-[15px] text-muted-foreground">
        Your payment to <span className="font-semibold text-foreground">Musa Store</span> was completed.
      </p>

      {/* Amount */}
      <p className="mt-5 text-[34px] font-bold tabular-nums text-foreground">₦5,010.00</p>

      {/* Receipt ID */}
      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
        <span className="text-[12.5px] text-muted-foreground">Receipt ID:</span>
        <span className="text-[12.5px] font-bold tracking-wide text-foreground">SWP-89234</span>
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-[12px] text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5 text-brand" />
        Protected transaction — instant refund if failed
      </div>

      {/* Buttons */}
      <div className="mt-auto w-full space-y-3 pt-10">
        <button
          type="button"
          className="flex h-13 w-full items-center justify-center gap-2.5 rounded-2xl bg-brand text-[15px] font-semibold text-brand-foreground shadow-[0_10px_24px_-10px_var(--brand)] transition-all hover:brightness-105 active:scale-[0.99]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Share via WhatsApp
        </button>
        <button
          type="button"
          className="flex h-13 w-full items-center justify-center gap-2.5 rounded-2xl border border-border bg-card text-[15px] font-semibold text-foreground transition-colors hover:bg-accent active:scale-[0.99]"
        >
          <Download className="h-5 w-5 text-brand" />
          Download Receipt
        </button>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-1.5 pt-1 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Make another payment
        </button>
      </div>
    </div>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.47-3.63 8.1-8.1 8.1h-.01a8.1 8.1 0 0 1-4.12-1.13l-.3-.18-3.06.8.82-2.99-.19-.31a8.03 8.03 0 0 1-1.24-4.3c0-4.46 3.63-8.09 8.11-8.09Zm4.68 11.5c-.26-.13-1.51-.75-1.75-.83-.23-.08-.4-.13-.57.13-.17.26-.65.83-.8 1-.15.17-.29.19-.55.06-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.28-1.52-1.43-1.78-.15-.26-.02-.4.11-.53.12-.12.26-.29.39-.44.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.57-1.38-.79-1.89-.21-.5-.42-.43-.57-.44l-.49-.01c-.17 0-.44.06-.67.32-.23.26-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.51-.62 1.72-1.21.21-.6.21-1.11.15-1.21-.06-.11-.23-.17-.49-.3Z" />
    </svg>
  )
}
