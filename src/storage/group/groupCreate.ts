import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppError } from '@/utils'
import { groupsGetAll } from './groupsGetAll'
import { GROUP_COLLECTION } from '../storageConfig'

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll()

    const groupAlreadyExists = storedGroups.includes(newGroup)

    if (groupAlreadyExists) {
      throw new AppError('Já existe um grupo cadastro com esse nome.')
    }

    const storage = JSON.stringify([...storedGroups, newGroup])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
