# dionel.ninguem — Portfólio

Site de portfólio de **Dionel Sebastião**, Desenvolvedor Full Stack.

Uma landing page única (_one-page_) com um **terminal interativo como hero**: o visitante digita comandos reais (`help`, `sobre`, `skills`, `projetos`, `contato`, `theme`, `clear`, `whoami`) que executam ações de verdade — navegação, troca de tema, informações.

---

## Stack

| Camada        | Tecnologia                  | Versão  |
| ------------- | --------------------------- | ------- |
| Build         | Vite                        | 8.0.16  |
| UI            | React + React DOM           | 19.2.7  |
| Linguagem     | TypeScript                  | 6.0.3   |
| Estilização   | Tailwind CSS v4 (CSS-first) | 4.3.0   |
| Animação      | Motion                      | 12.40.0 |
| Lint / Format | ESLint + Prettier           | 10 / 3  |

Fontes auto-hospedadas via `@fontsource-variable`: Martian Mono, Geist, JetBrains Mono.
Sem bibliotecas de componentes — design inteiramente autoral.

---

## Como rodar localmente

```bash
git clone https://github.com/ninguemdev/portfolio
cd portfolio
npm install
npm run dev        # servidor de desenvolvimento em localhost:5173
```

---

## Comandos disponíveis

| Comando                | O que faz                                      |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Servidor de desenvolvimento (Vite, porta 5173) |
| `npm run build`        | Type-check + build de produção em `dist/`      |
| `npm run preview`      | Serve o build de produção localmente           |
| `npm run lint`         | ESLint em todo o projeto                       |
| `npm run format`       | Prettier `--write` (formata os arquivos)       |
| `npm run format:check` | Prettier `--check` (valida sem alterar)        |

---

## Como editar o conteúdo

Todo o conteúdo do site vive em `src/data/` como módulos TypeScript tipados.
Editar o portfólio = editar esses arquivos. Os componentes não precisam ser tocados.

| Arquivo                | O que controla                                          |
| ---------------------- | ------------------------------------------------------- |
| `src/data/profile.ts`  | Nome, título, bio, links sociais, respostas do `whoami` |
| `src/data/skills.ts`   | Categorias de tecnologias e itens de cada categoria     |
| `src/data/projects.ts` | Lista de projetos (nome, descrição, stack, links)       |

Campos marcados com `// [EDITAR]` estão pendentes de preenchimento.

---

## Deploy

### Vercel (recomendado)

1. Importe o repositório em [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Vite** (detectado automaticamente).
3. Build command: `npm run build` · Output directory: `dist`.
4. Deploy. A cada push para `main`, o site é atualizado automaticamente.

### GitHub Pages

1. No `vite.config.ts`, defina `base: '/nome-do-repo/'` (substitua pelo nome real).
2. Instale o plugin: `npm install -D gh-pages`.
3. Adicione em `package.json`: `"deploy": "gh-pages -d dist"`.
4. Execute: `npm run build && npm run deploy`.

---

## Estrutura do projeto

```
src/
├── components/
│   ├── layout/      # Header, Footer, Section
│   ├── sections/    # Hero, Sobre, Skills, Projetos
│   ├── terminal/    # Terminal, TerminalInput, TerminalOutput, commands
│   └── ui/          # ProjectCard, Reveal, ThemeToggle
├── data/            # Conteúdo tipado (profile, skills, projects)
├── hooks/           # useTheme, useTypewriter, useCommandHistory
├── lib/             # theme.ts (store externo), scroll.ts
├── motion/          # presets.ts (variantes do Motion)
├── types/           # content.ts (interfaces TypeScript)
└── index.css        # Tokens de design (Tailwind v4, @theme)
```

---

## Decisões de design e arquitetura

As decisões técnicas relevantes estão documentadas em [`docs/DECISOES.md`](docs/DECISOES.md) (ADR-0001 a ADR-0012).

---

## Licença

MIT
