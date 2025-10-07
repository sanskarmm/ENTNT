"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { MediaSlider } from "@/components/media-slider"

const TAGLINE = "Every Big Journey Begins with the First Step"
const SUBLINE = "Mumbai-based production house crafting feature films, web series, and global live entertainment."

const PROJECTS = [
  {
    slug: "vrushabha",
    title: "Vrushabha",
    type: "film",
    note: "Starring Mohanlal",
    src: "/images/posters/vrushabha-poster.jpg",
  },
  {
    slug: "diya",
    title: "DIYA (T)",
    type: "film",
    note: "Jacqueline Fernandez · Dir. Vijay (Thalaivi)",
    src: "/images/posters/film-reel-poster.jpg",
  },
  {
    slug: "untitled-abhimanyu",
    title: "Untitled (Abhimanyu Dassani)",
    type: "film",
    note: "Dir. Rasul Pookutty (Oscar-winner)",
    src: "/images/posters/city-neon-poster.jpg",
  },
  {
    slug: "double-barrel",
    title: "Double Barrel",
    type: "film",
    note: "Dr. Shivraj Kumar & Prabhudeva",
    src: "/images/posters/film-reel-poster.jpg",
  },
  {
    slug: "chiranjeevi",
    title: "Chiranjeevi",
    type: "film",
    note: "Dir. Sachin Ravi",
    src: "/images/posters/city-neon-poster.jpg",
  },
  {
    slug: "political-thriller",
    title: "Political Thriller",
    type: "series",
    note: "Applause Entertainment",
    src: "/images/posters/city-neon-poster.jpg",
  },
  {
    slug: "anees-bazmee-series",
    title: "Anees Bazmee Collaboration",
    type: "series",
    note: "Web Series",
    src: "/images/posters/stage-show-poster.jpg",
  },
  {
    slug: "no-entry-2",
    title: "No Entry 2",
    type: "series",
    note: "Co-Produced with Boney Kapoor",
    src: "/images/posters/film-reel-poster.jpg",
  },
  {
    slug: "prakash-raj-collab",
    title: "Bollywood Collaborations",
    type: "film",
    note: "With Prakash Raj",
    src: "/images/posters/film-reel-poster.jpg",
  },
]

const HIGHLIGHTS = [
  "30+ years across Bollywood & South Indian cinema",
  "Films, web series, celebrity events",
  "Executive leadership in CCL since 2011",
  "Global shows: Dreams Dubai, DA-BANG Tour",
]

function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage: "url('/images/posters/city-neon-poster.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-background/10"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6 animate-in slide-in-from-left-4 fade-in-0 duration-700">
              <h1 className="text-pretty text-4xl font-bold leading-tight md:text-5xl">{TAGLINE}</h1>
              <p className="text-balance text-muted-foreground">{SUBLINE}</p>
              <div className="flex flex-wrap gap-2">
                <a href="/projects">
                  <Button className="bg-primary text-primary-foreground">Explore Projects</Button>
                </a>
                <a href="/about">
                  <Button variant="secondary" className="bg-accent text-accent-foreground">
                    Meet the Founder
                  </Button>
                </a>
                <a href="/contact">
                  <Button variant="outline">Work With Us</Button>
                </a>
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
                {HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-in slide-in-from-right-4 fade-in-0 duration-700">
              <PosterStrip />
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Who We Are</h2>
            <p className="text-muted-foreground">
              First Step Movies is a Mumbai-based production house founded by Shyam Sunder, crafting mainstream films,
              premium web series, and celebrity-powered live entertainment for global audiences.
            </p>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              <li>• Feature films with marquee talent and top technicians</li>
              <li>• Web series for leading OTT platforms</li>
              <li>• International shows and tours: DA-BANG, Dreams Dubai, SIIMA Curtain Raiser</li>
            </ul>
            <div className="flex gap-2 pt-2">
              <a href="/films">
                <Button variant="outline">View Films</Button>
              </a>
              <a href="/series">
                <Button variant="outline">View Series</Button>
              </a>
              <a href="/projects">
                <Button className="bg-primary text-primary-foreground">All Projects</Button>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Founder — Shyam Sunder</h3>
            <p className="text-muted-foreground">
              30+ years across Bollywood & South Indian cinema. Collaborations include Rajkumar Santoshi, Priyadarshan,
              Boney Kapoor and more. Executive Director of Celebrity Cricket League (CCL) since 2011.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>Producer</Badge>
              <Badge>Executive Producer</Badge>
              <Badge>Line Producer</Badge>
              <Badge>Casting Director</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold">Films & Series in Production</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <a
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group overflow-hidden rounded-lg border transition-transform duration-300 hover:scale-[1.01]"
              >
                <div className="relative">
                  <img
                    src={p.src || "/placeholder.svg"}
                    alt={p.title}
                    className="aspect-[3/4] w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                  <div className="absolute inset-x-3 bottom-3 rounded-md bg-background/90 p-3 backdrop-blur">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {p.type === "film" ? "Film" : "Series"}
                    </p>
                    <h3 className="text-base font-semibold">{p.title}</h3>
                    <p className="text-xs text-muted-foreground">{p.note}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <a href="/projects">
              <Button variant="outline">See All Projects</Button>
            </a>
            <a href="/contact">
              <Button className="bg-primary text-primary-foreground">Partner With Us</Button>
            </a>
          </div>
        </div>
      </section>

      {/* UPCOMING MOVIES */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Upcoming Movies</h2>
        <div className="mt-4">
          <MediaSlider
            ariaLabel="Upcoming movies posters and trailers"
            items={[
              { id: "u1", type: "image", src: "/images/posters/city-neon-poster.jpg", alt: "Upcoming movie poster 1" },
              { id: "u2", type: "image", src: "/images/posters/city-neon-poster.jpg", alt: "Upcoming movie poster 2" },
              {
                id: "u3",
                type: "video",
                src: "https://www.youtube.com/embed/aqz-KE-bpKQ?rel=0",
                title: "Upcoming Trailer 1",
              },
            ]}
          />
        </div>
      </section>

      {/* RECENT RELEASES */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-semibold">Recent Releases</h2>
        <div className="mt-4">
          <MediaSlider
            ariaLabel="Recent releases posters and trailers"
            items={[
              { id: "r1", type: "image", src: "/images/posters/city-neon-poster.jpg", alt: "Recent release poster 1" },
              { id: "r2", type: "image", src: "/images/posters/city-neon-poster.jpg", alt: "Recent release poster 2" },
              {
                id: "r3",
                type: "video",
                src: "https://www.youtube.com/embed/2Xc9gXyf2G4?rel=0",
                title: "Recent Trailer 1",
              },
            ]}
          />
        </div>
      </section>

      {/* POSTERS */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Key Art & Posters</h2>
        <PosterGrid />
      </section>

      {/* EVENTS */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold">Events & Entertainment</h2>
          <p className="mt-2 text-muted-foreground">
            From Dubai to global stages — Dreams, DA-BANG World Tour, SIIMA Curtain Raiser, and more. We bring
            celebrity-powered live experiences to life.
          </p>
        </div>
      </section>

      {/* CTA BAND to avoid duplicate contact section */}
    

      {/* GLOBAL FOOTER */}
      <footer className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="text-muted-foreground">Mumbai, India • +91-9619193233 • contact@pehlestepfilms.com</p>
            <div className="flex gap-2">
              <a href="mailto:contact@pehlestepfilms.com">
                <Button className="bg-primary text-primary-foreground">Email Us</Button>
              </a>
              <a href="tel:+919619193233">
                <Button variant="outline">Call Now</Button>
              </a>
            </div>
          </div>
          <div className="justify-self-end">
            <Image src="/images/first-step-logo.png" alt="First Step Movies" width={80} height={120} />
          </div>
        </div>
       \
      </footer>
    </main>
  )
}

function PosterStrip() {
  const posters = [
    { src: "/images/posters/vrushabha-poster.jpg", alt: "Epic poster art" },
    { src: "/images/posters/city-neon-poster.jpg", alt: "Mumbai neon skyline" },
    { src: "/images/posters/film-reel-poster.jpg", alt: "Cinematic film reel" },
  ]
  return (
    <div className="grid grid-cols-3 gap-2">
      {posters.map((p) => (
        <div key={p.src} className="overflow-hidden rounded-lg border">
          <img
            src={p.src || "/placeholder.svg"}
            alt={p.alt}
            className="aspect-[3/4] w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}

function PosterGrid() {
  const posters = [
    { src: "/images/posters/vrushabha-poster.jpg", alt: "Epic poster art" },
    { src: "/images/posters/city-neon-poster.jpg", alt: "Mumbai neon skyline" },
    { src: "/images/posters/film-reel-poster.jpg", alt: "Cinematic film reel" },
    { src: "/images/posters/stage-show-poster.jpg", alt: "Live entertainment poster" },
  ]
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {posters.map((p) => (
        <div key={p.src} className="overflow-hidden rounded-lg border">
          <img
            src={p.src || "/placeholder.svg"}
            alt={p.alt}
            className="aspect-[3/4] w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs", "bg-accent text-accent-foreground")}>
      {children}
    </span>
  )
}

export default HomePage
