import { useRef } from 'react'

/**
 * Histórico de comandos navegável pelas setas ↑/↓, como num shell. `prev`/`next`
 * recebem o texto atual e devolvem o que o input deve passar a exibir; a posição
 * é mantida em refs (não precisa re-renderizar).
 */
export function useCommandHistory(): {
  push: (command: string) => void
  prev: (current: string) => string
  next: (current: string) => string
} {
  const entries = useRef<string[]>([])
  const pointer = useRef<number | null>(null)
  const draft = useRef('')

  function push(command: string): void {
    entries.current.push(command)
    pointer.current = null
    draft.current = ''
  }

  function prev(current: string): string {
    const list = entries.current
    if (list.length === 0) return current
    if (pointer.current === null) {
      draft.current = current
      pointer.current = list.length - 1
    } else {
      pointer.current = Math.max(0, pointer.current - 1)
    }
    return list[pointer.current]
  }

  function next(current: string): string {
    if (pointer.current === null) return current
    const list = entries.current
    pointer.current += 1
    if (pointer.current >= list.length) {
      pointer.current = null
      return draft.current
    }
    return list[pointer.current]
  }

  return { push, prev, next }
}
