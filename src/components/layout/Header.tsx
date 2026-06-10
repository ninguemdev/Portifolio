import ThemeToggle from '../ui/ThemeToggle'

const sections = [
  { href: '#sobre', label: 'sobre' },
  { href: '#skills', label: 'skills' },
  { href: '#projetos', label: 'projetos' },
  { href: '#contato', label: 'contato' },
]

/**
 * Nav fixa e enxuta. As âncoras aparecem a partir de `sm`; no mobile a navegação
 * fica por conta dos chips de comando do terminal (sempre visíveis no hero) —
 * sem hamburger. O `ThemeToggle` fica sempre visível, à direita.
 */
export default function Header() {
  return (
    <header className="border-border bg-bg/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[var(--container-content)] items-center justify-between gap-2 px-[var(--spacing-gutter)]">
        <a
          href="#top"
          className="font-display text-heading inline-flex h-11 items-center text-sm font-semibold tracking-tight"
        >
          dionel<span className="text-accent">.</span>ninguem
        </a>

        <div className="flex items-center gap-1">
          <nav aria-label="Seções do site" className="hidden sm:block">
            <ul className="flex items-center gap-1">
              {sections.map((section) => (
                <li key={section.href}>
                  <a
                    href={section.href}
                    className="text-muted hover:text-accent inline-flex h-11 items-center rounded-md px-2 font-mono text-sm transition-colors"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
