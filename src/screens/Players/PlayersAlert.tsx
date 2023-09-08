import { Alert } from 'react-native'

export function PlayersAlert(message: string) {
  return Alert.alert('Nova pessoa', message)
}
