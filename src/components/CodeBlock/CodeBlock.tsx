import type { HTMLAttributes } from 'react'
import './CodeBlock.css'

export type CodeBlockProps = HTMLAttributes<HTMLPreElement> & {
  code: string
  language?: string
}

export function CodeBlock({
  className = '',
  code,
  language,
  ...props
}: CodeBlockProps) {
  const classes = ['jui-code-block', className].filter(Boolean).join(' ')

  return (
    <pre className={classes} {...props}>
      {language ? <span className="jui-code-block__language">{language}</span> : null}
      <code>{code}</code>
    </pre>
  )
}
