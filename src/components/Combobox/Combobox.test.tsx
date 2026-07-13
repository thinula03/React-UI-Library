import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Combobox } from './Combobox'

describe('Combobox', () => {
  it('filters options and selects an option', () => {
    const handleInputChange = vi.fn()
    const handleValueChange = vi.fn()

    render(
      <Combobox
        label="Component"
        name="component"
        onInputChange={handleInputChange}
        onValueChange={handleValueChange}
        options={[
          { label: 'Button', value: 'button' },
          { label: 'Card', value: 'card' },
        ]}
        value="bu"
      />,
    )

    expect(screen.getByRole('option', { name: 'Button' })).toBeTruthy()
    expect(screen.queryByRole('option', { name: 'Card' })).toBeNull()

    fireEvent.click(screen.getByRole('option', { name: 'Button' }))

    expect(handleValueChange).toHaveBeenCalledWith('Button')
  })
})
