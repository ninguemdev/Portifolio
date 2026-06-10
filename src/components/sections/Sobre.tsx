import Section from '../layout/Section'
import { profile } from '../../data/profile'

export default function Sobre() {
  return (
    <Section id="sobre" command="sobre" title="Sobre">
      <p className="text-text max-w-prose text-lg leading-relaxed">
        {profile.bio}
      </p>
    </Section>
  )
}
