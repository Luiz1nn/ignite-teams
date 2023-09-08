import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { groupCreate } from '@/storage'
import { AppError } from '@/utils'
import { AlertError } from './AlertError'
import { Button, Header, Highlight, Input } from '@/components'
import { Container, Content, Icon } from './styles'

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        return AlertError('Informe o nome da turma')
      }
      await groupCreate(group)
      navigation.navigate('players', { group })
    } catch (error) {
      if (error instanceof AppError) {
        AlertError(error.message)
      } else {
        AlertError('Não foi possível criar um novo grupo.')
        console.error(error)
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie uma turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  )
}
