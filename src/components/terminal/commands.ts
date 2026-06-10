import { profile } from '../../data/profile'
import { skills } from '../../data/skills'
import { projects } from '../../data/projects'
import type { Theme } from '../../lib/theme'

/** Prompt exibido no terminal (eco de entrada e linha de input). */
export const PROMPT = 'dionel@portfolio:~$'

export type LineKind = 'input' | 'output' | 'error' | 'system'

export type TerminalLine = {
  id: number
  kind: LineKind
  text: string
}

/** Ações que um comando pode executar sobre o terminal e a página. */
export type TerminalContext = {
  /** Enfileira linha(s) na saída (com efeito de digitação). */
  print: (text: string | string[], kind?: LineKind) => void
  /** Limpa o terminal. */
  clear: () => void
  /** Rola suavemente até a seção indicada. */
  navigate: (id: string) => void
  /** Alterna o tema e devolve o tema resultante. */
  toggleTheme: () => Theme
}

export type Command = {
  name: string
  description: string
  run: (ctx: TerminalContext) => void
}

/**
 * Registro de comandos — fonte única usada pelo dispatch, pelo `help` e pelos
 * chips. Para adicionar um comando, basta incluí-lo nesta lista.
 */
export const commands: Command[] = [
  {
    name: 'help',
    description: 'lista os comandos disponíveis',
    run: (ctx) => {
      ctx.print('Comandos disponíveis:', 'system')
      ctx.print(
        commands.map((cmd) => `  ${cmd.name.padEnd(9)}${cmd.description}`),
      )
    },
  },
  {
    name: 'sobre',
    description: 'quem é o Dionel',
    run: (ctx) => {
      ctx.print(profile.bio)
      ctx.navigate('sobre')
    },
  },
  {
    name: 'skills',
    description: 'tecnologias por categoria',
    run: (ctx) => {
      ctx.print(
        skills.map(
          (category) => `${category.label}: ${category.items.join(', ')}`,
        ),
      )
      ctx.navigate('skills')
    },
  },
  {
    name: 'projetos',
    description: 'os projetos em destaque',
    run: (ctx) => {
      ctx.print('Projetos:', 'system')
      ctx.print(projects.map((project) => `  • ${project.name}`))
      ctx.print('→ detalhes (stack e links) na seção de projetos.')
      ctx.navigate('projetos')
    },
  },
  {
    name: 'contato',
    description: 'onde me encontrar',
    run: (ctx) => {
      const links = profile.social.filter((link) => link.href !== null)
      ctx.print('Contato:', 'system')
      ctx.print(
        links.map(
          (link) => `  ${link.label.toLowerCase().padEnd(9)}${link.display}`,
        ),
      )
      ctx.navigate('contato')
    },
  },
  {
    name: 'theme',
    description: 'alterna entre tema claro e escuro',
    run: (ctx) => {
      const theme = ctx.toggleTheme()
      ctx.print(
        `tema alterado para ${theme === 'dark' ? 'escuro' : 'claro'}.`,
        'system',
      )
    },
  },
  {
    name: 'clear',
    description: 'limpa o terminal',
    run: (ctx) => ctx.clear(),
  },
  {
    name: 'whoami',
    description: '???',
    run: (ctx) => {
      const responses = profile.whoami
      ctx.print(responses[Math.floor(Math.random() * responses.length)])
    },
  },
]

export const commandMap = new Map(commands.map((cmd) => [cmd.name, cmd]))
