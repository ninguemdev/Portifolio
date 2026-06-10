# Design

Especificação visual do portfólio: direção, paleta dos dois temas, tipografia,
espaçamentos, raios e princípios de motion.

> **Estado:** estrutura pronta, **tokens a definir na Fase 2.** As seções abaixo
> existem para serem preenchidas quando a direção de design for escolhida. Cada
> bloco marcado com _⏳ Fase 2_ receberá valores concretos (hex, `clamp()`,
> durações) que serão espelhados em `@theme` de [`src/index.css`](../src/index.css).

---

## 1. Direção visual

_⏳ Fase 2._ Conceito da direção escolhida em poucas frases: a ideia central, a
sensação que o site deve transmitir e o **risco estético** assumido. Inclui
também o que está explicitamente **banido** (visual genérico de IA: quase-preto +
neon; creme + serifa terracota; layout jornal sem raios; Inter/Roboto como fonte
única; gradiente roxo-azul em texto; grade de cards idênticos como solução
padrão).

Como o **terminal-hero** se manifesta nesta direção (moldura, cromática, textura)
também é descrito aqui.

---

## 2. Paleta

Dois temas desenhados com o mesmo cuidado — não um a inversão do outro. Cada cor
vira uma CSS custom property em `@theme`. Os pares de contraste principais (texto
sobre fundo, accent sobre fundo) terão suas razões WCAG verificadas e registradas
na Fase 6.

### 2.1 Tema claro (padrão)

_⏳ Fase 2._

| Token             | Papel                                  | Valor |
| ----------------- | -------------------------------------- | ----- |
| `--color-bg`      | Fundo base                             | —     |
| `--color-surface` | Superfícies elevadas (cards, terminal) | —     |
| `--color-text`    | Texto de corpo                         | —     |
| `--color-heading` | Títulos                                | —     |
| `--color-muted`   | Texto secundário                       | —     |
| `--color-accent`  | Cor de destaque / ação                 | —     |
| `--color-border`  | Bordas e divisores                     | —     |

### 2.2 Tema escuro

_⏳ Fase 2._ Mesmos tokens, valores próprios (aplicados sob a classe `dark`).

---

## 3. Tipografia

Par tipográfico (display + corpo + mono), cada fonte escolhida por um motivo
ligado ao conceito. A fonte **mono** é estruturante: é a do terminal.

- **Display:** _⏳ Fase 2._
- **Corpo:** _⏳ Fase 2._
- **Mono:** _⏳ Fase 2._

### Escala tipográfica fluida

_⏳ Fase 2._ Escala com `clamp()` (min, preferido em `vw`, max) para transição
suave de 320px a ultrawide, sem saltos bruscos entre breakpoints.

| Token                     | Uso               | `clamp()` |
| ------------------------- | ----------------- | --------- |
| `--text-xs`               | Legendas, meta    | —         |
| `--text-sm`               | Apoio             | —         |
| `--text-base`             | Corpo             | —         |
| `--text-lg`               | Destaque de corpo | —         |
| `--text-xl`               | Subtítulos        | —         |
| `--text-2xl`…`--text-5xl` | Títulos / hero    | —         |

---

## 4. Espaçamentos

_⏳ Fase 2._ Escala de espaçamento coerente (base e ritmo vertical), com valores
fluidos onde fizer sentido. Tokens como `--space-1`…`--space-N` ou via utilities
do Tailwind derivadas do tema.

---

## 5. Raios (border-radius)

_⏳ Fase 2._ Conjunto pequeno e intencional de raios (`--radius-sm`,
`--radius-md`, `--radius-lg`, `--radius-full`), coerente com a direção visual.

---

## 6. Princípios de motion

Diretrizes para que a animação tenha propósito e nunca atrapalhe.

- **O que anima:** apenas `transform` e `opacity`.
- **O que não anima:** propriedades que causam layout/reflow.
- **Durações e easings:** _⏳ Fase 2._ (tabela de tokens — ex.: `--ease-out`,
  `--duration-fast/base/slow`).
- **Entrada do hero:** orquestração discreta na primeira carga.
- **Reveals on-scroll:** sutis, uma vez só (`once: true`).
- **Micro-interações:** em links, botões e cards, contidas.
- **`prefers-reduced-motion: reduce`:** desativa transições e a digitação do
  terminal (texto aparece instantâneo); reveals aparecem sem transição. Nenhuma
  funcionalidade depende de animação.

---

## Critério de sucesso

Alguém que viu o site uma vez deve conseguir descrevê-lo no dia seguinte. Um
risco visual bem executado vale mais que dez efeitos espalhados.
