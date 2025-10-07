import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import SiteHeader from "@/components/site-header"
import SiteLoader from "@/components/site-loader"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "First Step Movies | Mumbai Production House",
  description:
    "First Step Movies is a Mumbai-based film production house creating bold Indian cinema, web series, and global live entertainment. Founded by producer Shyam Sunder.",
  keywords: [
    "First Step Movies",
    "First Step Films",
    "Mumbai production house",
    "Bollywood production",
    "Indian cinema",
    "Film production India",
    "Web series production",
    "Celebrity events",
    "Shyam Sunder",
  ],
  openGraph: {
    title: "First Step Movies — Every Big Journey Begins with the First Step",
    description:
      "Leading production house in Mumbai producing feature films, web series, and global live entertainment.",
    type: "website",
    images: [
      { url: "/images/posters/vrushabha-poster.jpg", width: 1200, height: 630 },
      { url: "/images/first-step-logo.png", width: 800, height: 1600 },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "First Step Movies | Mumbai Production House",
    description: "Bold stories, big-scale productions, and global entertainment from Mumbai, India.",
    images: ["/images/posters/city-neon-poster.jpg"],
  },
  category: "entertainment",
  applicationName: "First Step Movies",
  generator: "v0.app",
  icons: {
    icon: [{ url: "/images/first-step-logo.png" }],
    apple: [{ url: "/images/first-step-logo.png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var stored = localStorage.getItem('fsm-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var useDark = stored ? stored === 'dark' : prefersDark;
    if (useDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch (_) {}
})();`,
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <SiteLoader />
        <SiteHeader />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <Analytics />
        {/* Organization schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "First Step Movies",
              url: "https://example.com",
              logo: "https://example.com/images/first-step-logo.png",
              sameAs: [
                "https://facebook.com/",
                "https://instagram.com/",
                "https://youtube.com/",
                "https://linkedin.com/",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-9619193233",
                  email: "contact@pehlestepfilms.com",
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: ["en", "hi"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "MH",
                addressCountry: "IN",
              },
              foundingLocation: "Mumbai, India",
              slogan: "Every Big Journey Begins with the First Step",
            }),
          }}
        />
      </body>
    </html>
  )
}
