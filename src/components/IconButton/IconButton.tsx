import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './IconButton.css'

export type IconButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type IconButtonSize = 'sm' | 'md' | 'lg'

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  size?: IconButtonSize
  variant?: IconButtonVariant
  children: ReactNode
}

export function IconButton({
  children,
  className = '',
  label,
  size = 'md',
  type = 'button',
  variant = 'secondary',
  ...props
}: IconButtonProps) {
  const classes = [
    'jui-icon-button',
    `jui-icon-button--${variant}`,
    `jui-icon-button--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button aria-label={label} className={classes} type={type} {...props}>
      {children}
    </button>
  )
}
