import type { CSSProperties } from 'react'
import './BarChart.css'

export type BarChartDatum = {
  color?: string
  label: string
  value: number
}

export type BarChartProps = {
  data: BarChartDatum[]
  max?: number
}

export function BarChart({ data, max }: BarChartProps) {
  const maxValue = max ?? Math.max(...data.map((item) => item.value), 1)

  return (
    <div aria-label="Bar chart" className="jui-bar-chart" role="img">
      {data.map((item) => {
        const value = Math.max(0, Math.min(item.value / maxValue, 1)) * 100
        const style = {
          '--jui-bar-chart-color': item.color,
          '--jui-bar-chart-value': `${value}%`,
        } as CSSProperties

        return (
          <div className="jui-bar-chart__row" key={item.label} style={style}>
            <span>{item.label}</span>
            <div className="jui-bar-chart__track">
              <i />
            </div>
            <strong>{item.value}</strong>
          </div>
        )
      })}
    </div>
  )
}
