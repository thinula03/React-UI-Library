import type { ReactNode } from 'react'
import './StatCard.css'

export type StatCardTrend = 'up' | 'down' | 'neutral'

export type StatCardProps = {
  label: ReactNode
  trend?: ReactNode
  trendDirection?: StatCardTrend
  value: ReactNode
}

export function StatCard({
  label,
  trend,
  trendDirection = 'neutral',
  value,
}: StatCardProps) {
  return (
    <div className="jui-stat-card">
      <span className="jui-stat-card__label">{label}</span>
      <strong className="jui-stat-card__value">{value}</strong>
      {trend ? (
        <span className={`jui-stat-card__trend jui-stat-card__trend--${trendDirection}`}>
          {trend}
        </span>
      ) : null}
    </div>
  )
}
