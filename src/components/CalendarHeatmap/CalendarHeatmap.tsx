import './CalendarHeatmap.css'

export type CalendarHeatmapDay = {
  date: string
  label?: string
  value: number
}

export type CalendarHeatmapProps = {
  days: CalendarHeatmapDay[]
  max?: number
}

export function CalendarHeatmap({ days, max }: CalendarHeatmapProps) {
  const maxValue = max ?? Math.max(...days.map((day) => day.value), 1)

  return (
    <div aria-label="Calendar heatmap" className="jui-calendar-heatmap" role="img">
      {days.map((day) => {
        const intensity = Math.ceil((Math.min(day.value, maxValue) / maxValue) * 4)

        return (
          <span
            aria-label={day.label ?? `${day.date}: ${day.value}`}
            className={`jui-calendar-heatmap__day jui-calendar-heatmap__day--${intensity}`}
            key={day.date}
            title={day.label ?? `${day.date}: ${day.value}`}
          />
        )
      })}
    </div>
  )
}
