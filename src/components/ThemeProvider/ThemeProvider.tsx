import type { HTMLAttributes, ReactNode } from 'react'
import './ThemeProvider.css'

export type Theme = 'light' | 'dark'

export type ThemeProviderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  theme?: Theme
}

export function ThemeProvider({
  children,
  className = '',
  theme = 'light',
  ...props
}: ThemeProviderProps) {
  const classes = ['jui-theme-provider', className].filter(Boolean).join(' ')

  return (
    <div className={classes} data-jui-theme={theme} {...props}>
      {children}
    </div>
  )
}
