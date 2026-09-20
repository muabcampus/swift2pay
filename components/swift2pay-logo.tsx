import { cn } from "@/lib/utils"

export function Swift2PayLogo({
  className,
  showWordmark = true,
  size = 40,
}: {
  className?: string
  showWordmark?: boolean
  size?: number
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div
        className="flex shrink-0 items-center justify-center rounded-2xl bg-brand text-brand-foreground shadow-[0_6px_16px_-4px_var(--brand)]"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <svg
          width={size * 0.56}
          height={size * 0.56}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
        </svg>
      </div>
      {showWordmark && (
        <span className="text-xl font-bold tracking-tight text-foreground">
          Swift<span className="text-brand">2</span>Pay
        </span>
      )}
    </div>
  )
}
