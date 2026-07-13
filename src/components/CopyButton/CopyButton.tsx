import type { ButtonHTMLAttributes } from 'react'
import { useState } from 'react'
import './CopyButton.css'

export type CopyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  copiedLabel?: string
  label?: string
  text: string
}

export function CopyButton({
  className = '',
  copiedLabel = 'Copied',
  label = 'Copy',
  text,
  type = 'button',
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const classes = ['jui-copy-button', className].filter(Boolean).join(' ')

  async function handleCopy() {
    await navigator.clipboard?.writeText(text)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1400)
  }

  return (
    <button className={classes} onClick={handleCopy} type={type} {...props}>
      {copied ? copiedLabel : label}
    </button>
  )
}
