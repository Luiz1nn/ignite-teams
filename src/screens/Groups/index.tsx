import { GroupCard, Header, Highlight } from '@/components'
import { Container } from './styles'

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com sua turma" />
      <GroupCard title="Galera do Ignite" />
    </Container>
  )
}
