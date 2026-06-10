import { motion, useReducedMotion } from 'motion/react'
import { profile } from '../../data/profile'
import { EASE_OUT } from '../../motion/presets'
import Terminal from '../terminal/Terminal'

/**
 * Hero "Monolito": o próprio terminal é o herói da página. Um <h1> visualmente
 * oculto garante o título para SEO e leitores de tela; o terminal entrega a
 * experiência visível (digitação de boot incluída).
 */
export default function Hero() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="top"
      aria-label="Início"
      className="px-[var(--spacing-gutter)] pt-14"
    >
      <div className="mx-auto flex min-h-[100svh] max-w-[var(--container-content)] flex-col justify-center py-[var(--spacing-section)]">
        <h1 className="sr-only">
          {profile.name} — {profile.title}
        </h1>

        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 12 }}
          animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <Terminal />
        </motion.div>

        <p className="text-muted mt-4 font-mono text-xs">
          Dica: digite <span className="text-text">help</span> ou toque num
          atalho acima.
        </p>
      </div>
    </section>
  )
}
