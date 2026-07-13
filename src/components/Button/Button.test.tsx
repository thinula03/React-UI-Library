import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders children and defaults to type button', () => {
    render(<Button>Save</Button>)

    const button = screen.getByRole('button', { name: 'Save' })

    expect(button).toBeTruthy()
    expect(button.getAttribute('type')).toBe('button')
    expect(button.className).toContain('jui-button--primary')
  })
})
