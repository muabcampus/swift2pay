import type React from "react"
import { cn } from "@/lib/utils"

export function PhoneFrame({
  children,
  label,
  className,
}: {
  children: React.ReactNode
  label?: string
  className?: string
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={cn(
          "relative w-[390px] shrink-0 rounded-[2.75rem] border border-border bg-card p-2.5 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)]",
          className,
        )}
      >
        {/* Screen */}
        <div className="relative h-[844px] w-full overflow-hidden rounded-[2.25rem] bg-background">
          {/* Status bar */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex h-12 items-center justify-between px-7 text-[13px] font-semibold text-foreground">
            <span>9:41</span>
            <div className="absolute left-1/2 top-2 h-6 w-28 -translate-x-1/2 rounded-full bg-foreground/90" />
            <div className="flex items-center gap-1.5">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor" aria-hidden="true">
                <rect x="0" y="7" width="3" height="5" rx="1" />
                <rect x="5" y="4.5" width="3" height="7.5" rx="1" />
                <rect x="10" y="2" width="3" height="10" rx="1" />
                <rect x="15" y="0" width="3" height="12" rx="1" opacity="0.4" />
              </svg>
              <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" aria-hidden="true">
                <path d="M8 2.6c1.9 0 3.6.7 4.9 1.9l1.2-1.3A9 9 0 0 0 8 .8 9 9 0 0 0 1.9 3.2l1.2 1.3A7.2 7.2 0 0 1 8 2.6Z" />
                <path d="M8 6.1c1 0 1.9.4 2.6 1l1.2-1.3A6 6 0 0 0 8 4.1a6 6 0 0 0-3.8 1.7l1.2 1.3c.7-.6 1.6-1 2.6-1Z" />
                <circle cx="8" cy="9.6" r="1.8" />
              </svg>
              <div className="flex items-center gap-0.5">
                <div className="h-3 w-6 rounded-[3px] border border-current" />
                <div className="h-1.5 w-0.5 rounded-r-sm bg-current" />
              </div>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="h-full w-full overflow-y-auto pt-12">{children}</div>
        </div>
      </div>
      {label && <span className="text-sm font-medium text-muted-foreground">{label}</span>}
    </div>
  )
}
