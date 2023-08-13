import { TouchableOpacityProps } from 'react-native'
import { ButtonIconType, Container, Icon } from './styles'

type Props = TouchableOpacityProps & {
  type?: ButtonIconType
}
export function ButtonIcon({ type = 'PRIMARY' }: Props) {
  return (
    <Container>
      <Icon name="home" type={type} />
    </Container>
  )
}
