import { commands } from './commands'

/**
 * Atalhos tocáveis para os comandos — essenciais no mobile, onde digitar é
 * ruim. Cada chip tem alvo de toque de 44px de altura. O input segue disponível
 * para quem prefere digitar.
 */
export default function CommandChips({
  onRun,
}: {
  onRun: (name: string) => void
}) {
  return (
    <div
      role="group"
      aria-label="Atalhos de comando"
      className="mt-3 flex flex-wrap gap-2"
    >
      {commands.map((command) => (
        <button
          key={command.name}
          type="button"
          onClick={() => onRun(command.name)}
          title={command.description}
          className="border-border text-muted hover:text-accent hover:border-accent inline-flex min-h-11 items-center rounded-md border px-3 font-mono text-xs transition-colors"
        >
          {command.name}
        </button>
      ))}
    </div>
  )
}
