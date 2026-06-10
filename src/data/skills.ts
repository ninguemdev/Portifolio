import type { SkillCategory } from '../types/content'

/**
 * Tecnologias por categoria, exibidas na seção #skills e listadas pelo comando
 * `skills` do terminal. A ordem aqui é a ordem de exibição.
 */
export const skills: SkillCategory[] = [
  {
    id: 'linguagens',
    label: 'Linguagens',
    items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'C#', 'SQL'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    items: ['React', 'Astro 5'],
  },
  {
    id: 'build',
    label: 'Build e Estilização',
    items: ['Vite', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'Django', 'ASP.NET / .NET Core'],
  },
  {
    id: 'bancos',
    label: 'Bancos de dados',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    id: 'gamedev',
    label: 'Game Dev',
    items: ['Unity (C#)'],
  },
  {
    id: 'testes',
    label: 'Testes',
    items: ['Jest / Vitest', '.NET Testing'],
  },
  {
    id: 'cloud',
    label: 'Cloud e Infra',
    items: ['AWS', 'Azure', 'Nginx'],
  },
  {
    id: 'ferramentas',
    label: 'Ferramentas',
    items: ['Git', 'GitHub', 'Linux', 'VS Code', 'Trello', 'Kanban', 'Slack'],
  },
  {
    id: 'fundamentos',
    label: 'Fundamentos acadêmicos',
    items: ['C++ (sistemas e algoritmos)'],
  },
  {
    id: 'aprendendo',
    label: 'Aprendendo agora',
    items: [
      'Next.js',
      'Docker',
      'ORM',
      'Clean Architecture',
      'Algoritmos de IA',
    ],
  },
]
