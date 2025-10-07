import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Films | First Step Movies — Mumbai",
  description: "Feature films in development and production by First Step Movies, Mumbai.",
}

const films = [
  { slug: "vrushabha", title: "Vrushabha", note: "Starring Mohanlal", src: "/images/posters/vrushabha-poster.jpg" },
  {
    slug: "double-barrel",
    title: "Double Barrel",
    note: "Dr. Shivraj Kumar & Prabhudeva",
    src: "/images/posters/film-reel-poster.jpg",
  },
  { slug: "chiranjeevi", title: "Chiranjeevi", note: "Dir. Sachin Ravi", src: "/images/posters/city-neon-poster.jpg" },
]

export default function FilmsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Feature Films</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {films.map((f) => (
          <Link key={f.title} href={`/projects/${f.slug}`} className="block">
            <Card className="overflow-hidden border bg-card transition hover:shadow-md hover:scale-[1.01]">
              <Image
                src={f.src || "/placeholder.svg"}
                alt={f.title}
                width={640}
                height={853}
                className="aspect-[3/4] w-full object-cover"
              />
              <CardHeader>
                <CardTitle className="text-base">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{f.note}</CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}
