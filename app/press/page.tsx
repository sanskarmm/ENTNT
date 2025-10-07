export const metadata = {
  title: "Press | First Step Movies",
  description: "Press releases and media kit for First Step Movies, Mumbai.",
}

export default function PressPage() {
  const press = [
    { h: "First Step Movies announces slate for 2025", d: "A premium mix of films and series with pan-India vision." },
    { h: "Line production services expand across India", d: "Scaling teams and facilities for high-impact shoots." },
  ]
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Press</h1>
        <p className="text-muted-foreground mt-2">Latest announcements and media resources.</p>
      </header>
      <div className="grid gap-6">
        {press.map((p) => (
          <article key={p.h} className="fsm-card p-6">
            <h2 className="text-xl font-semibold">{p.h}</h2>
            <p className="text-muted-foreground mt-2">{p.d}</p>
          </article>
        ))}
      </div>
      <div className="fsm-card p-6 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Media Kit</h3>
          <p className="text-muted-foreground text-sm">Logos, images, and company boilerplate.</p>
        </div>
        <a href="/images/first-step-logo.png" className="fsm-cta">
          Download Logo
        </a>
      </div>
    </main>
  )
}
