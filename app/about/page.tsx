import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | First Step Movies — Mumbai",
  description: "First Step Movies is a Mumbai-based production house led by producer Shyam Sunder.",
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <header className="grid gap-6 md:grid-cols-[1fr,320px] md:items-start">
        <div>
          <h1 className="text-3xl font-semibold text-pretty">About First Step Movies</h1>
          <p className="mt-4 text-muted-foreground">
            First Step Movies is a Mumbai-based production house creating high-quality Indian cinema and digital content
            for global audiences. We collaborate with acclaimed directors, writers, and artists to deliver powerful
            stories.
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-muted-foreground">
            <li>• Mainstream feature films with marquee talent</li>
            <li>• Premium web series for OTT platforms</li>
            <li>• Celebrity live events and international tours</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href="/projects" className="inline-block">
              <span className="sr-only">Projects</span>
            </a>
            <a href="/projects">
              <button className="inline-flex items-center rounded-md bg-[rgb(var(--primary))] px-4 py-2 text-sm font-medium text-[rgb(var(--primary-foreground))]">
                Explore Projects
              </button>
            </a>
            <a href="/contact">
              <button className="inline-flex items-center rounded-md border px-4 py-2 text-sm">Work With Us</button>
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border bg-card">
          <img
            src="/images/people/shm-sunder.jpg"
            alt="Founder Shyam Sunder"
            className="aspect-[3/4] w-full object-cover"
          />
        </div>
      </header>

      <section className="mt-10 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Founder — Shyam Sunder</h2>
          <p className="mt-3 text-muted-foreground">
            With 30+ years across Bollywood and South Indian cinema, Shyam Sunder has produced and line‑produced marquee
            films, built star‑studded collaborations, and led celebrity‑driven live entertainment. As Executive Director
            of the Celebrity Cricket League (CCL) since 2011, he bridges sports and cinema to create large‑scale
            cultural moments.
          </p>
          <p className="mt-3 text-muted-foreground">
            His collaborations span Rajkumar Santoshi, Priyadarshan, Anees Bazmee, Boney Kapoor, and more—backed by
            strong relationships with talent, studios, and crews in Mumbai. He specializes in assembling the right mix
            of script, cast, and technicians to deliver mainstream yet elevated cinema with pan‑India appeal.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
            <li>• Global shows: Dreams Dubai, DA‑BANG World Tour, SIIMA Curtain Raiser</li>
            <li>• Expertise: Financing, packaging, casting, on‑ground execution</li>
            <li>• Mission: Build lasting IPs and cinematic universes audiences love</li>
          </ul>
        </div>

        <div className="rounded-xl border bg-card p-4">
          <h3 className="text-lg font-medium">Highlights</h3>
          <div className="mt-3 grid gap-3 text-sm text-muted-foreground">
            <div>30+ years of experience</div>
            <div>Films · Web Series · Live Events</div>
            <div>Leadership at CCL since 2011</div>
            <div>Mumbai, India — Global reach</div>
          </div>
          <div className="mt-4 flex gap-2">
            <a
              href="/projects"
              className="inline-block rounded-md bg-[rgb(var(--primary))] px-4 py-2 text-sm font-medium text-[rgb(var(--primary-foreground))]"
            >
              View Slate
            </a>
            <a href="/contact" className="inline-block rounded-md border px-4 py-2 text-sm">
              Collaborate
            </a>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Our Vision</h2>
        <p className="mt-3 text-muted-foreground">
          We aim to stand with the very best production houses by investing in compelling IPs, elevating craft, and
          building cinematic universes audiences love—while staying proudly rooted in Mumbai.
        </p>
      </section>
    </main>
  )
}
