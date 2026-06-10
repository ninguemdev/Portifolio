import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { reveal } from '../../motion/presets'

/**
 * Revela o conteúdo ao entrar na viewport (uma única vez). Com reduced motion,
 * renderiza um <div> simples — sem transição, sem dependência de animação.
 */
export default function Reveal({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
