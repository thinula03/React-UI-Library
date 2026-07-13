import type { CSSProperties } from 'react'
import './ThreeDBarChart.css'

export type ThreeDBarChartDatum = {
  color?: string
  label: string
  value: number
}

export type ThreeDBarChartProps = {
  data: ThreeDBarChartDatum[]
  max?: number
}

export function ThreeDBarChart({ data, max }: ThreeDBarChartProps) {
  const maxValue = max ?? Math.max(...data.map((item) => item.value), 1)

  return (
    <div aria-label="3D bar chart" className="jui-3d-bar-chart" role="img">
      {data.map((item) => {
        const height = Math.max(8, Math.min(item.value / maxValue, 1) * 100)
        const style = {
          '--jui-3d-bar-color': item.color,
          '--jui-3d-bar-height': `${height}%`,
        } as CSSProperties

        return (
          <div className="jui-3d-bar-chart__item" key={item.label} style={style}>
            <div className="jui-3d-bar-chart__bar">
              <span />
            </div>
            <strong>{item.label}</strong>
          </div>
        )
      })}
    </div>
  )
}
