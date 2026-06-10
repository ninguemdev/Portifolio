import Section from '../layout/Section'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projetos() {
  return (
    <Section
      id="projetos"
      command="projetos"
      title="Projetos"
      intro="Uma seleção do que venho construindo — da web a games."
    >
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
