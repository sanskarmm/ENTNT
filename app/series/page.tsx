import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Series | First Step Movies — Mumbai",
  description: "Web series and premium digital content by First Step Movies.",
}

const series = [
  {
    slug: "political-thriller",
    title: "Political Thriller",
    note: "Applause Entertainment",
    src: "/images/posters/city-neon-poster.jpg",
  },
  {
    slug: "no-entry-2",
    title: "No Entry 2",
    note: "Co-Produced with Boney Kapoor",
    src: "/images/posters/film-reel-poster.jpg",
  },
  {
    slug: "anees-bazmee-series",
    title: "Anees Bazmee Collaboration",
    note: "Web Series",
    src: "/images/posters/stage-show-poster.jpg",
  },
]

export default function SeriesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Series & Digital</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {series.map((s) => (
          <Link key={s.title} href={`/projects/${s.slug}`} className="block">
            <Card className="overflow-hidden border bg-card transition hover:shadow-md hover:scale-[1.01]">
              <Image
                src={s.src || "/placeholder.svg"}
                alt={s.title}
                width={640}
                height={853}
                className="aspect-[3/4] w-full object-cover"
              />
              <CardHeader>
                <CardTitle className="text-base">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{s.note}</CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}
