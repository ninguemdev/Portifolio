import { useEffect, useState } from 'react'

type Options = {
  /** Quando `false` (ex.: reduced motion), o texto aparece instantâneo. */
  enabled: boolean
  /** Intervalo entre caracteres, em ms. */
  speed?: number
  /** Chamado quando o texto termina de "digitar". Deve ser estável (useCallback). */
  onDone?: () => void
}

/**
 * Efeito de digitação para uma string. Reinicia quando `text` muda; com
 * `enabled: false` entrega o texto completo de imediato (e ainda chama `onDone`),
 * para que nenhuma lógica dependa da animação. Todo `setState` acontece em
 * callbacks de timer — nunca síncrono no corpo do efeito.
 */
export function useTypewriter(
  text: string | null,
  { enabled, speed = 16, onDone }: Options,
): string {
  const [shown, setShown] = useState('')

  useEffect(() => {
    if (text === null) {
      const id = window.setTimeout(() => setShown(''), 0)
      return () => window.clearTimeout(id)
    }

    if (!enabled) {
      const id = window.setTimeout(() => {
        setShown(text)
        onDone?.()
      }, 0)
      return () => window.clearTimeout(id)
    }

    let typed = 0
    const reset = window.setTimeout(() => setShown(''), 0)
    const interval = window.setInterval(() => {
      typed += 1
      setShown(text.slice(0, typed))
      if (typed >= text.length) {
        window.clearInterval(interval)
        onDone?.()
      }
    }, speed)

    return () => {
      window.clearTimeout(reset)
      window.clearInterval(interval)
    }
  }, [text, enabled, speed, onDone])

  return shown
}
