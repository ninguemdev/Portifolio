import type { Project } from '../../types/content'

/**
 * Cartão de um projeto. Stack e links só aparecem quando definidos — pendências
 * [EDITAR] (campos `null`) degradam para "links em breve", sem buracos no layout.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const hasLinks = project.repoUrl !== null || project.demoUrl !== null

  return (
    <article className="border-border bg-surface hover:border-accent flex h-full flex-col rounded-md border p-6 transition-[transform,border-color] duration-200 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <h3 className="text-heading text-xl tracking-tight">{project.name}</h3>

      <p className="text-muted mt-3 flex-1 leading-relaxed">
        {project.description}
      </p>

      {project.stack && (
        <p className="text-text/80 mt-4 font-mono text-xs">
          {project.stack.join('  ·  ')}
        </p>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-x-5">
        {project.repoUrl && (
          <ProjectLink href={project.repoUrl}>código</ProjectLink>
        )}
        {project.demoUrl && (
          <ProjectLink href={project.demoUrl}>
            {project.demoLabel ?? 'ver ao vivo'}
          </ProjectLink>
        )}
        {!hasLinks && (
          <span className="text-muted font-mono text-xs">links em breve</span>
        )}
      </div>
    </article>
  )
}

function ProjectLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="text-accent inline-flex min-h-11 items-center gap-1 font-mono text-sm hover:underline"
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  )
}
