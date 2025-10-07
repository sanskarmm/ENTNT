import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | First Step Movies — Mumbai",
  description: "Get in touch with First Step Movies. Mumbai, India.",
}

async function sendMessage(formData: FormData) {
  "use server"
  const name = String(formData.get("name") || "")
  const email = String(formData.get("email") || "")
  const subject = String(formData.get("subject") || "")
  const message = String(formData.get("message") || "")
  const bot = String(formData.get("website") || "")
  // Basic honeypot
  if (bot) return
  // In production, forward to email or a DB; for now we just no-op.
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-2 text-muted-foreground">Mumbai, India</p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Work With Us</h2>
          <p className="text-muted-foreground">
            For production, co-production, casting, events and partnerships, send a note and our team will get back
            soon.
          </p>
          <div className="text-sm">
            <p>
              Email:{" "}
              <a className="underline" href="mailto:contact@pehlestepfilms.com">
                contact@pehlestepfilms.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a className="underline" href="tel:+919619193233">
                +91 96191 93233
              </a>
            </p>
            <p>Location: Mumbai, Maharashtra, India</p>
          </div>
        </div>

        <form action={sendMessage} className="grid gap-4 rounded-lg border bg-card p-4">
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="grid gap-2">
            <label className="text-sm font-medium">Name</label>
            <input name="name" required className="rounded-md border bg-background px-3 py-2" placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="rounded-md border bg-background px-3 py-2"
              placeholder="you@email.com"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Subject</label>
            <input
              name="subject"
              className="rounded-md border bg-background px-3 py-2"
              placeholder="Production / Events / Press"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="rounded-md border bg-background px-3 py-2"
              placeholder="Tell us briefly about your project…"
            />
          </div>
          <button className="mt-2 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90">
            Send Message
          </button>
        </form>
      </div>
    </main>
  )
}
