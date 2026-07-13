import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ThemeProvider } from './ThemeProvider'

describe('ThemeProvider', () => {
  it('sets the requested theme attribute', () => {
    render(
      <ThemeProvider data-testid="theme-root" theme="dark">
        <span>Content</span>
      </ThemeProvider>,
    )

    expect(screen.getByTestId('theme-root').getAttribute('data-jui-theme')).toBe(
      'dark',
    )
  })
})
