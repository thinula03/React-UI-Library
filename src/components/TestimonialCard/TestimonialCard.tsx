import type { ReactNode } from 'react'
import { Avatar } from '../Avatar'
import './TestimonialCard.css'

export type TestimonialCardProps = {
  author: ReactNode
  avatarFallback?: string
  quote: ReactNode
  role?: ReactNode
}

export function TestimonialCard({
  author,
  avatarFallback,
  quote,
  role,
}: TestimonialCardProps) {
  return (
    <figure className="jui-testimonial-card">
      <blockquote>{quote}</blockquote>
      <figcaption>
        <Avatar fallback={avatarFallback ?? String(author)} size="sm" />
        <span>
          <strong>{author}</strong>
          {role ? <small>{role}</small> : null}
        </span>
      </figcaption>
    </figure>
  )
}
