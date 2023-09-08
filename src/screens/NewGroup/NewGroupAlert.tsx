import { Alert } from 'react-native'

export function NewGroupAlert(message: string) {
  return Alert.alert('Novo Grupo', message)
}
