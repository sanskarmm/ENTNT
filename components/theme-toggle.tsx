"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    try {
      const stored = localStorage.getItem("fsm-theme")
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      const useDark = stored ? stored === "dark" : prefersDark
      setIsDark(useDark)
      document.documentElement.classList.toggle("dark", useDark)
    } catch {}
  }, [])

  function toggle() {
    const next = !isDark
    setIsDark(next)
    try {
      localStorage.setItem("fsm-theme", next ? "dark" : "light")
    } catch {}
    document.documentElement.classList.toggle("dark", next)
  }

  return (
    <Button variant="outline" onClick={toggle} aria-label="Toggle theme">
      {isDark ? "Light" : "Dark"}
    </Button>
  )
}
