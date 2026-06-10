import type { Variants } from 'motion/react'

/** Easing padrão das entradas (cubic-bezier "out quart"). Ver docs/DESIGN.md §6. */
export const EASE_OUT: [number, number, number, number] = [0.25, 1, 0.5, 1]

/** Reveal on-scroll: discreto, anima só opacity e transform. */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
}
