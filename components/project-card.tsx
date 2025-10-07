"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

type Props = {
  href: string
  title: string
  subtitle?: string
  src: string
  alt?: string
  className?: string
  badge?: string
}

export function ProjectCard({ href, title, subtitle, src, alt, className, badge }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block overflow-hidden rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-2 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
    >
      {badge ? (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-[rgb(var(--accent))] px-2 py-1 text-xs font-medium text-[rgb(var(--accent-foreground))]">
          {badge}
        </span>
      ) : null}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt || title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-3">
        <h3 className="text-lg font-semibold text-[rgb(var(--foreground))] text-pretty">{title}</h3>
        {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
      </div>
    </Link>
  )
}
