import ThemeToggle from '../ui/ThemeToggle'

const sections = [
  { href: '#sobre', label: 'sobre' },
  { href: '#skills', label: 'skills' },
  { href: '#projetos', label: 'projetos' },
  { href: '#contato', label: 'contato' },
]

/**
 * Nav fixa e enxuta. As âncoras ficam sempre visíveis (sem hamburger que esconda
 * conteúdo); no mobile encolhem com a tipografia fluida. O `ThemeToggle` fecha
 * a barra à direita.
 */
export default function Header() {
  return (
    <header className="border-border bg-bg/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[var(--container-content)] items-center justify-between gap-2 px-[var(--spacing-gutter)]">
        <a
          href="#top"
          className="font-display text-heading text-sm font-semibold tracking-tight"
        >
          dionel<span className="text-accent">.</span>
        </a>

        <nav aria-label="Seções do site">
          <ul className="flex items-center gap-0.5 sm:gap-1">
            {sections.map((section) => (
              <li key={section.href}>
                <a
                  href={section.href}
                  className="text-muted hover:text-accent inline-flex h-11 items-center rounded-md px-2 font-mono text-xs transition-colors sm:text-sm"
                >
                  {section.label}
                </a>
              </li>
            ))}
            <li className="ml-1">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
