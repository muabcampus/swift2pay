"use client"

import { useState } from "react"
import {
  ArrowUpRight,
  Bell,
  Eye,
  EyeOff,
  Headphones,
  MessageCircle,
  Plus,
  Receipt,
  Send,
  Smartphone,
  Star,
  Store,
} from "lucide-react"

const transactions = [
  {
    name: "Musa Store",
    detail: "Payment • Today, 9:24 AM",
    amount: "-₦5,000",
    negative: true,
    icon: Store,
  },
  {
    name: "MTN Airtime",
    detail: "Airtime • Today, 8:10 AM",
    amount: "-₦1,000",
    negative: true,
    icon: Smartphone,
  },
  {
    name: "Amina Yusuf",
    detail: "Received • Yesterday, 6:45 PM",
    amount: "+₦20,000",
    negative: false,
    icon: ArrowUpRight,
  },
]

const actions = [
  { label: "Send Money", icon: Send },
  { label: "Pay Bills", icon: Receipt },
  { label: "History", icon: Receipt },
]

export function HomeScreen() {
  const [hidden, setHidden] = useState(false)

  return (
    <div className="relative flex min-h-full flex-col px-5 pb-10">
      {/* Header */}
      <header className="flex items-center justify-between pt-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-[15px] font-bold text-brand-foreground">
            A
          </div>
          <div>
            <p className="text-[12px] text-muted-foreground">Good Morning,</p>
            <p className="text-[16px] font-bold text-foreground">Aisha</p>
          </div>
        </div>
        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-brand ring-2 ring-card" />
        </button>
      </header>

      {/* Balance card */}
      <div className="relative mt-6 overflow-hidden rounded-3xl bg-brand p-5 text-brand-foreground shadow-[0_18px_40px_-16px_var(--brand)]">
        <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-white/10" />
        <div className="absolute -bottom-12 -left-6 h-32 w-32 rounded-full bg-black/5" />
        <div className="relative flex items-center justify-between">
          <span className="text-[13px] font-medium opacity-90">Total Balance</span>
          <button
            type="button"
            onClick={() => setHidden((v) => !v)}
            className="flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm transition-colors hover:bg-white/30"
            aria-label={hidden ? "Show balance" : "Hide balance"}
          >
            {hidden ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
            {hidden ? "Show" : "Hide"}
          </button>
        </div>
        <p className="relative mt-2 text-[32px] font-bold tabular-nums tracking-tight">
          {hidden ? "₦ • • • • • • •" : "₦152,450.50"}
        </p>
        <div className="relative mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-white/20 px-2 py-1 text-[11px] font-medium backdrop-blur-sm">
              •••• 4821
            </span>
            <span className="text-[12px] opacity-90">Swift2Pay Wallet</span>
          </div>
          <button
            type="button"
            className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1.5 text-[12px] font-semibold backdrop-blur-sm transition-colors hover:bg-white/30"
          >
            <Plus className="h-3.5 w-3.5" />
            Top Up
          </button>
        </div>
      </div>

      {/* Quick actions */}
      <div className="mt-5 grid grid-cols-3 gap-3">
        {actions.map(({ label, icon: Icon }) => (
          <button
            key={label}
            type="button"
            className="flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-card py-4 transition-all hover:bg-accent active:scale-[0.98]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-brand">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-[12.5px] font-semibold text-foreground">{label}</span>
          </button>
        ))}
      </div>

      {/* Recent transactions */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-[15px] font-bold text-foreground">Recent Transactions</h2>
          <button type="button" className="text-[13px] font-semibold text-brand hover:underline">
            See all
          </button>
        </div>
        <div className="mt-3 space-y-2.5">
          {transactions.map(({ name, detail, amount, negative, icon: Icon }) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3.5"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                  negative ? "bg-accent text-foreground" : "bg-brand/15 text-brand"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[14px] font-semibold text-foreground">{name}</p>
                <p className="truncate text-[12px] text-muted-foreground">{detail}</p>
              </div>
              <span
                className={`shrink-0 text-[14px] font-bold tabular-nums ${
                  negative ? "text-foreground" : "text-brand"
                }`}
              >
                {amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust footer */}
      <div className="mt-6 rounded-2xl border border-brand/20 bg-accent/60 p-4">
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 fill-brand text-brand" />
          <p className="text-[13px] font-semibold text-foreground">Trusted by 23,450+ traders in Kano</p>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          <span className="flex items-center gap-1 text-[12px] text-muted-foreground">
            <Headphones className="h-3.5 w-3.5" />
            Customer support online
          </span>
        </div>
      </div>

      {/* Floating chat button */}
      <button
        type="button"
        aria-label="Open support chat"
        className="absolute bottom-6 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-[0_12px_28px_-8px_var(--brand)] transition-transform hover:scale-105 active:scale-95"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-background">
          2
        </span>
      </button>
    </div>
  )
}
