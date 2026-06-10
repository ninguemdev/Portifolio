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

## ADR-0006 — Direção de design: "Monolito"

- **Contexto:** O portfólio precisa de identidade visual própria e memorável,
  fugindo do visual genérico de IA, com o terminal-hero como peça-assinatura e
  uma animação de digitação na entrada (pedido explícito do Dionel).
- **Opções:** três direções nomeadas e desenhadas — (1) "Console de Bordo" (HUD
  analógico, âmbar/teal, narrativa do jogo Supernova); (2) "Oficina Risográfica"
  (duotone fluoro + halftone, estética de impressão riso); (3) "Monolito"
  (monoespaço editorial, accent vermelhão, o hero inteiro é o terminal).
- **Decisão:** Direção 3 — "Monolito".
- **Justificativa:** Põe a digitação de entrada no centro absoluto — a animação
  não decora o hero, ela _é_ o hero. É a mais distinta sem depender de skin
  temática (1, risco de kitsch) nem de textura frágil em performance e
  legibilidade (2, risco de grão/halftone). Brilha igualmente em claro e escuro e
  é a mais fácil de descrever no dia seguinte. Tokens completos em
  [`DESIGN.md`](DESIGN.md), espelhados em `@theme` de `src/index.css`.
- **Risco aceito e mitigação:** mono em excesso cansa a leitura — mitigado com
  corpo em sans (Geist Sans), hierarquia forte e accent usado com parcimônia.
