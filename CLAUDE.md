# CLAUDE.md — Memória do projeto

> **Leia este arquivo antes de qualquer coisa ao retomar o trabalho numa nova
> sessão.** Ele descreve o que é o projeto, o estado atual, as convenções e as
> regras inegociáveis. Para o detalhe de cada fase, consulte
> [`docs/ROADMAP.md`](docs/ROADMAP.md).

---

## O que é

Site de **portfólio pessoal** de **Dionel Sebastião** (Desenvolvedor Full
Stack). Uma _landing page_ única (one-page), em **português (pt-BR)**, com
identidade visual própria, **dark e light mode** tratados como dois temas
desenhados com o mesmo cuidado, animações com propósito e responsividade
impecável de **320px a ultrawide**.

O portfólio é, ele mesmo, um item do portfólio: o código-fonte, o histórico de
commits e a qualidade da implementação serão inspecionados por recrutadores e
outros desenvolvedores. Cada detalhe (semântica HTML, nomes, organização de
arquivos, mensagens de commit) faz parte do produto entregue.

**Elemento-assinatura:** o _hero_ é um **terminal interativo funcional** — o
visitante digita comandos reais (`help`, `sobre`, `skills`, `projetos`,
`contato`, `theme`, `clear`, `whoami`) que executam ações (navegação, troca de
tema, etc.). Não é decoração.

---

## Stack e versões exatas

| Camada                 | Tecnologia             | Versão  |
| ---------------------- | ---------------------- | ------- |
| Build                  | Vite                   | 8.0.16  |
| UI                     | React + React DOM      | 19.2.7  |
| Linguagem              | TypeScript             | 6.0.3   |
| Plugin React           | @vitejs/plugin-react   | 6.0.2   |
| Estilização            | Tailwind CSS           | 4.3.0   |
| Plugin Tailwind        | @tailwindcss/vite      | 4.3.0   |
| Animação               | Motion                 | 12.40.0 |
| Lint                   | ESLint                 | 10.4.1  |
| Format                 | Prettier               | 3.8.4   |
| Integração lint/format | eslint-config-prettier | 10.1.8  |

**Tailwind v4 é CSS-first.** A configuração vive em [`src/index.css`](src/index.css)
dentro de `@theme` — **não existe `tailwind.config.js`** e ele não deve ser
criado. O plugin é registrado em [`vite.config.ts`](vite.config.ts).

---

## Comandos úteis

| Comando                | O que faz                                              |
| ---------------------- | ------------------------------------------------------ |
| `npm run dev`          | Sobe o servidor de desenvolvimento (Vite, porta 5173). |
| `npm run build`        | Type-check (`tsc -b`) + build de produção em `dist/`.  |
| `npm run preview`      | Serve o build de produção localmente.                  |
| `npm run lint`         | ESLint em todo o projeto.                              |
| `npm run format`       | Prettier `--write` (formata os arquivos).              |
| `npm run format:check` | Prettier `--check` (valida sem alterar).               |

---

## Convenções de código

- **Componentes:** um componente por arquivo, `PascalCase` no nome do arquivo e
  da função (`Terminal.tsx` → `export default function Terminal()`).
- **Hooks:** `camelCase` com prefixo `use` (`useTheme.ts`).
- **Demais módulos** (dados, utilidades, tipos): `camelCase` (`projects.ts`,
  `scroll.ts`).
- **Dados de conteúdo** (perfil, skills, projetos) ficam em `src/data/` como
  módulos TypeScript tipados — editar conteúdo = editar dados, nunca JSX.
- **Estilização** via classes utilitárias do Tailwind; tokens de design só como
  CSS custom properties definidas em `@theme`. Sem CSS-in-JS, sem styled.
- **Sem bibliotecas de componentes prontas** (shadcn, MUI, Radix, etc.). O
  design é autoral.
- **Imports** ordenados: libs externas → módulos internos → estilos.
- **Sem código morto e sem comentários óbvios.** Comentário explica _porquê_,
  não _o quê_.

### Padrão de commits — [Conventional Commits](https://www.conventionalcommits.org/)

`tipo(escopo opcional): descrição no imperativo, em pt-BR`

Tipos em uso: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`,
`test`, `build`. Um commit por fase concluída (no mínimo). O histórico é público
e faz parte do portfólio — **a mensagem é proposta e aprovada antes de
executar**, e **não leva coautoria de IA**.

---

## Regras inegociáveis

1. **Responsividade é o requisito nº 1.** Mobile-first. Nenhuma tarefa está
   pronta se quebrar entre 320px e ultrawide. Zero overflow horizontal.
2. **Acessibilidade desde o primeiro componente.** HTML semântico, contraste
   WCAG 2.1 AA nos dois temas, foco visível, navegação 100% por teclado
   (incluindo o terminal), `aria` onde necessário, hierarquia de headings
   correta.
3. **Dois temas de verdade.** Dark e light desenhados com o mesmo cuidado — não
   um a inversão do outro. Detecta `prefers-color-scheme`, permite toggle
   manual, persiste em `localStorage`, com script inline anti-FOUC no `<head>`.
4. **`prefers-reduced-motion: reduce` é honrado sempre.** O site funciona
   perfeitamente sem animação: efeito de digitação vira texto instantâneo,
   reveals aparecem sem transição. Nenhuma funcionalidade depende de animação.
5. **Performance.** Anima apenas `transform` e `opacity`. Sem layout thrash,
   imagens otimizadas, zero dependência desnecessária.

---

## Definition of Done (uma tarefa/fase)

- [ ] Funciona e foi validada nos viewports-alvo (320 → ultrawide), sem overflow.
- [ ] Acessível: teclado, foco visível, contraste AA, semântica e `aria` ok.
- [ ] Respeita `prefers-reduced-motion` e os dois temas.
- [ ] `npm run lint`, `npm run format:check` e `npm run build` passam limpos.
- [ ] Sem código morto, nomes claros, componentes bem separados.
- [ ] Documentação atualizada: `ROADMAP.md` (checkboxes), `DECISOES.md` (se
      houve decisão relevante) e este `CLAUDE.md` (se algo estrutural mudou).
- [ ] Mensagem de commit (Conventional Commits) proposta e aprovada.

---

## Fluxo de trabalho entre fases

Uma fase por vez, na ordem do [`docs/ROADMAP.md`](docs/ROADMAP.md). Ao concluir:
atualizar checkboxes do ROADMAP, registrar decisões em
[`docs/DECISOES.md`](docs/DECISOES.md), propor a mensagem de commit e apresentar
um resumo + o que vem a seguir. **Aguardar OK do Dionel antes de avançar.**

## Estado atual

**Fases 0–4 concluídas.** Setup, documentação, direção **"Monolito"**, estrutura +
temas, e agora o **terminal interativo** (peça-assinatura) com as animações.

O terminal ([`src/components/terminal/`](src/components/terminal/)) tem os comandos
`help`/`sobre`/`skills`/`projetos`/`contato`/`theme`/`clear`/`whoami`, `<input>`
real com cursor de bloco piscando, histórico ↑/↓, digitação de boot na entrada,
chips tocáveis e anúncio via região `aria-live` dedicada (a saída visual é
`aria-hidden` para não narrar caractere a caractere). A fila de saída é uma máquina
de estados num `useReducer`; a digitação vem de [`useTypewriter`](src/hooks/useTypewriter.ts).
Animações com Motion: entrada do hero, [`Reveal`](src/components/ui/Reveal.tsx)
on-scroll nas seções e micro-interações — tudo com fallback de `prefers-reduced-motion`.

**Revisões pós-Fase 4 (a pedido do Dionel):** tema escuro virou **preto e verde**
(`#0A0C0A` / accent `#4ADE80`; claro segue vermelhão — accent por tema); **fundo
ambiente** sutil animado (`.ambient`, cor base movida p/ `<html>`); título passou a
**"Desenvolvedor Full Stack"** (sem "Júnior" — ele nunca atuou como dev, e não quer
"estudante"). Ver ADR-0010.

**Fase 5 (responsividade) concluída.** Zero overflow horizontal de 320px a 1440px
nos dois temas (medido com Chrome headless). Alvos de toque ≥44px. No mobile, a nav
de seções fica nos chips do terminal (header mostra só marca + toggle; âncoras a
partir de `sm`). Marca virou **dionel.ninguem**. Ver ADR-0011.

**Próximo: Fase 6** — acessibilidade (contraste WCAG dos 2 temas, teclado, foco,
headings), performance e entrega (Lighthouse 95+, meta tags, README). **Atenção:**
o bundle JS cresceu com o Motion (~106 KB gzip) — avaliar `LazyMotion`/code-split.
