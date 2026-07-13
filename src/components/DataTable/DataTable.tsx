import type { ReactNode } from 'react'
import './DataTable.css'

export type DataTableColumn<T> = {
  align?: 'left' | 'center' | 'right'
  header: ReactNode
  key: string
  render: (row: T) => ReactNode
}

export type DataTableProps<T> = {
  columns: DataTableColumn<T>[]
  emptyMessage?: ReactNode
  getRowKey: (row: T, index: number) => string
  rows: T[]
}

export function DataTable<T>({
  columns,
  emptyMessage = 'No records found.',
  getRowKey,
  rows,
}: DataTableProps<T>) {
  return (
    <div className="jui-data-table__wrap">
      <table className="jui-data-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                className={`jui-data-table__cell--${column.align ?? 'left'}`}
                key={column.key}
                scope="col"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows.map((row, index) => (
              <tr key={getRowKey(row, index)}>
                {columns.map((column) => (
                  <td
                    className={`jui-data-table__cell--${column.align ?? 'left'}`}
                    key={column.key}
                  >
                    {column.render(row)}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td className="jui-data-table__empty" colSpan={columns.length}>
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
