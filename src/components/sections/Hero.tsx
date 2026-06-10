import { profile } from '../../data/profile'

const tagline =
  'Do front ao back, com TypeScript no meio — e um joguinho na Unity no caminho.'

/**
 * Hero "Monolito": o próprio terminal é o herói da página. Aqui é a versão
 * estática (estrutura + conteúdo). A digitação de boot, o cursor piscando e a
 * interatividade chegam na Fase 4.
 */
export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Início"
      className="px-[var(--spacing-gutter)] pt-14"
    >
      <div className="mx-auto flex min-h-[100svh] max-w-[var(--container-content)] flex-col justify-center py-[var(--spacing-section)]">
        <div className="border-border bg-surface w-full rounded-md border p-5 font-mono text-sm break-words sm:p-8">
          <p className="text-muted">
            <span className="text-accent">dionel@portfolio</span>:~${' '}
            <span className="text-text">whoami</span>
          </p>

          <div className="mt-6">
            <p className="text-muted text-xs tracking-widest uppercase">
              Olá, eu sou
            </p>
            <h1 className="text-heading mt-2 text-4xl tracking-tight sm:text-5xl">
              {profile.name}
            </h1>
            <p className="text-accent mt-3 text-lg sm:text-xl">
              {profile.title}
            </p>
            <p className="text-text mt-5 max-w-2xl font-sans text-base leading-relaxed">
              {tagline}
            </p>
          </div>

          <p className="text-muted mt-8">
            <span className="text-accent">dionel@portfolio</span>:~${' '}
            <span
              className="bg-accent ml-0.5 inline-block h-4 w-2.5 align-middle"
              aria-hidden="true"
            />
          </p>
        </div>

        <p className="text-muted mt-4 font-mono text-xs">
          Dica: o terminal fica interativo já já — digite{' '}
          <span className="text-text">help</span> para ver os comandos.
        </p>
      </div>
    </section>
  )
}
