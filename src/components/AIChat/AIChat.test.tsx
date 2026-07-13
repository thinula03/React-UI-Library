import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AIChat } from './AIChat'

describe('AIChat', () => {
  it('renders assistant and user messages with labels', () => {
    render(
      <AIChat
        assistantLabel="JUI"
        messages={[
          { content: 'Build the section.', id: '1', role: 'user' },
          { content: 'Section ready.', id: '2', role: 'assistant' },
        ]}
        userLabel="Builder"
      />,
    )

    expect(screen.getByText('Builder')).toBeInTheDocument()
    expect(screen.getByText('JUI')).toBeInTheDocument()
    expect(screen.getByText('Section ready.')).toBeInTheDocument()
  })
})
