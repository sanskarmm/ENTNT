import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Projects | First Step Movies — Mumbai",
  description: "Explore films and series in production by First Step Movies.",
}

const PROJECTS = [
  { slug: "vrushabha", title: "Vrushabha" },
  { slug: "diya", title: "DIYA (T)" },
  { slug: "untitled-abhimanyu", title: "Untitled (Abhimanyu Dassani)" },
  { slug: "double-barrel", title: "Double Barrel" },
  { slug: "chiranjeevi", title: "Chiranjeevi" },
  { slug: "political-thriller", title: "Political Thriller (Series)" },
  { slug: "anees-bazmee-series", title: "Anees Bazmee Collaboration (Series)" },
  { slug: "no-entry-2", title: "No Entry 2 (Series)" },
  { slug: "prakash-raj-collab", title: "Bollywood Collaborations" },
]

export default function ProjectsIndexPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <ul className="mt-6 grid gap-3">
        {PROJECTS.map((p) => (
          <li key={p.slug}>
            <Link href={`/projects/${p.slug}`} className="text-primary underline-offset-4 hover:underline">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
