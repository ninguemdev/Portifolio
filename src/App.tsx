/**
 * Placeholder de transição — valida os design tokens da direção "Monolito"
 * (cores, escala fluida, fontes). A estrutura real da página vem na FASE 3.
 */
function App() {
  return (
    <main className="bg-bg flex min-h-screen flex-col items-center justify-center gap-4 px-[var(--spacing-gutter)] py-[var(--spacing-section)] text-center">
      <p className="text-accent font-mono text-sm tracking-wide">
        dionel@portfolio:~$
      </p>
      <h1 className="text-heading font-display text-4xl tracking-tight">
        Dionel Sebastião
      </h1>
      <p className="text-muted max-w-prose text-lg">
        Direção de design <strong className="text-text">Monolito</strong>{' '}
        aplicada. Tokens de cor, tipografia fluida e motion definidos.
      </p>
    </main>
  )
}

export default App
