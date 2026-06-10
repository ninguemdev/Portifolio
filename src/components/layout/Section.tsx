import type { ReactNode } from 'react'
import Reveal from '../ui/Reveal'

type SectionProps = {
  /** Vira o `id` do landmark e a âncora de navegação. */
  id: string
  /** Comando exibido como rótulo `$ comando` acima do título. */
  command: string
  title: string
  /** Texto introdutório opcional sob o título. */
  intro?: string
  children: ReactNode
}

/**
 * Casca padrão de uma seção: espaçamento e largura consistentes, offset de
 * scroll para a nav fixa, e cabeçalho (`$ comando` + título) que dá nome
 * acessível ao landmark via `aria-labelledby`.
 */
export default function Section({
  id,
  command,
  title,
  intro,
  children,
}: SectionProps) {
  const headingId = `${id}-titulo`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-20 px-[var(--spacing-gutter)] py-[var(--spacing-section)]"
    >
      <Reveal className="mx-auto max-w-[var(--container-content)]">
        <p className="text-accent font-mono text-sm">$ {command}</p>
        <h2
          id={headingId}
          className="text-heading mt-3 text-3xl tracking-tight sm:text-4xl"
        >
          {title}
        </h2>
        {intro && (
          <p className="text-muted mt-4 max-w-prose text-lg">{intro}</p>
        )}
        <div className="mt-10">{children}</div>
      </Reveal>
    </section>
  )
}
