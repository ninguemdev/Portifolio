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

## ADR-0007 — Fontes auto-hospedadas via @fontsource-variable

- **Contexto:** A direção "Monolito" depende de três fontes (Martian Mono, Geist,
  JetBrains Mono). É preciso carregá-las com boa performance e sem prejudicar
  privacidade nem a meta de Lighthouse 95+.
- **Opções:** (a) `@fontsource-variable/*` (self-host, fontes variáveis); (b)
  Google Fonts via `<link>`; (c) `@fontsource/*` estático (pesos fixos).
- **Decisão:** `@fontsource-variable/*`, importando apenas o eixo de peso
  (`/wght.css`) em `src/main.tsx`.
- **Justificativa:** Self-host elimina a requisição a terceiros (privacidade e um
  _render-blocking_ a menos) e é melhor para o Lighthouse. As versões variáveis
  cobrem todos os pesos num arquivo enxuto; o Vite faz _fingerprint_ e os
  `@font-face` trazem `unicode-range`, então só o subconjunto latino é baixado.
  Importar só o eixo de peso evita itálico e o eixo de largura do Martian Mono.

## ADR-0008 — Tema: store externo + script anti-FOUC

- **Contexto:** Tema com detecção do sistema, toggle manual e persistência,
  sem flash de tema errado (FOUC), e que o **terminal** também possa alternar.
- **Opções:** (a) store externo com `useSyncExternalStore`; (b) React Context +
  Provider; (c) estado local em cada componente.
- **Decisão:** Um store mínimo em `src/lib/theme.ts` consumido por
  `useSyncExternalStore` (hook `useTheme`), com a classe `.dark` no `<html>` como
  verdade visual e um script inline síncrono no `<head>` aplicando o tema antes
  da primeira pintura.
- **Justificativa:** O store fora do React dá uma fonte de verdade única que tanto
  o `ThemeToggle` quanto o comando `theme` do terminal (Fase 4) usam, sem aninhar
  Providers nem duplicar estado. `useSyncExternalStore` é a API idiomática do
  React 19 para fontes externas. O script inline é a única forma de evitar o FOUC,
  pois roda antes do bundle; a chave (`theme`) e a lógica espelham `lib/theme.ts`.

## ADR-0009 — Terminal: reducer + acessibilidade da saída digitada

- **Contexto:** O terminal digita a saída caractere a caractere e precisa ser
  acessível por teclado e a leitores de tela — sem narrar cada caractere nem
  depender da animação para funcionar.
- **Opções de estado:** (a) `useReducer` como máquina de estados (committed /
  queue / current); (b) vários `useState` sincronizados por efeitos.
- **Opções de a11y:** (a) saída visual `aria-hidden` + região `aria-live`
  dedicada que recebe o texto final de cada comando uma vez; (b) marcar o
  container de saída inteiro como `aria-live`.
- **Decisão:** `useReducer` para a fila de digitação; saída visual `aria-hidden`
  com uma região `aria-live="polite"` separada (sr-only) anunciando o resultado
  completo de cada comando. O `<input>` é real (caret nativo oculto, cursor de
  bloco desenhado por cima); a digitação usa timers e respeita reduced motion.
- **Justificativa:** O reducer concentra as transições e evita `setState` dentro
  de efeitos (que a regra `react-hooks/set-state-in-effect` do ESLint 10 proíbe),
  deixando a "próxima linha" como parte pura da transição. Marcar a saída visual
  como `aria-live` narraria cada caractere — péssimo; a região dedicada anuncia o
  texto final uma vez, enquanto a parte visual continua sendo só efeito. Nada
  depende da animação: com reduced motion o texto é instantâneo e os comandos
  funcionam igual.

## ADR-0010 — Tema escuro "preto e verde" + fundo ambiente

- **Contexto:** Pedido do Dionel para o tema escuro ser preto e verde e para um
  fundo com gradiente que muda de cor de forma propositalmente quase
  imperceptível. "Preto + verde neon" é, porém, um dos visuais banidos no
  briefing (quase-preto + accent neon).
- **Decisão:** Tema escuro com **near-black levemente esverdeado** (`#0A0C0A`) e
  **verde fósforo equilibrado** (`#4ADE80`) — não preto puro nem verde-ácido. O
  tema claro mantém o accent vermelhão, então cada tema tem accent próprio. Um
  fundo ambiente (`.ambient`) fixo atrás de tudo: duas camadas de gradiente
  tingidas com o accent fazem crossfade lento + leve deriva (anima só
  `opacity`/`transform`), estático com reduced motion. A cor base passou do
  `<body>` para o `<html>` para o fundo ambiente (z-index negativo) aparecer.
- **Justificativa:** Honra o pedido aplicando bom gosto — o verde é legível e
  distinto sem o clichê de "terminal hacker", e o near-black evita o preto chapado.
  Accents diferentes por tema reforçam o princípio de "dois temas desenhados com o
  mesmo cuidado, não um a inversão do outro". O ambiente usa o accent do tema
  ativo, então fica verde no escuro e vermelhão no claro, sempre sutil.
- **Risco aceito:** flerta com o visual banido; mitigado pelos valores (tom, não
  neon) e pela sutileza. Pode ser intensificado depois se o Dionel quiser.
