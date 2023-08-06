import { TouchableOpacity } from 'react-native'
import { Container, Icon, Title } from './styles'

type Props = {
  title: string
}

export function GroupCard({ title }: Props) {
  return (
    <TouchableOpacity>
      <Container>
        <Icon />
        <Title>{title}</Title>
      </Container>
    </TouchableOpacity>
  )
}
