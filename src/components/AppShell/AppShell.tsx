import type { HTMLAttributes, ReactNode } from 'react'
import './AppShell.css'

export type AppShellProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  header?: ReactNode
  sidebar?: ReactNode
}

export function AppShell({
  children,
  className = '',
  header,
  sidebar,
  ...props
}: AppShellProps) {
  const classes = ['jui-app-shell', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {header ? <header className="jui-app-shell__header">{header}</header> : null}
      <div className="jui-app-shell__body">
        {sidebar ? <aside className="jui-app-shell__sidebar">{sidebar}</aside> : null}
        <main className="jui-app-shell__main">{children}</main>
      </div>
    </div>
  )
}
