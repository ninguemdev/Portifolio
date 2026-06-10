import { useSyncExternalStore } from 'react'
import {
  getTheme,
  setTheme,
  subscribeTheme,
  toggleTheme,
  type Theme,
} from '../lib/theme'

/**
 * Lê o tema atual (reativo) e expõe as ações de troca. Como o estado vive num
 * store externo, qualquer componente — ou o terminal — fica em sincronia.
 */
export function useTheme(): {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
} {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getTheme)
  return { theme, setTheme, toggleTheme }
}
