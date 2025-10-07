export const metadata = {
  title: "Services | First Step Movies",
  description: "Development, production, post, and line production services in Mumbai by First Step Movies.",
}

export default function ServicesPage() {
  const services = [
    { t: "Development", d: "Script consulting, finance packaging, and casting." },
    { t: "Production", d: "Locations, permits, scheduling, crew management." },
    { t: "Post & VFX", d: "Editing, color, VFX supervision, and delivery." },
    { t: "Music & Sound", d: "Original score, sound design and mix." },
    { t: "Distribution", d: "Festival, theatrical and OTT advisory." },
    { t: "Line Production (Mumbai)", d: "End-to-end on-ground execution." },
  ]
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="text-muted-foreground mt-2">Full-stack production with a Mumbai backbone.</p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.t} className="fsm-card p-6">
            <h3 className="text-lg font-semibold">{s.t}</h3>
            <p className="text-muted-foreground mt-2">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="fsm-card p-6 flex items-center justify-between gap-4">
        <p className="text-muted-foreground">
          Need a production partner in Mumbai? Let’s build your schedule and budget.
        </p>
        <a href="/contact" className="fsm-cta">
          Start a Project
        </a>
      </div>
    </main>
  )
}
