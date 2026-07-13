import { useCallback, useState } from 'react'

export type UseClipboardOptions = {
  resetAfterMs?: number
}

export function useClipboard(options: UseClipboardOptions = {}) {
  const [copied, setCopied] = useState(false)
  const resetAfterMs = options.resetAfterMs ?? 1400

  const copy = useCallback(
    async (text: string) => {
      await navigator.clipboard?.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), resetAfterMs)
    },
    [resetAfterMs],
  )

  return { copied, copy }
}
