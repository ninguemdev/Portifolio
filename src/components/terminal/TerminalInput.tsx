import { useRef, useState, type FormEvent, type KeyboardEvent } from 'react'
import { PROMPT } from './commands'
import { useCommandHistory } from '../../hooks/useCommandHistory'

/**
 * Linha de input do terminal. É um <input> real (navegável por teclado), mas
 * com caret nativo oculto: o texto e o cursor de bloco piscando são desenhados
 * por cima, mantendo o visual do terminal. Setas ↑/↓ percorrem o histórico.
 */
export default function TerminalInput({
  onSubmit,
}: {
  onSubmit: (raw: string) => void
}) {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const history = useCommandHistory()

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setValue(history.prev(value))
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      setValue(history.next(value))
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (value.trim() !== '') history.push(value.trim())
    onSubmit(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div
        onClick={() => inputRef.current?.focus()}
        className="border-border focus-within:border-accent focus-within:ring-accent relative flex min-h-12 items-center gap-2 rounded-md border px-3 py-2 transition-colors focus-within:ring-1"
      >
        <span
          className="text-accent shrink-0 font-mono text-sm"
          aria-hidden="true"
        >
          {PROMPT}
        </span>
        <span className="text-text min-w-0 flex-1 font-mono text-sm break-all whitespace-pre-wrap">
          {value}
          <span className="terminal-cursor" aria-hidden="true" />
        </span>
        {/* Input real cobrindo todo o campo: caret nativo oculto, alvo de toque
            de 44px (inset-0 sobre o campo, não só sobre o texto). */}
        <input
          ref={inputRef}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Digite um comando do terminal"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          className="absolute inset-0 h-full w-full bg-transparent font-mono text-sm text-transparent caret-transparent outline-none"
        />
      </div>
    </form>
  )
}
