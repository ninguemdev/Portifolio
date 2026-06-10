# Design

Especificação visual do portfólio: direção, paleta dos dois temas, tipografia,
espaçamentos, raios e princípios de motion.

> **Estado:** direção escolhida e tokens definidos na Fase 2. Todos os valores
> abaixo estão espelhados em `@theme` de [`src/index.css`](../src/index.css), que
> é a fonte de verdade técnica. As fontes web são carregadas na Fase 3.

---

## 1. Direção visual — "Monolito"

O monoespaço levado a sério como decisão de design: o site inteiro é tipografado
como um belo arquivo de código / _man page_ — alinhamento à esquerda, títulos
gigantes, muito ar e um único accent vermelhão. **Não há "janelinha" de terminal:
o hero inteiro É o terminal**, e a digitação de entrada (boot) vira o próprio
título do site; o restante do conteúdo "continua" a partir dele.

- **Sensação:** confiante, técnica, autoral — "um dev com gosto", não um template.
- **Risco estético assumido:** mono em excesso cansa a leitura e pode soar "mais
  um site de terminal". Mitigação: corpo em **sans** (não-mono), hierarquia forte
  de tamanho/peso, muito espaço em branco e um único accent usado com parcimônia.
- **Critério de sucesso:** alguém que viu o site uma vez consegue descrevê-lo no
  dia seguinte — _"o portfólio que é um terminal tipografado, com a abertura se
  digitando sozinha."_

**Banido** (visual genérico de IA): quase-preto com accent neon (verde-ácido ou
azul-elétrico) e cards com tags em pílula; creme com serifa de alto contraste e
terracota; layout jornal de linhas finas sem raio; Inter ou Roboto como fonte
única; gradiente roxo-azul em texto; grade de cards idênticos como solução padrão.

### O terminal-hero nesta direção

Sem cromo de janela. Um prompt grande `dionel@portfolio:~$` abre a página e, no
carregamento, **digita** a apresentação caractere a caractere (efeito de boot)
com cursor de bloco piscando. A moldura é mínima — definida por espaço e
tipografia, não por bordas pesadas. O accent vermelhão marca o cursor, o prompt e
estados ativos. Com `prefers-reduced-motion`, a digitação é substituída por texto
instantâneo (ver §6).

---

## 2. Paleta

Dois temas desenhados com o mesmo cuidado — não um a inversão do outro. Cada cor é
uma CSS custom property (valores brutos em `:root` / `.dark`, expostas como
utilities via `@theme inline`). As razões de contraste WCAG dos pares principais
são verificadas e registradas na Fase 6.

### 2.1 Tema claro (padrão)

| Token               | Papel                                | Valor     |
| ------------------- | ------------------------------------ | --------- |
| `--bg`              | Fundo base                           | `#FBFAF7` |
| `--surface`         | Superfícies elevadas (cards, blocos) | `#FFFFFF` |
| `--text`            | Texto de corpo                       | `#1A1A1A` |
| `--heading`         | Títulos                              | `#000000` |
| `--muted`           | Texto secundário                     | `#6B6B66` |
| `--accent`          | Destaque / ação (vermelhão)          | `#E5341B` |
| `--accent-contrast` | Texto sobre o accent                 | `#FFFFFF` |
| `--border`          | Bordas e divisores                   | `#E2E0DA` |

### 2.2 Tema escuro

| Token               | Papel                       | Valor     |
| ------------------- | --------------------------- | --------- |
| `--bg`              | Fundo base                  | `#131211` |
| `--surface`         | Superfícies elevadas        | `#1B1A18` |
| `--text`            | Texto de corpo              | `#E8E6E0` |
| `--heading`         | Títulos                     | `#FFFFFF` |
| `--muted`           | Texto secundário            | `#8A8780` |
| `--accent`          | Destaque / ação (vermelhão) | `#FF5436` |
| `--accent-contrast` | Texto sobre o accent        | `#131211` |
| `--border`          | Bordas e divisores          | `#2A2826` |

O fundo é um **quase-preto quente** (`#131211`), não preto puro — evita o clichê e
suaviza o contraste. O accent clareia no escuro (`#FF5436`) para manter presença.
Utilities geradas: `bg-bg`, `bg-surface`, `text-text`, `text-heading`,
`text-muted`, `text-accent`, `bg-accent`, `text-accent-contrast`, `border-border`.

---

## 3. Tipografia

Par tipográfico em que o display e o mono compartilham DNA monoespaçado (o
"Monolito"), e o corpo é sans para parágrafos longos confortáveis.

| Papel       | Fonte              | Motivo ligado ao conceito                                                                   |
| ----------- | ------------------ | ------------------------------------------------------------------------------------------- |
| **Display** | **Martian Mono**   | Formas largas e monolíticas; em tamanho grande viram blocos arquitetônicos — o "monolito".  |
| **Corpo**   | **Geist Sans**     | Grotesca limpa e neutra; mantém o texto legível e descansa o olho do mono (mitiga o risco). |
| **Mono**    | **JetBrains Mono** | O terminal; mesma linhagem mono do display, então site e console partilham DNA.             |

Tokens: `--font-display`, `--font-sans`, `--font-mono` (com fallbacks de sistema
até as fontes web carregarem na Fase 3).

### Escala tipográfica fluida

`clamp()` com mínimo em 320px e máximo em 1280px — transição suave de mobile a
ultrawide, sem saltos. Cada tamanho traz sua `line-height` (tighter nos títulos).

| Token         | min → max | `clamp()`                                        | line-height |
| ------------- | --------- | ------------------------------------------------ | ----------- |
| `--text-xs`   | 12 → 13px | `clamp(0.75rem, 0.729rem + 0.104vw, 0.8125rem)`  | 1.5         |
| `--text-sm`   | 14 → 15px | `clamp(0.875rem, 0.854rem + 0.104vw, 0.9375rem)` | 1.5         |
| `--text-base` | 16 → 18px | `clamp(1rem, 0.958rem + 0.208vw, 1.125rem)`      | 1.65        |
| `--text-lg`   | 18 → 21px | `clamp(1.125rem, 1.063rem + 0.313vw, 1.3125rem)` | 1.55        |
| `--text-xl`   | 22 → 27px | `clamp(1.375rem, 1.271rem + 0.521vw, 1.6875rem)` | 1.3         |
| `--text-2xl`  | 27 → 36px | `clamp(1.6875rem, 1.5rem + 0.938vw, 2.25rem)`    | 1.2         |
| `--text-3xl`  | 33 → 48px | `clamp(2.0625rem, 1.75rem + 1.563vw, 3rem)`      | 1.12        |
| `--text-4xl`  | 40 → 64px | `clamp(2.5rem, 2rem + 2.5vw, 4rem)`              | 1.05        |
| `--text-5xl`  | 48 → 88px | `clamp(3rem, 2.167rem + 4.167vw, 5.5rem)`        | 1.0         |

Display em tamanhos grandes usa _tracking_ levemente negativo (`tracking-tight`)
para compactar as formas largas do Martian Mono.

---

## 4. Espaçamentos

Base: a escala padrão do Tailwind (múltiplos de `0.25rem`) para o miúdo. Para o
ritmo macro da página, dois tokens fluidos e uma largura de conteúdo:

| Token                 | Uso                           | Valor                     |
| --------------------- | ----------------------------- | ------------------------- |
| `--spacing-gutter`    | Margem lateral da página      | `clamp(1rem, 5vw, 2rem)`  |
| `--spacing-section`   | Respiro vertical entre seções | `clamp(4rem, 10vw, 9rem)` |
| `--container-content` | Largura máxima do conteúdo    | `72rem`                   |

---

## 5. Raios (border-radius)

"Monolito" prefere cantos quase retos — poucos raios e intencionais. Sem
`rounded-full` decorativo; pílulas são evitadas (fazem parte do visual banido).

| Token         | Valor | Uso                               |
| ------------- | ----- | --------------------------------- |
| `--radius-sm` | `2px` | Foco, detalhes finos              |
| `--radius-md` | `4px` | Botões, inputs, cards             |
| `--radius-lg` | `8px` | Blocos maiores, quando necessário |

---

## 6. Princípios de motion

Animação com propósito; nunca atrapalha e nunca é requisito de funcionamento.

- **O que anima:** apenas `transform` e `opacity`.
- **O que não anima:** propriedades que causam layout/reflow.
- **Easings:** `--ease-out-quart` `cubic-bezier(0.25, 1, 0.5, 1)` (entradas) e
  `--ease-in-out-soft` `cubic-bezier(0.65, 0, 0.35, 1)` (transições simétricas).
- **Durações:** `--duration-fast` `150ms` (hover/focus), `--duration-base`
  `280ms` (reveals/micro-interações), `--duration-slow` `600ms` (entrada do hero).
- **Boot do terminal (assinatura):** ao carregar, a apresentação é **digitada**
  caractere a caractere com cursor piscando. É a animação central da página.
- **Entrada do hero:** orquestração discreta (fade/translate sutil) após o boot.
- **Reveals on-scroll:** sutis e uma única vez (`once: true`), via o componente
  `Reveal`.
- **Micro-interações:** em links, botões e cards de projeto — contidas.
- **`prefers-reduced-motion: reduce`:** o site funciona perfeitamente sem
  movimento. A digitação do terminal vira **texto instantâneo**, os reveals
  aparecem **sem transição**, e o scroll suave é desligado. Nenhuma funcionalidade
  (inclusive os comandos do terminal) depende de animação.

Em JS, os valores acima vivem em `src/motion/presets.ts` (criado na Fase 3/4) para
não espalhar números mágicos pelos componentes.
