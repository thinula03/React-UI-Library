import type { HTMLAttributes } from 'react'
import './Avatar.css'

export type AvatarSize = 'sm' | 'md' | 'lg'

export type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  alt?: string
  fallback: string
  size?: AvatarSize
  src?: string
}

export function Avatar({
  alt = '',
  className = '',
  fallback,
  size = 'md',
  src,
  ...props
}: AvatarProps) {
  const classes = ['jui-avatar', `jui-avatar--${size}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {src ? (
        <img alt={alt} className="jui-avatar__image" src={src} />
      ) : (
        <span aria-hidden="true" className="jui-avatar__fallback">
          {fallback.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  )
}
