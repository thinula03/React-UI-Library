import type { ReactNode } from 'react'
import { Spinner } from '../Spinner'
import './LoadingOverlay.css'

export type LoadingOverlayProps = {
  children: ReactNode
  isLoading: boolean
  label?: string
}

export function LoadingOverlay({
  children,
  isLoading,
  label = 'Loading',
}: LoadingOverlayProps) {
  return (
    <div className="jui-loading-overlay">
      {children}
      {isLoading ? (
        <div className="jui-loading-overlay__veil">
          <Spinner label={label} />
          <span>{label}</span>
        </div>
      ) : null}
    </div>
  )
}
