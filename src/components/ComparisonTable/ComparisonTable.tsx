import type { ReactNode } from 'react'
import './ComparisonTable.css'

export type ComparisonColumn = {
  key: string
  label: ReactNode
}

export type ComparisonRow = {
  cells: Record<string, ReactNode>
  feature: ReactNode
}

export type ComparisonTableProps = {
  columns: ComparisonColumn[]
  rows: ComparisonRow[]
}

export function ComparisonTable({ columns, rows }: ComparisonTableProps) {
  return (
    <div className="jui-comparison-table">
      <table>
        <thead>
          <tr>
            <th scope="col">Feature</th>
            {columns.map((column) => (
              <th key={column.key} scope="col">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <th scope="row">{row.feature}</th>
              {columns.map((column) => (
                <td key={column.key}>{row.cells[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
