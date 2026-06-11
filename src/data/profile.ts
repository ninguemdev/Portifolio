import type { Profile } from '../types/content'

/**
 * Dados pessoais e textos do terminal. Edite aqui para atualizar o conteúdo
 * exibido na seção #sobre, no rodapé e nos comandos `sobre`/`whoami`.
 */
export const profile: Profile = {
  name: 'Dionel Sebastião',
  title: 'Desenvolvedor Full Stack',

  bio:
    'Cursando Bacharelado em Sistemas de Informação na UTFPR desde 2023, sou um ' +
    'desenvolvedor Full Stack que leva arquitetura a sério: domínio separado da ' +
    'UI, segurança validada no banco e não só na interface, SQL escrito à mão ' +
    'por escolha. Construo aplicações web com React, TypeScript e Astro, ' +
    'integradas a PostgreSQL, MySQL e MongoDB. No back, Django e .NET Core. Fora ' +
    'do web, desenvolvo jogos na Unity com C# e dedico tempo real ao estudo de ' +
    'algoritmos e arquitetura de IA. Gosto de código que explica o que faz e de ' +
    'projetos que sobrevivem a uma revisão técnica — este site incluído.',

  // Easter egg do comando `whoami` — uma resposta é sorteada a cada chamada.
  whoami: [
    'ninguém. Literalmente — é só olhar meu @. Brincadeira: sou o Dionel, dev full stack.',
    'um Desenvolvedor Full Stack disfarçado de comando de terminal.',
    'depende: no front sou React, no back sou .NET, e às 2h da manhã sou só console.log.',
    'o cara que escreve SQL na mão porque ORM nenhum manda nele... ainda.',
    'metade dev web, metade dev de jogos na Unity, e a outra metade estudando IA. Sim, três metades.',
    'Dionel. Faço a UI conversar com o banco sem nenhum dos dois sair magoado.',
  ],

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
      id: 'itchio',
      label: 'itch.io',
      href: 'https://ninguemdev.itch.io/',
      display: 'ninguemdev.itch.io',
    },
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:ninguem.dev@gmail.com',
      display: 'ninguem.dev@gmail.com',
    },
  ],
}
