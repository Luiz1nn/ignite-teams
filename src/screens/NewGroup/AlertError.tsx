import { Alert } from 'react-native'

export function AlertError(message: string) {
  return Alert.alert('Novo Grupo', message)
}
