export const metadata = {
  title: "Awards | First Step Movies",
  description: "Accolades and festival selections recognizing our work.",
}

export default function AwardsPage() {
  const items = [
    { t: "Best Production Design", s: "Mumbai Film Guild", y: "2024" },
    { t: "Official Selection", s: "IFFI", y: "2023" },
    { t: "Audience Award", s: "Bengaluru IFF", y: "2023" },
  ]
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Awards & Selections</h1>
        <p className="text-muted-foreground mt-2">Gratitude to our collaborators and audiences.</p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((a) => (
          <div key={a.t} className="fsm-card p-6 text-center">
            <div className="text-xl font-semibold">{a.t}</div>
            <div className="text-muted-foreground">{a.s}</div>
            <div className="mt-2 fsm-chip">{a.y}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
