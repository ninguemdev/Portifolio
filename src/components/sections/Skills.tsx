import Section from '../layout/Section'
import { skills } from '../../data/skills'

/**
 * Skills como uma "ficha técnica": lista de definição (categoria → tecnologias)
 * em vez de pílulas. As tecnologias são texto mono separado por · — coerente
 * com a direção "Monolito" e sem o visual de tags banido.
 */
export default function Skills() {
  return (
    <Section
      id="skills"
      command="skills"
      title="Skills"
      intro="As tecnologias com que trabalho, organizadas por categoria."
    >
      <dl className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-[12rem_1fr]">
        {skills.map((category) => (
          <div key={category.id} className="contents">
            <dt className="text-heading text-sm font-semibold">
              {category.label}
            </dt>
            <dd className="text-muted font-mono text-sm leading-relaxed">
              {category.items.join('  ·  ')}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
