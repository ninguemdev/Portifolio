# Decisões (ADRs)

Registro curto de cada decisão técnica ou de design relevante, no formato
**contexto → opções → decisão → justificativa**. Ordem cronológica; ADRs não são
reescritos — se uma decisão muda, adiciona-se uma nova que supera a anterior.

---

## ADR-0001 — Base: Vite + React 19 + TypeScript

- **Contexto:** Portfólio one-page interativo (terminal funcional, temas,
  animações). Precisa de DX rápida, tipagem forte e build enxuto.
- **Opções:** (a) Vite + React + TS; (b) Astro 5 com ilhas React; (c) Next.js.
- **Decisão:** Vite + React 19 + TypeScript.
- **Justificativa:** O site é essencialmente uma SPA de uma página com forte
  interatividade no cliente (o terminal) — não há necessidade de SSR/rotas que
  justifique Next, nem de uma camada de conteúdo estático que justifique Astro
  aqui. Vite dá HMR instantâneo, build mínimo e total controle do HTML. React 19
  e TS são a stack que o portfólio quer demonstrar.

## ADR-0002 — Tailwind CSS v4 com configuração CSS-first

- **Contexto:** Estilização utilitária com design tokens autorais para dois
  temas.
- **Opções:** (a) Tailwind v4 (CSS-first, `@theme`); (b) Tailwind v3
  (`tailwind.config.js`); (c) CSS Modules / vanilla.
- **Decisão:** Tailwind v4 via plugin `@tailwindcss/vite`, com tokens em `@theme`
  dentro de `src/index.css`. **Sem `tailwind.config.js`.**
- **Justificativa:** A v4 unifica tokens e tema em CSS (custom properties), o que
  casa perfeitamente com a necessidade de dois temas baseados em CSS variables e
  com o script anti-FOUC. Menos arquivos de config, menos indireção, build mais
  rápido. Evita o atrito de manter um config JS paralelo ao CSS.

## ADR-0003 — Motion para animações

- **Contexto:** Animações com propósito (entrada do hero, reveals on-scroll,
  micro-interações) que precisam respeitar `prefers-reduced-motion`.
- **Opções:** (a) Motion; (b) CSS/Web Animations API na mão; (c) GSAP.
- **Decisão:** Motion (`motion/react`).
- **Justificativa:** API declarativa que integra com React, `whileInView` para
  reveals, e `useReducedMotion` de primeira classe — exatamente o que a regra de
  acessibilidade exige. Anima `transform`/`opacity` com performance. GSAP é
  poderoso demais para o escopo; fazer tudo na mão multiplicaria o código sem
  ganho. O pacote é leve o suficiente para não violar "zero dependência
  desnecessária".

## ADR-0004 — ESLint (flat config) + Prettier integrados

- **Contexto:** Qualidade de código visível; lint e formatação não podem
  brigar entre si.
- **Opções:** (a) ESLint + Prettier com `eslint-config-prettier`; (b) ESLint com
  regras de estilo próprias (sem Prettier); (c) Biome.
- **Decisão:** ESLint 10 flat config + Prettier 3, com `eslint-config-prettier`
  desativando regras de estilo conflitantes (carregado por último).
- **Justificativa:** Combinação madura e amplamente reconhecida — recrutadores a
  esperam num projeto profissional. Separa responsabilidades: ESLint cuida de
  correção, Prettier cuida de formatação. Biome é promissor, mas a dupla
  ESLint+Prettier comunica melhor a familiaridade com o ecossistema padrão.

## ADR-0005 — Conteúdo orientado a dados (`src/data/`)

- **Contexto:** Perfil, skills e projetos mudam com frequência e têm vários
  campos pendentes (`[EDITAR]`). Precisam ser fáceis de editar sem mexer em JSX.
- **Opções:** (a) Módulos TS tipados em `src/data/`; (b) texto embutido nos
  componentes; (c) arquivos JSON/Markdown externos.
- **Decisão:** Módulos TypeScript tipados em `src/data/`, consumidos pelas
  seções.
- **Justificativa:** Mantém a fonte da verdade do conteúdo num único lugar
  óbvio, com a segurança de tipos (um projeto sem `repo` falha no compilador, não
  silenciosamente na tela). Editar o portfólio passa a ser editar dados, não
  layout — e o README poderá apontar exatamente para onde mexer. JSON perderia a
  tipagem; texto no JSX espalharia o conteúdo.
