import { useCallback, useReducer, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { getTheme, toggleTheme } from '../../lib/theme'
import { scrollToSection } from '../../lib/scroll'
import { useTypewriter } from '../../hooks/useTypewriter'
import {
  PROMPT,
  commandMap,
  type TerminalContext,
  type TerminalLine,
} from './commands'
import TerminalOutput from './TerminalOutput'
import TerminalInput from './TerminalInput'
import CommandChips from './CommandChips'

const bootLines: Array<Omit<TerminalLine, 'id'>> = [
  { kind: 'system', text: 'Sistema iniciado — portfólio de Dionel Sebastião.' },
  { kind: 'system', text: 'Desenvolvedor Full Stack Júnior.' },
  {
    kind: 'output',
    text: 'Digite "help" para ver os comandos, ou toque num atalho acima.',
  },
]

type OutputState = {
  committed: TerminalLine[]
  queue: TerminalLine[]
  current: TerminalLine | null
}

type OutputAction =
  | { type: 'echo'; line: TerminalLine }
  | { type: 'enqueue'; lines: TerminalLine[] }
  | { type: 'typed' }
  | { type: 'clear' }

/** Puxa a próxima linha da fila para `current` (ou esvazia, se a fila acabou). */
function advance(
  committed: TerminalLine[],
  queue: TerminalLine[],
): OutputState {
  if (queue.length > 0) {
    return { committed, current: queue[0], queue: queue.slice(1) }
  }
  return { committed, current: null, queue: [] }
}

function outputReducer(state: OutputState, action: OutputAction): OutputState {
  switch (action.type) {
    case 'echo':
      return { ...state, committed: [...state.committed, action.line] }
    case 'enqueue':
      // Se nada está digitando, começa a primeira linha já; senão, enfileira.
      if (state.current === null && state.queue.length === 0) {
        return advance(state.committed, action.lines)
      }
      return { ...state, queue: [...state.queue, ...action.lines] }
    case 'typed': {
      const committed = state.current
        ? [...state.committed, state.current]
        : state.committed
      return advance(committed, state.queue)
    }
    case 'clear':
      return { committed: [], queue: [], current: null }
    default:
      return state
  }
}

/**
 * Orquestra o terminal: a fila de saída digitada caractere a caractere (máquina
 * de estados num reducer), o eco da entrada, o dispatch de comandos e o anúncio
 * acessível via região `aria-live`. A digitação respeita `prefers-reduced-motion`
 * (texto instantâneo). A sequência de boot é a "digitação na entrada" do site.
 */
export default function Terminal() {
  const prefersReduced = useReducedMotion()
  // Ids do boot são 1..N; o contador começa em N para o próximo ser N+1.
  const idRef = useRef(bootLines.length)
  const nextId = useCallback(() => (idRef.current += 1), [])

  const [output, dispatch] = useReducer(
    outputReducer,
    undefined,
    (): OutputState =>
      advance(
        [],
        bootLines.map((line, index) => ({ ...line, id: index + 1 })),
      ),
  )

  const [announcement, setAnnouncement] = useState(() =>
    bootLines.map((line) => line.text).join('. '),
  )

  const handleTyped = useCallback(() => dispatch({ type: 'typed' }), [])

  const shown = useTypewriter(output.current ? output.current.text : null, {
    enabled: !prefersReduced,
    speed: 14,
    onDone: handleTyped,
  })

  const execute = useCallback(
    (raw: string) => {
      const trimmed = raw.trim()
      const echo: TerminalLine = {
        id: nextId(),
        kind: 'input',
        text: `${PROMPT} ${raw}`,
      }

      if (trimmed === '') {
        dispatch({ type: 'echo', line: echo })
        return
      }

      const name = trimmed.split(/\s+/)[0].toLowerCase()
      const buffer: TerminalLine[] = []
      let cleared = false

      const ctx: TerminalContext = {
        print: (text, kind = 'output') => {
          const items = Array.isArray(text) ? text : [text]
          for (const item of items) {
            buffer.push({ id: nextId(), kind, text: item })
          }
        },
        clear: () => {
          cleared = true
        },
        navigate: (id) => scrollToSection(id),
        toggleTheme: () => {
          toggleTheme()
          return getTheme()
        },
      }

      const command = commandMap.get(name)
      if (!command) {
        buffer.push({
          id: nextId(),
          kind: 'error',
          text: `comando não encontrado: "${name}". digite "help" para a lista.`,
        })
      } else {
        command.run(ctx)
      }

      if (cleared) {
        dispatch({ type: 'clear' })
        setAnnouncement('Terminal limpo.')
        return
      }

      dispatch({ type: 'echo', line: echo })
      dispatch({ type: 'enqueue', lines: buffer })
      setAnnouncement(buffer.map((line) => line.text).join('. '))
    },
    [nextId],
  )

  return (
    <div className="border-border bg-surface rounded-md border p-4 sm:p-6">
      <TerminalOutput
        committed={output.committed}
        current={output.current}
        shown={shown}
      />
      <CommandChips onRun={execute} />
      <TerminalInput onSubmit={execute} />
      <p role="status" aria-live="polite" className="sr-only">
        {announcement}
      </p>
    </div>
  )
}
