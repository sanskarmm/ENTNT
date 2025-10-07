"use client"

import { useRef } from "react"

type MediaItem =
  | { id: string; type: "image"; src: string; alt: string }
  | { id: string; type: "video"; src: string; title: string }

export function MediaSlider({ items, ariaLabel }: { items: MediaItem[]; ariaLabel: string }) {
  const ref = useRef<HTMLDivElement | null>(null)

  function scrollByOffset(dir: "left" | "right") {
    const el = ref.current
    if (!el) return
    const amount = el.clientWidth * 0.9
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-end mb-3">
        <div className="flex gap-2">
          <button
            onClick={() => scrollByOffset("left")}
            className="rounded-md px-3 py-1 bg-primary text-primary-foreground hover:opacity-90"
            aria-label="Scroll left"
          >
            {"<"}
          </button>
          <button
            onClick={() => scrollByOffset("right")}
            className="rounded-md px-3 py-1 bg-primary text-primary-foreground hover:opacity-90"
            aria-label="Scroll right"
          >
            {">"}
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
        aria-label={ariaLabel}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="snap-start shrink-0 w-[85%] sm:w-[55%] md:w-[45%] lg:w-[33%] rounded-lg border bg-card text-card-foreground"
            aria-roledescription="slide"
          >
            {"type" in item && item.type === "image" ? (
              <img
                src={item.src || "/placeholder.svg?height=256&width=512&query=poster"}
                alt={("alt" in item && item.alt) || "Poster image"}
                className="w-full h-64 object-cover rounded-t-lg"
                crossOrigin="anonymous"
              />
            ) : (
              <div className="aspect-video w-full rounded-t-lg overflow-hidden bg-muted">
                <iframe
                  className="w-full h-full"
                  src={("src" in item && item.src) || ""}
                  title={("title" in item && item.title) || "Trailer"}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            )}
            <div className="p-3">
              <p className="text-sm text-muted-foreground">
                {"type" in item && item.type === "video" ? "Official Trailer" : "Official Poster"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
