"use client"

import { useState } from "react"

const images = [
  "/images/gallery/crime-drama.jpg",
  "/images/gallery/studio-bts.jpg",
  "/images/posters/vrushabha-poster.jpg",
  "/images/posters/city-neon-poster.jpg",
  "/images/posters/film-reel-poster.jpg",
  "/images/posters/stage-show-poster.jpg",
  "/images/posters/city-neon-poster.jpg",
  "/images/posters/film-reel-poster.jpg",
]

export default function ClientGalleryPage() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Gallery</h1>
      <p className="mt-2 text-muted-foreground">A peek into our cinematic world.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(src)}
            className="overflow-hidden rounded-lg border transition hover:scale-[1.01]"
          >
            <img
              src={src || "/placeholder.svg"}
              alt={"Poster " + (i + 1)}
              className="aspect-[3/4] w-full object-cover"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          onClick={() => setActive(null)}
        >
          <img
            src={active || "/placeholder.svg"}
            alt="Selected poster"
            className="max-h-[90vh] w-auto rounded-lg border"
          />
        </div>
      )}
    </main>
  )
}
