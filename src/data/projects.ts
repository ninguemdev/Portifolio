import type { Project } from '../types/content'

/**
 * Projetos exibidos na seção #projetos. Campos `null` são pendências marcadas
 * com [EDITAR]: preencha a stack e os links conforme forem definidos.
 */
export const projects: Project[] = [
  {
    id: 'torneios-chaveia',
    name: 'Site de Torneios — CHAVEIA',
    description:
      'Plataforma web para criação, gerenciamento e acompanhamento ' +
      'de torneios — chaves, resultados e classificações em tempo real.',
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'CSS puro',
      'Supabase',
      'PostgreSQL',
      'PL/pgSQL',
      'ESLint',
    ],
    repoUrl: null, // [EDITAR] link do GitHub
    demoUrl: 'https://chaveia.pages.dev/',
  },
  {
    id: 'supernova-delivery',
    name: 'Supernova Delivery',
    description:
      'Jogo desenvolvido na Unity com mecânicas de entrega em cenário ' +
      'espacial.',
    stack: ['Unity', 'C#'],
    repoUrl: null, // [EDITAR] link do GitHub
    demoUrl: 'https://ninguemdev.itch.io/supernova-delivery',
    demoLabel: 'Jogar / Download',
  },
  {
    id: 'bestia',
    name: 'Bestia',
    description:
      'Site de apresentação do livro "Bestia", com visual alinhado à ' +
      'identidade da obra.',
    stack: ['Astro 6.4', 'TypeScript', 'CSS puro', 'Web Audio API', 'MDX'],
    repoUrl: null, // [EDITAR] link do GitHub
    demoUrl: 'https://bestia-site.pages.dev/',
  },
  {
    id: 'portfolio',
    name: 'Portfólio',
    description:
      'Site de portfólio pessoal — one-page, dark/light mode e terminal ' +
      'interativo. Este projeto.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Motion'],
    repoUrl: null, // [EDITAR] link do GitHub após publicar
    demoUrl: 'https://dionel.site/',
  },
]
