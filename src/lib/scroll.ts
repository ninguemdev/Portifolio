/**
 * Rola suavemente até uma seção pelo `id`. Respeita `prefers-reduced-motion`
 * (rolagem instantânea) e o `scroll-margin-top` das seções (offset da nav fixa).
 */
export function scrollToSection(id: string): void {
  if (typeof document === 'undefined') return
  const target = document.getElementById(id)
  if (!target) return

  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  target.scrollIntoView({
    behavior: prefersReduced ? 'auto' : 'smooth',
    block: 'start',
  })
}
