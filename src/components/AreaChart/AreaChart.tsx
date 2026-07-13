import './AreaChart.css'

export type AreaChartDatum = {
  label: string
  value: number
}

export type AreaChartProps = {
  data: AreaChartDatum[]
  max?: number
}

export function AreaChart({ data, max }: AreaChartProps) {
  const width = 320
  const height = 140
  const padding = 10
  const maxValue = max ?? Math.max(...data.map((item) => item.value), 1)
  const points = data
    .map((item, index) => {
      const x = padding + (index / Math.max(data.length - 1, 1)) * (width - padding * 2)
      const y = height - padding - (Math.max(0, item.value) / maxValue) * (height - padding * 2)

      return `${x},${y}`
    })
    .join(' ')
  const area = `${padding},${height - padding} ${points} ${width - padding},${height - padding}`

  return (
    <svg aria-label="Area chart" className="jui-area-chart" role="img" viewBox={`0 0 ${width} ${height}`}>
      <polygon className="jui-area-chart__area" points={area} />
      <polyline className="jui-area-chart__line" points={points} />
      {data.map((item, index) => {
        const x = padding + (index / Math.max(data.length - 1, 1)) * (width - padding * 2)
        const y = height - padding - (Math.max(0, item.value) / maxValue) * (height - padding * 2)

        return <circle className="jui-area-chart__point" cx={x} cy={y} key={item.label} r="3" />
      })}
    </svg>
  )
}
