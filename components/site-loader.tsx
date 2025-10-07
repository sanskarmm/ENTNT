"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const TAGLINE = "Every Big Journey Begins with the First Step"

export default function SiteLoader() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2000)
    return () => clearTimeout(t)
  }, [])
  if (!show) return null
  return (
    <div aria-busy="true" aria-live="polite" className="fixed inset-0 z-[60] grid place-items-center bg-background/95">
      <div className="flex flex-col items-center gap-4 animate-in fade-in-0 duration-300">
        <Image src="/images/first-step-logo.png" alt="First Step Movies logo" width={120} height={180} priority />
        <p className="text-center text-lg text-muted-foreground">{TAGLINE}</p>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-secondary" role="progressbar" aria-label="Loading">
          <div className="h-full w-1/3 animate-[loader_2s_ease-in-out_infinite] bg-primary" />
        </div>
      </div>
    </div>
  )
}
