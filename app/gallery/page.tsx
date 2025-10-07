import type { Metadata } from "next"
import ClientGalleryPage from "./client-page"

export const metadata: Metadata = {
  title: "Gallery | First Step Movies — Mumbai",
  description: "A colorful gallery of posters and event key art.",
}

export default function GalleryPage() {
  return <ClientGalleryPage />
}
