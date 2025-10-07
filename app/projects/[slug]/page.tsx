import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MediaSlider } from "@/components/media-slider"

type Project = {
  slug: string
  title: string
  type: "film" | "series"
  note: string
  src: string
  status?: string
}

const PROJECTS: Project[] = [
  {
    slug: "vrushabha",
    title: "Vrushabha",
    type: "film",
    note: "Starring Mohanlal",
    src: "/images/posters/vrushabha-poster.jpg",
    status: "In Production",
  },
  {
    slug: "diya",
    title: "DIYA (T)",
    type: "film",
    note: "Jacqueline Fernandez · Dir. Vijay (Thalaivi)",
    src: "/images/posters/film-reel-poster.jpg",
    status: "In Development",
  },
  {
    slug: "untitled-abhimanyu",
    title: "Untitled (Abhimanyu Dassani)",
    type: "film",
    note: "Dir. Rasul Pookutty (Oscar-winner)",
    src: "/images/posters/city-neon-poster.jpg",
    status: "In Development",
  },
  {
    slug: "double-barrel",
    title: "Double Barrel",
    type: "film",
    note: "Dr. Shivraj Kumar & Prabhudeva",
    src: "/images/posters/film-reel-poster.jpg",
    status: "In Production",
  },
  {
    slug: "chiranjeevi",
    title: "Chiranjeevi",
    type: "film",
    note: "Dir. Sachin Ravi",
    src: "/images/posters/city-neon-poster.jpg",
    status: "In Production",
  },
  {
    slug: "political-thriller",
    title: "Political Thriller",
    type: "series",
    note: "Applause Entertainment",
    src: "/images/posters/city-neon-poster.jpg",
    status: "In Development",
  },
  {
    slug: "anees-bazmee-series",
    title: "Anees Bazmee Collaboration",
    type: "series",
    note: "Web Series",
    src: "/images/posters/stage-show-poster.jpg",
    status: "In Development",
  },
  {
    slug: "no-entry-2",
    title: "No Entry 2",
    type: "series",
    note: "Co-Produced with Boney Kapoor",
    src: "/images/posters/film-reel-poster.jpg",
    status: "Announced",
  },
  {
    slug: "prakash-raj-collab",
    title: "Bollywood Collaborations",
    type: "film",
    note: "With Prakash Raj",
    src: "/images/posters/film-reel-poster.jpg",
    status: "In Discussion",
  },
]

function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = getProject(params.slug)
  if (!p) return {}
  return {
    title: `${p.title} | ${p.type === "film" ? "Film" : "Series"} — First Step Movies`,
    description: `${p.title}: ${p.note} · Status: ${p.status ?? "—"}`,
    openGraph: {
      title: `${p.title} — First Step Movies`,
      description: p.note,
      images: [{ url: p.src, width: 1200, height: 630 }],
      type: p.type === "film" ? "video.movie" : "video.tv_show",
    },
    twitter: { card: "summary_large_image", images: [p.src] },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug)
  if (!p) return notFound()

  const isFilm = p.type === "film"

  return (
    <main className="mx-auto max-w-5xl px-4 pb-16">
      <header className="relative -mx-4 mb-8 overflow-hidden">
        <Image
          src={p.src || "/placeholder.svg"}
          alt={p.title}
          width={1600}
          height={900}
          className="h-[40vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">{isFilm ? "Film" : "Series"}</span>
          <h1 className="text-3xl font-semibold">{p.title}</h1>
          <p className="text-sm text-muted-foreground">{p.note}</p>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold">Synopsis</h2>
          <p className="text-muted-foreground">
            This is placeholder synopsis copy for {p.title}. First Step Films brings powerful stories to life with
            high-end production and global appeal. Final logline and synopsis will be announced closer to release.
          </p>

          <h3 className="pt-4 text-lg font-medium">Status</h3>
          <p className="text-muted-foreground">{p.status}</p>

          <h3 className="pt-4 text-lg font-medium">Credits</h3>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            <li>Produced by First Step Films</li>
            <li>Producer: Shyam Sunder</li>
            <li>Location: Mumbai, India</li>
          </ul>
        </div>
        <aside className="space-y-4">
          <Image
            src={p.src || "/placeholder.svg"}
            alt={`${p.title} poster`}
            width={640}
            height={853}
            className="w-full rounded-lg border"
          />
          <div className="flex gap-2">
            <Link href={isFilm ? "/films" : "/series"}>
              <Button variant="outline">{isFilm ? "More Films" : "More Series"}</Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground">Contact</Button>
            </Link>
          </div>
        </aside>
      </section>

      {/* Project Gallery */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Gallery</h2>
        <div className="mt-4">
          <MediaSlider
            ariaLabel={`${p.title} gallery`}
            items={[
              { id: "g1", type: "image", src: p.src, alt: `${p.title} main poster` },
              { id: "g2", type: "image", src: "/images/projects/vrushabha-still-1.jpg", alt: `${p.title} still 1` },
              { id: "g3", type: "image", src: "/images/projects/vrushabha-still-2.jpg", alt: `${p.title} still 2` },
            ]}
          />
        </div>
      </section>

      {/* Project Trailers & Teasers */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Trailers & Teasers</h2>
        <div className="mt-4">
          <MediaSlider
            ariaLabel={`${p.title} trailers`}
            items={[
              {
                id: "t1",
                type: "video",
                src: "https://www.youtube.com/embed/aqz-KE-bpKQ?rel=0",
                title: `${p.title} Official Trailer`,
              },
              {
                id: "t2",
                type: "video",
                src: "https://www.youtube.com/embed/ysz5S6PUM-U?rel=0",
                title: `${p.title} Teaser`,
              },
            ]}
          />
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": isFilm ? "Movie" : "TVSeries",
            name: p.title,
            description: p.note,
            image: p.src,
            productionCompany: {
              "@type": "Organization",
              name: "First Step Movies",
              address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
            },
          }),
        }}
      />
    </main>
  )
}
