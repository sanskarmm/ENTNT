export function Footer() {
  return (
    <footer className="mt-12 border-t bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Compact CTA inside footer */}
    
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-lg">First Step Movies</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Premium film and series production bridging Bollywood and South Indian cinema.
            </p>
            <address className="not-italic text-sm text-muted-foreground mt-3">
              Mumbai, Maharashtra, India
              <br />
              info@firststepmovies.in
              <br />
              +91-XXXXXXXXXX
            </address>
          </div>

          <nav aria-label="Quick links" className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
            <a className="hover:underline" href="/">
              Home
            </a>
            <a className="hover:underline" href="/projects">
              Projects
            </a>
            <a className="hover:underline" href="/films">
              Films
            </a>
            <a className="hover:underline" href="/series">
              Series
            </a>
            <a className="hover:underline" href="/gallery">
              Gallery
            </a>
            <a className="hover:underline" href="/about">
              About
            </a>
            <a className="hover:underline" href="/contact">
              Contact
            </a>
          </nav>

          <div className="text-sm">
            <h4 className="font-semibold mb-2">Vision</h4>
            <p className="text-muted-foreground">Stories with scale, craft, and heart—made in India for the world.</p>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} First Step Movies. All rights reserved.
      </div>
    </footer>
  )
}
