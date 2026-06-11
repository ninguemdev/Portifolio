/**
 * Tipos do conteúdo do portfólio. A fonte da verdade do conteúdo vive em
 * `src/data/`; estes tipos garantem que campos pendentes sejam explícitos
 * (`null`) em vez de esquecidos silenciosamente.
 */

/** Link social/contato (ex.: GitHub, LinkedIn). `href` nulo = ainda não definido. */
export type SocialLink = {
  /** Identificador estável usado em listas. */
  id: 'github' | 'linkedin' | 'itchio' | 'email'
  /** Rótulo legível (ex.: "GitHub"). */
  label: string
  /** URL completa (ou `mailto:`); `null` enquanto pendente de definição. */
  href: string | null
  /** Texto exibido (ex.: o usuário ou o e-mail). */
  display: string
}

/** Dados pessoais e textos do terminal. */
export type Profile = {
  name: string
  title: string
  /** Mini-bio impressa pelo comando `sobre` e exibida na seção #sobre. */
  bio: string
  /** Respostas irreverentes do easter egg `whoami` (uma é sorteada a cada chamada). */
  whoami: string[]
  social: SocialLink[]
}

/** Um grupo de tecnologias (ex.: "Linguagens"). */
export type SkillCategory = {
  id: string
  label: string
  items: string[]
}

/** Um projeto exibido na seção #projetos. */
export type Project = {
  id: string
  name: string
  description: string
  /** Tecnologias; `null` enquanto pendente de definição. */
  stack: string[] | null
  /** Repositório; `null` enquanto pendente. */
  repoUrl: string | null
  /** Demo/link ao vivo; `null` se não houver ou pendente. */
  demoUrl: string | null
  /** Rótulo do link de demo (ex.: "Ver ao vivo", "Download"). */
  demoLabel?: string
}
