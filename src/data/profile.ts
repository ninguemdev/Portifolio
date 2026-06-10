import type { Profile } from '../types/content'

/**
 * Dados pessoais e textos do terminal. Edite aqui para atualizar o conteúdo
 * exibido na seção #sobre, no rodapé e nos comandos `sobre`/`whoami`.
 */
export const profile: Profile = {
  name: 'Dionel Sebastião',
  title: 'Desenvolvedor Full Stack Júnior',

  bio:
    'Desenvolvedor Full Stack Júnior que transita do front ao back: interfaces ' +
    'em React e TypeScript, APIs em Node.js, Django e .NET, e dados em SQL e ' +
    'NoSQL. Também desenvolvo jogos na Unity (C#) e, no momento, estudo Next.js. ' +
    'Gosto de código legível, acessível e bem documentado — este próprio site é ' +
    'um exemplo disso.',

  // Easter egg do comando `whoami` — brinca com o @ "ninguemdev".
  whoami:
    'ninguém. Literalmente — é só olhar meu @. Brincadeira: sou o Dionel, dev ' +
    'full stack que troca café por commits e ainda faz joguinho na Unity nas ' +
    'horas vagas.',

  social: [
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/ninguemdev',
      display: 'ninguemdev',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: null, // [EDITAR] adicionar URL do LinkedIn
      display: 'LinkedIn',
    },
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:ninguem.dev@gmail.com',
      display: 'ninguem.dev@gmail.com',
    },
  ],
}
