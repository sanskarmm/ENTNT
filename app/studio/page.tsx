export const metadata = {
  title: "Studio | First Step Movies",
  description: "Facilities, equipment, and on-ground footprint for productions by First Step Movies.",
}

export default function StudioPage() {
  const facilities = [
    "Casting rooms and production office",
    "Multi-room post setup: edit/color/sound",
    "Equipment partnerships for camera and G&E",
    "Mumbai and pan-India location network",
  ]
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Studio</h1>
        <p className="text-muted-foreground mt-2">A production-ready base that scales to your story.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="fsm-card p-6">
          <h3 className="text-lg font-semibold">Facilities</h3>
          <ul className="mt-3 grid gap-2">
            {facilities.map((f) => (
              <li key={f} className="fsm-chip">
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="fsm-card overflow-hidden">
          <img
            src="/images/posters/poster-06.jpg"
            alt="Studios - First Step Movies"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </main>
  )
}
