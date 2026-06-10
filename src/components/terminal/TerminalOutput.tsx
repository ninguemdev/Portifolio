import { useEffect, useRef } from 'react'
import type { TerminalLine } from './commands'

const kindClass: Record<TerminalLine['kind'], string> = {
  input: 'text-muted',
  output: 'text-text',
  error: 'text-accent',
  system: 'text-heading',
}

/**
 * Saída visual do terminal. É `aria-hidden` de propósito: o anúncio para
 * leitores de tela acontece numa região `aria-live` separada (ver Terminal),
 * evitando que cada caractere digitado seja narrado. Rola para o fim a cada
 * linha nova.
 */
export default function TerminalOutput({
  committed,
  current,
  shown,
}: {
  committed: TerminalLine[]
  current: TerminalLine | null
  shown: string
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [committed, current, shown])

  return (
    <div
      ref={scrollRef}
      aria-hidden="true"
      className="max-h-[42vh] min-h-32 overflow-y-auto font-mono text-sm leading-relaxed sm:min-h-40"
    >
      {committed.map((line) => (
        <p
          key={line.id}
          className={`${kindClass[line.kind]} break-words whitespace-pre-wrap`}
        >
          {line.text}
        </p>
      ))}
      {current && (
        <p
          className={`${kindClass[current.kind]} break-words whitespace-pre-wrap`}
        >
          {shown}
        </p>
      )}
    </div>
  )
}
