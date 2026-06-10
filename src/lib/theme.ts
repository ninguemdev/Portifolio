/**
 * Estado de tema do site. Um store mínimo (sem dependências) compartilhado por
 * todos os componentes via `useTheme`, e também usado pelo comando `theme` do
 * terminal — uma única fonte de verdade.
 *
 * A classe `.dark` no <html> é o que efetivamente troca o tema (ver index.css).
 * O script anti-FOUC em index.html aplica o tema antes da primeira pintura;
 * mantenha a chave e a lógica de `resolveInitialTheme` em sincronia com ele.
 */

export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'theme'

function readStored(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

function prefersDark(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

/** Tema inicial: preferência salva tem prioridade sobre a do sistema. */
export function resolveInitialTheme(): Theme {
  return readStored() ?? (prefersDark() ? 'dark' : 'light')
}

function apply(theme: Theme): void {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

let currentTheme: Theme =
  typeof window === 'undefined' ? 'light' : resolveInitialTheme()

const listeners = new Set<() => void>()

export function getTheme(): Theme {
  return currentTheme
}

export function subscribeTheme(listener: () => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function setTheme(theme: Theme): void {
  if (theme === currentTheme) return
  currentTheme = theme
  apply(theme)
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    /* localStorage indisponível (modo privado): tema vale só nesta sessão. */
  }
  listeners.forEach((listener) => listener())
}

export function toggleTheme(): void {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark')
}
