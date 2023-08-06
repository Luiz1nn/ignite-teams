import { TouchableOpacityProps } from 'react-native'
import { ButtonType, Container, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  type?: ButtonType
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
