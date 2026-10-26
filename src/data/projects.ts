import type { Project } from '../types/content'

/**
 * Projetos exibidos na seção #projetos. Campos `null` são pendências marcadas
 * com [EDITAR]: preencha a stack e os links conforme forem definidos. O
 * primeiro projeto (`featured: true`) ocupa a linha inteira do grid.
 */
export const projects: Project[] = [
  {
    id: 'eden',
    name: 'EDEN',
    description:
      'Laboratório visual de vida artificial: uma população de criaturas ' +
      'evolui redes neurais por gerações numa arena 2D determinística, ' +
      'onde comportamentos emergem, se espalham ou desaparecem conforme ' +
      'cérebro e corpo passam de geração em geração.',
    stack: ['Unity 6', 'C#', 'URP'],
    repoUrl: 'https://github.com/ninguemdev/EDEN',
    demoUrl: null,
    featured: true,
  },
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
    id: 'penshow',
    name: 'PENSHOW',
    description:
      'Jogo multiplayer de perguntas e respostas em português, para 2 a ' +
      '12 jogadores pelo navegador — salas por convite, avatares ' +
      'customizáveis e cinco fases até uma final decidida por vidas.',
    stack: [
      'TypeScript',
      'React',
      'Vite',
      'Zustand',
      'Fastify',
      'Socket.IO',
      'Zod',
    ],
    repoUrl: null,
    demoUrl: 'https://dionel.site/penshow/',
    demoLabel: 'Jogar',
  },
  {
    id: 'comicle',
    name: 'Comicle',
    description:
      'Jogo multiplayer para criar histórias em quadrinhos coletivas: ' +
      'cada jogador lê os quadros anteriores, memoriza e desenha a ' +
      'continuação sem poder olhar de novo — a graça é ver como a ' +
      'memória do grupo transforma a história.',
    stack: ['TypeScript', 'React', 'Fastify', 'PostgreSQL', 'Socket.IO'],
    repoUrl: null,
    demoUrl: 'https://dionel.site/comicle/',
    demoLabel: 'Jogar',
  },
]
