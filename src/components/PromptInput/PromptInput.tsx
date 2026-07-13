import type { TextareaHTMLAttributes } from 'react'
import { Button } from '../Button'
import './PromptInput.css'

export type PromptInputProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  onSubmitPrompt: (value: string) => void
}

export function PromptInput({
  className = '',
  onSubmitPrompt,
  placeholder = 'Ask anything...',
  ...props
}: PromptInputProps) {
  const classes = ['jui-prompt-input', className].filter(Boolean).join(' ')

  return (
    <form
      className={classes}
      onSubmit={(event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        onSubmitPrompt(String(formData.get('prompt') ?? ''))
        event.currentTarget.reset()
      }}
    >
      <textarea
        className="jui-prompt-input__textarea"
        name="prompt"
        placeholder={placeholder}
        rows={3}
        {...props}
      />
      <div className="jui-prompt-input__bar">
        <span>Use clear context for better answers.</span>
        <Button size="sm" type="submit">
          Send
        </Button>
      </div>
    </form>
  )
}
