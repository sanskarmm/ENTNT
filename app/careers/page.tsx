export const metadata = {
  title: "Careers | First Step Movies",
  description: "Join First Step Movies — we’re always looking for passionate storytellers.",
}

export default function CareersPage() {
  const roles = [
    { r: "Line Producer", l: "Mumbai" },
    { r: "Production Manager", l: "Mumbai" },
    { r: "Assistant Director", l: "Mumbai" },
  ]
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Careers</h1>
        <p className="text-muted-foreground mt-2">Tell us your craft, we’ll tell a story together.</p>
      </header>
      <div className="grid gap-4">
        {roles.map((job) => (
          <div key={job.r} className="fsm-card p-4 flex items-center justify-between">
            <div>
              <div className="font-medium">{job.r}</div>
              <div className="text-sm text-muted-foreground">{job.l}</div>
            </div>
            <a href="/contact" className="fsm-cta">
              Apply
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}
