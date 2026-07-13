import type { ReactNode } from 'react'
import { Avatar } from '../Avatar'
import './AIChat.css'

export type AIChatMessage = {
  content: ReactNode
  id: string
  role: 'assistant' | 'user'
}

export type AIChatProps = {
  assistantLabel?: string
  messages: AIChatMessage[]
  userLabel?: string
}

export function AIChat({
  assistantLabel = 'Assistant',
  messages,
  userLabel = 'You',
}: AIChatProps) {
  return (
    <div className="jui-ai-chat">
      {messages.map((message) => {
        const isUser = message.role === 'user'
        const label = isUser ? userLabel : assistantLabel

        return (
          <article
            className={`jui-ai-chat__message ${
              isUser ? 'jui-ai-chat__message--user' : ''
            }`}
            key={message.id}
          >
            <Avatar fallback={label} size="sm" />
            <div className="jui-ai-chat__bubble">
              <strong>{label}</strong>
              <div>{message.content}</div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
