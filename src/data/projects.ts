import type { Project } from '../types/content'

/**
 * Projetos exibidos na seção #projetos. Campos `null` são pendências marcadas
 * com [EDITAR]: preencha a stack e os links conforme forem definidos.
 */
export const projects: Project[] = [
  {
    id: 'torneios-utfpr',
    name: 'Site de Torneios — UTFPR',
    description:
      'Plataforma web para gerenciamento e exibição de torneios ' +
      'universitários na UTFPR.',
    stack: null, // [EDITAR] tecnologias usadas
    repoUrl: null, // [EDITAR] link do GitHub
    demoUrl: null, // [EDITAR] link ao vivo (ou manter null se não houver)
  },
  {
    id: 'supernova-delivery',
    name: 'Supernova Delivery',
    description:
      'Jogo desenvolvido na Unity com mecânicas de entrega em cenário ' +
      'espacial.',
    stack: ['Unity', 'C#'],
    repoUrl: null, // [EDITAR] link do GitHub
    demoUrl: null, // [EDITAR] itch.io ou link de build
    demoLabel: 'Jogar / Download',
  },
  {
    id: 'bestia',
    name: 'Bestia',
    description:
      'Site de apresentação do livro "Bestia", com visual alinhado à ' +
      'identidade da obra.',
    stack: null, // [EDITAR] tecnologias usadas
    repoUrl: null, // [EDITAR] link do GitHub
    demoUrl: null, // [EDITAR] link ao vivo
  },
  {
    id: 'portfolio',
    name: 'Portfólio',
    description:
      'Site de portfólio pessoal — one-page, dark/light mode e terminal ' +
      'interativo. Este projeto.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Motion'],
    repoUrl: null, // [EDITAR] link do GitHub após publicar
    demoUrl: null, // [EDITAR] link ao vivo após deploy
  },
]
