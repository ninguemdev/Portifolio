# Arquitetura

Como o código é organizado, quais componentes existem e por que, como o sistema
de temas e as animações funcionam. Documento vivo — atualizado conforme o código
evolui.

---

## Princípios

- **Conteúdo separado de apresentação.** Texto, skills e projetos vivem em
  `src/data/` como módulos tipados. Editar o portfólio = editar dados.
- **Componentes pequenos e de responsabilidade única.** Cada um faz uma coisa e
  é legível de cima a baixo.
- **Lógica em hooks.** Tema, terminal, efeito de digitação e afins ficam em
  hooks reutilizáveis e testáveis, não embutidos no JSX.
- **Sem dependências desnecessárias.** Nada de bibliotecas de componentes; o
  design é autoral.

---

## Estrutura de pastas

```
.
├── public/
│   └── favicon.svg              # Favicon SVG autoral (chevron > do prompt)
├── docs/
│   ├── ARQUITETURA.md           # Este arquivo
│   ├── DESIGN.md                # Direção visual e design tokens
│   ├── ROADMAP.md               # Fases do projeto (checklist)
│   └── DECISOES.md              # Log de ADRs
├── src/
│   ├── components/
│   │   ├── layout/              # Estrutura da página
│   │   │   ├── Header.tsx       #   nav fixa enxuta
│   │   │   ├── Section.tsx      #   casca de seção (espaçamento, título, a11y)
│   │   │   └── Footer.tsx       #   rodapé/contato (#contato)
│   │   ├── sections/            # Seções da landing page
│   │   │   ├── Hero.tsx         #   hero com o terminal
│   │   │   ├── Sobre.tsx        #   #sobre
│   │   │   ├── Skills.tsx       #   #skills
│   │   │   └── Projetos.tsx     #   #projetos
│   │   ├── terminal/            # Elemento-assinatura (ver seção própria)
│   │   │   ├── Terminal.tsx
│   │   │   ├── TerminalInput.tsx
│   │   │   ├── TerminalOutput.tsx
│   │   │   ├── CommandChips.tsx
│   │   │   └── commands.ts
│   │   └── ui/                  # Peças reutilizáveis
│   │       ├── ThemeToggle.tsx
│   │       ├── Reveal.tsx       #   wrapper de scroll reveal (Motion)
│   │       └── ProjectCard.tsx
│   ├── data/                    # Conteúdo (fonte da verdade do portfólio)
│   │   ├── profile.ts           #   nome, título, bio, links sociais
│   │   ├── skills.ts            #   tecnologias por categoria
│   │   └── projects.ts          #   lista de projetos
│   ├── hooks/
│   │   ├── useTheme.ts          #   estado do tema + persistência
│   │   ├── useTypewriter.ts     #   efeito de digitação (honra reduced motion)
│   │   └── useCommandHistory.ts #   histórico do terminal (setas ↑/↓)
│   ├── lib/
│   │   ├── theme.ts             #   constantes/helpers de tema (chave localStorage)
│   │   └── scroll.ts            #   scroll suave até seções (honra reduced motion)
│   ├── motion/
│   │   └── presets.ts           #   durações, easings e variants compartilhados
│   ├── types/
│   │   └── content.ts           #   tipos de Skill, Project, etc.
│   ├── App.tsx                  # Composição das seções
│   ├── main.tsx                 # Bootstrap React + import das fontes (@fontsource)
│   └── index.css                # @import tailwind + @theme (tokens) + base
├── index.html                   # Inclui o script anti-FOUC de tema no <head>
├── vite.config.ts               # Plugins: react + tailwindcss
├── eslint.config.js
├── .prettierrc.json
├── CLAUDE.md
└── package.json
```

> A árvore acima reflete o estado atual do repositório após todas as fases concluídas.

---

## Componentes planejados e responsabilidades

### Layout

| Componente | Responsabilidade                                                                                                                             |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `Header`   | Nav fixa enxuta com âncoras para as seções e o `ThemeToggle`. No mobile, navegação sem hamburger que esconda conteúdo relevante.             |
| `Section`  | Casca padrão de seção: espaçamento/largura, offset de scroll e cabeçalho (`$ comando` + título) que nomeia o landmark via `aria-labelledby`. |
| `Footer`   | Landmark `#contato`. Exibe e-mail, GitHub e LinkedIn como links acessíveis.                                                                  |

### Seções

| Componente | Responsabilidade                                                             |
| ---------- | ---------------------------------------------------------------------------- |
| `Hero`     | Primeira dobra. Hospeda o `Terminal` e a apresentação inicial (nome/título). |
| `Sobre`    | Mini-bio de Dionel (`#sobre`).                                               |
| `Skills`   | Tecnologias agrupadas por categoria, lidas de `data/skills.ts` (`#skills`).  |
| `Projetos` | Grade de `ProjectCard` a partir de `data/projects.ts` (`#projetos`).         |

### Terminal (elemento-assinatura)

| Componente       | Responsabilidade                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `Terminal`       | Orquestra o estado: linhas de saída, valor do input, dispatch de comandos. Região com `aria-live` para anunciar a saída. |
| `TerminalInput`  | `<input>` real, navegável por teclado, com cursor piscando e histórico (↑/↓).                                            |
| `TerminalOutput` | Renderiza as linhas, com efeito de digitação via `useTypewriter`.                                                        |
| `CommandChips`   | Chips/botões tocáveis (≥44×44px) para disparar comandos sem digitar — essencial no mobile.                               |
| `commands.ts`    | Registro dos comandos: nome → `{ descrição, executar() }`. Fonte única para `help` e para os chips.                      |

### UI

| Componente    | Responsabilidade                                                                  |
| ------------- | --------------------------------------------------------------------------------- |
| `ThemeToggle` | Botão de troca de tema com `aria-label` e estado refletido.                       |
| `Reveal`      | Envolve conteúdo para _reveal_ on-scroll discreto; vira no-op com reduced motion. |
| `ProjectCard` | Cartão de projeto: título, descrição, stack, links de repo/demo.                  |

---

## Sistema de temas

Objetivo: dois temas de verdade, sem flash de tema errado (FOUC), com preferência
do sistema respeitada e escolha manual persistida.

1. **Tokens** — todas as cores são CSS custom properties definidas em
   [`src/index.css`](../src/index.css), com um conjunto para o tema claro
   (padrão) e outro sobrescrito sob o seletor de tema escuro.
2. **Seletor** — uma classe `dark` no elemento `<html>`. No Tailwind v4 isso é
   declarado via `@custom-variant dark (&:where(.dark, .dark *))`, permitindo
   usar `dark:` nas utilities apontando para a classe (e não para
   `prefers-color-scheme`).
3. **Script anti-FOUC** — um pequeno script **inline e síncrono** no `<head>` do
   [`index.html`](../index.html) roda antes da primeira pintura: lê
   `localStorage`; na ausência de valor, usa `matchMedia('(prefers-color-scheme:
dark)')`; aplica a classe no `<html>` imediatamente.
4. **Runtime** — `useTheme` mantém o estado em React, alterna a classe, persiste
   a escolha em `localStorage` e mantém `color-scheme` coerente. `ThemeToggle` e
   o comando `theme` do terminal usam esse mesmo hook.
5. **Chave de `localStorage`** e helpers centralizados em
   [`src/lib/theme.ts`](../src/lib/theme.ts) para evitar divergência entre o
   script inline e o runtime.

---

## Organização das animações

- **Biblioteca:** Motion (`motion/react`).
- **Presets centralizados** em [`src/motion/presets.ts`](../src/motion/presets.ts):
  durações, easings e _variants_ reutilizáveis. Os componentes importam daqui —
  nada de números mágicos espalhados.
- **Regra de performance:** anima-se apenas `transform` e `opacity`.
- **Reveals on-scroll** encapsulados em `Reveal`, que usa `whileInView` com
  `viewport={{ once: true }}`.
- **Reduced motion:** `useReducedMotion` do Motion é a fonte da verdade. Com
  `prefers-reduced-motion: reduce`, `Reveal` renderiza o conteúdo estático e
  `useTypewriter` entrega o texto instantaneamente. Detalhes de durações/easings
  em [`DESIGN.md`](DESIGN.md).
