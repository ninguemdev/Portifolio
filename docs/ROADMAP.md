# Roadmap

Fases do projeto, na ordem de execução. Uma fase por vez; cada uma termina com
documentação atualizada e um commit aprovado. Marque os checkboxes ao concluir.

Legenda: `[x]` concluído · `[ ]` pendente · `[~]` em andamento.

---

## Fase 0 — Setup ✅

- [x] Scaffold Vite + React 19 + TypeScript
- [x] Tailwind CSS v4 CSS-first (`@tailwindcss/vite` + `@theme`, sem `tailwind.config.js`)
- [x] Motion instalado
- [x] ESLint + Prettier configurados e integrados (`eslint-config-prettier`)
- [x] `.gitignore` adequado (Node/Vite + `.env`)
- [x] `npm run dev` sobe sem erros (validado: HTTP 200; `lint` e `build` limpos)
- [x] Boilerplate do template removido; `App.tsx` mínimo valida o stack
- [x] Commit inicial aprovado

## Fase 1 — Documentação 🔄

- [x] `CLAUDE.md` (memória do projeto)
- [x] `docs/ARQUITETURA.md` (estrutura, componentes, temas, animações)
- [x] `docs/DESIGN.md` (estrutura pronta; tokens na Fase 2)
- [x] `docs/ROADMAP.md` (este arquivo)
- [x] `docs/DECISOES.md` (ADRs; decisões da Fase 0 registradas)
- [x] Commit da documentação aprovado

## Fase 2 — Direção de design ✅

- [x] Propor 3 direções criativas nomeadas (conceito, paleta dark+light,
      par tipográfico, terminal-hero, risco estético)
- [x] Recomendar a mais forte e aguardar a escolha → escolhida: **"Monolito"**
- [x] Documentar a direção escolhida em `DESIGN.md` (tokens de cor dos 2 temas,
      escala tipográfica fluida com `clamp()`, espaçamentos, raios, motion)
- [x] Refletir os tokens em `@theme` de `src/index.css`
- [ ] Commit da direção de design aprovado

## Fase 3 — Estrutura, conteúdo e sistema de temas 🔄

- [x] Página única com landmarks: `<header>`, hero, `#sobre`, `#skills`,
      `#projetos`, `<footer id="contato">` (+ skip link)
- [x] Dados em `src/data/` (`profile.ts`, `skills.ts`, `projects.ts`)
- [x] Sistema de temas: CSS vars + classe no `<html>`, detecção de
      `prefers-color-scheme`, toggle manual, persistência em `localStorage`
      (store via `useSyncExternalStore`, compartilhado com o futuro terminal)
- [x] Script inline anti-FOUC no `<head>`
- [x] `ThemeToggle` com `aria-label` e `aria-pressed` refletindo o estado
- [x] Conteúdo dos dados inserido nas seções corretas; `[EDITAR]` listados
- [x] Fontes web auto-hospedadas (Martian Mono, Geist, JetBrains Mono)
- [x] Sem bibliotecas de componentes prontas
- [ ] Commit aprovado

## Fase 4 — Terminal interativo + animações 🔄

- [x] Terminal funcional: `help`, `sobre`, `skills`, `projetos`, `contato`,
      `theme`, `clear`, `whoami`
- [x] `<input>` real, navegável por teclado, cursor de bloco piscando
- [x] Histórico de comandos com setas ↑/↓
- [x] Saída anunciada via `aria-live` (região dedicada); efeito de digitação
- [x] Chips de comando tocáveis (≥44px) acima do input
- [x] Digitação de boot na entrada do site
- [x] Animações Motion: entrada do hero, reveals on-scroll, micro-interações
- [x] `prefers-reduced-motion`: digitação instantânea, reveals sem transição
- [ ] Commit aprovado

## Fase 5 — Responsividade (prioridade máxima)

- [ ] Mobile-first em todos os componentes
- [ ] Validado em 320, 375, 414, 768, 1024, 1280, 1440px+ e landscape mobile
- [ ] Tipografia e espaçamentos fluidos com `clamp()`
- [ ] Zero overflow horizontal (teste `max-width: 320px` por seção)
- [ ] Alvos de toque ≥ 44×44px; nav mobile sem hamburger que esconda conteúdo
- [ ] Terminal: chips tocáveis; teclado virtual não quebra layout
- [ ] Resumo: cada problema por viewport e como foi corrigido
- [ ] Commit aprovado

## Fase 6 — Acessibilidade, performance e entrega

- [ ] WCAG 2.1 AA: contraste nos 2 temas (razões dos pares principais
      registradas), teclado completo, foco visível, `aria`, headings corretos
- [ ] `npm run build` limpo, sem warnings
- [ ] Lighthouse 95+ em Performance, Acessibilidade, Best Practices e SEO
      (registrar os 4 números abaixo)
- [ ] Meta tags: `<title>`, description, Open Graph, Twitter Card, favicon
      SVG + PNG fallback
- [ ] `README.md` final (o que é, stack, como rodar, como editar conteúdo, deploy
      GitHub Pages e Vercel)
- [ ] Revisão final de `CLAUDE.md`, `ARQUITETURA.md` e `DECISOES.md`
- [ ] Commit aprovado

### Resultados do Lighthouse (preencher na Fase 6)

| Categoria      | Pontuação |
| -------------- | --------- |
| Performance    | —         |
| Acessibilidade | —         |
| Best Practices | —         |
| SEO            | —         |
