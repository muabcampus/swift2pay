"use client"

import { useEffect, useRef, useState } from "react"
import { Swift2PayLogo } from "@/components/swift2pay-logo"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      const delta = y - lastY.current

      // Ignore tiny movements to avoid flicker
      if (Math.abs(delta) < 6) return

      // Hide when scrolling down past the header height, show when scrolling up
      if (delta > 0 && y > 72) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastY.current = y
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8 sm:py-4">
        <Swift2PayLogo size={34} />
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="hidden text-sm text-muted-foreground sm:inline">UI/UX Preview</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
