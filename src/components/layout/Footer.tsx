import { profile } from '../../data/profile'
import Reveal from '../ui/Reveal'

/** Apenas links com destino definido aparecem (pendências [EDITAR] ficam ocultas). */
const links = profile.social.filter((link) => link.href !== null)

/**
 * Rodapé e ponto de contato (#contato). Lista os canais disponíveis como links
 * acessíveis e fecha a página com a assinatura do projeto.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contato"
      className="border-border scroll-mt-20 border-t px-[var(--spacing-gutter)] py-[var(--spacing-section)]"
    >
      <Reveal className="mx-auto max-w-[var(--container-content)]">
        <p className="text-accent font-mono text-sm">$ contato</p>
        <h2 className="text-heading font-display mt-3 text-3xl tracking-tight">
          Vamos conversar.
        </h2>
        <p className="text-muted mt-3 max-w-prose">
          Aberto a oportunidades e colaborações. O caminho mais rápido para mim:
        </p>

        <ul className="mt-6 flex flex-col gap-1">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href ?? undefined}
                className="text-text hover:text-accent group inline-flex min-h-11 items-center gap-3 font-mono transition-colors"
                {...(link.id !== 'email'
                  ? { target: '_blank', rel: 'noreferrer noopener' }
                  : {})}
              >
                <span className="text-muted group-hover:text-accent text-sm">
                  {link.label.toLowerCase()}
                </span>
                <span className="text-accent">→</span>
                <span>{link.display}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="text-muted mt-12 font-mono text-xs">
          © {year} {profile.name} · feito com React, TypeScript e Tailwind CSS.
        </p>
      </Reveal>
    </footer>
  )
}
