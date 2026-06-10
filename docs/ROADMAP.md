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

## Fase 1 — Documentação ✅

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
- [x] Commit da direção de design aprovado

## Fase 3 — Estrutura, conteúdo e sistema de temas ✅

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
- [x] Commit aprovado

## Fase 4 — Terminal interativo + animações ✅

- [x] Terminal funcional: `help`, `sobre`, `skills`, `projetos`, `contato`,
      `theme`, `clear`, `whoami`
- [x] `<input>` real, navegável por teclado, cursor de bloco piscando
- [x] Histórico de comandos com setas ↑/↓
- [x] Saída anunciada via `aria-live` (região dedicada); efeito de digitação
- [x] Chips de comando tocáveis (≥44px) acima do input
- [x] Digitação de boot na entrada do site
- [x] Animações Motion: entrada do hero, reveals on-scroll, micro-interações
- [x] `prefers-reduced-motion`: digitação instantânea, reveals sem transição
- [x] Commit aprovado

## Fase 5 — Responsividade (prioridade máxima) 🔄

- [x] Mobile-first em todos os componentes
- [x] Validado em 320, 375, 414, 768, 1024, 1280, 1440px+ e landscape mobile
      (medição automatizada com Chrome headless via puppeteer-core — depois
      removido; ver "Validação" abaixo)
- [x] Tipografia e espaçamentos fluidos com `clamp()` (desde a Fase 2)
- [x] Zero overflow horizontal em todas as larguras, nos dois temas
- [x] Alvos de toque ≥ 44×44px; nav mobile sem hamburger (chips do terminal)
- [x] Terminal: chips tocáveis; input de 48px; `break-all` evita estouro
- [x] Resumo: problemas por viewport e correções (abaixo)
- [ ] Commit aprovado

### Validação (Chrome headless, larguras-alvo × 2 temas)

Mediu-se `scrollWidth` vs viewport e o tamanho de cada alvo interativo. Problemas
encontrados e corrigidos:

| Problema                                     | Onde            | Correção                                                                                                                                           |
| -------------------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Marca "dionel." 66×21px (alvo < 44)          | `Header`        | virou `inline-flex h-11` (44px) e o texto passou a **dionel.ninguem**                                                                              |
| Input do terminal 24px de altura (alvo < 44) | `TerminalInput` | `<input>` agora cobre todo o campo (`absolute inset-0`), campo com `min-h-12` → 46px                                                               |
| Marca mais longa apertaria a nav no mobile   | `Header`        | âncoras de seção passam a aparecer só em `sm+`; no mobile a navegação fica nos **chips do terminal** (sem hamburger); `ThemeToggle` sempre visível |
| Skip link < 44px quando visível              | `App`           | `focus:flex focus:min-h-11` ao receber foco                                                                                                        |

**Overflow horizontal:** nenhum, de 320px a 1440px, em claro e escuro. Tipografia
e espaçamentos fluidos (`clamp()`, Fase 2) garantem transição sem saltos.

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
