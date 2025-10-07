"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import { useEffect, useState } from "react"

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
    } else {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
    }
    
    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Image src="/images/first-step-logo.png" alt="First Step Movies" width={28} height={42} />
          <span className="text-sm font-semibold tracking-wide text-black">FIRST STEP MOVIES</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/films">
            <Button variant="ghost" className="text-black hover:bg-gray-100">Films</Button>
          </Link>
          <Link href="/series">
            <Button variant="ghost" className="text-black hover:bg-gray-100">Series</Button>
          </Link>
          <Link href="/gallery">
            <Button variant="ghost" className="text-black hover:bg-gray-100">Gallery</Button>
          </Link>
          <Link href="/projects">
            <Button variant="ghost" className="text-black hover:bg-gray-100">Projects</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" className="text-black hover:bg-gray-100">About</Button>
          </Link>
          <Link href="/contact">
            <Button variant="default" className="bg-black text-white hover:bg-gray-800">
              Contact
            </Button>
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((s) => !s)}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-gray-100"
          >
            {/* Modern animated hamburger icon */}
            <div className="flex h-5 w-5 flex-col justify-between">
              <span className={`h-0.5 w-full bg-black transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-full bg-black transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`h-0.5 w-full bg-black transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile overlay menu - SOLID WHITE */}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="md:hidden fixed inset-0 z-[60] bg-white"
        >
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
            <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
              <Image src="/images/first-step-logo.png" alt="First Step Movies" width={24} height={36} />
              <span className="text-sm font-semibold tracking-wide text-black">FIRST STEP MOVIES</span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
            >
              <div className="relative h-5 w-5">
                <span className="absolute top-1/2 left-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                <span className="absolute top-1/2 left-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-black" />
              </div>
            </button>
          </div>

          {/* Navigation Links with attractive design */}
          <div className="bg-white px-6 py-8">
            <nav className="grid gap-2 text-lg font-medium">
              <Link 
                className="flex items-center rounded-xl bg-white px-4 py-4 transition-all hover:bg-gray-50 hover:shadow-sm active:bg-gray-100 border border-gray-100" 
                href="/films" 
                onClick={closeMenu}
              >
                <span className="flex-1 text-black">Films</span>
                <span className="text-gray-400">→</span>
              </Link>
              <Link 
                className="flex items-center rounded-xl bg-white px-4 py-4 transition-all hover:bg-gray-50 hover:shadow-sm active:bg-gray-100 border border-gray-100" 
                href="/series" 
                onClick={closeMenu}
              >
                <span className="flex-1 text-black">Series</span>
                <span className="text-gray-400">→</span>
              </Link>
              <Link 
                className="flex items-center rounded-xl bg-white px-4 py-4 transition-all hover:bg-gray-50 hover:shadow-sm active:bg-gray-100 border border-gray-100" 
                href="/gallery" 
                onClick={closeMenu}
              >
                <span className="flex-1 text-black">Gallery</span>
                <span className="text-gray-400">→</span>
              </Link>
              <Link 
                className="flex items-center rounded-xl bg-white px-4 py-4 transition-all hover:bg-gray-50 hover:shadow-sm active:bg-gray-100 border border-gray-100" 
                href="/projects" 
                onClick={closeMenu}
              >
                <span className="flex-1 text-black">Projects</span>
                <span className="text-gray-400">→</span>
              </Link>
              <Link 
                className="flex items-center rounded-xl bg-white px-4 py-4 transition-all hover:bg-gray-50 hover:shadow-sm active:bg-gray-100 border border-gray-100" 
                href="/about" 
                onClick={closeMenu}
              >
                <span className="flex-1 text-black">About</span>
                <span className="text-gray-400">→</span>
              </Link>
              <Link 
                className="flex items-center rounded-xl bg-white px-4 py-4 transition-all hover:bg-gray-50 hover:shadow-sm active:bg-gray-100 border border-gray-100" 
                href="/contact" 
                onClick={closeMenu}
              >
                <span className="flex-1 text-black">Contact</span>
                <span className="text-gray-400">→</span>
              </Link>
            </nav>

            {/* Action Buttons with attractive styling */}
            <div className="mt-8 grid gap-4">
              <Link href="/contact" onClick={closeMenu} className="w-full">
                <Button className="w-full bg-black text-white hover:bg-gray-800 h-14 text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  🎬 Work With Us
                </Button>
              </Link>
              <Link href="/projects" onClick={closeMenu} className="w-full">
                <Button variant="outline" className="w-full border-2 border-gray-300 text-black hover:bg-white hover:border-black h-14 text-base font-medium rounded-xl transition-all duration-300">
                  Explore Projects
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-12 text-center bg-white">
              <p className="text-gray-600 mb-2">Let's create something amazing together</p>
              <p className="text-black font-medium">contact@firststepmovies.com</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
