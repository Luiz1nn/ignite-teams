import { Header, Highlight } from '@/components'
import { Container } from './styles'

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
    </Container>
  )
}
