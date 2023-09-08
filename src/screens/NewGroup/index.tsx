import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Header, Highlight, Input } from '@/components'
import { Container, Content, Icon } from './styles'
import { groupCreate } from '@/storage'

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  async function handleNew() {
    try {
      await groupCreate(group)
      navigation.navigate('players', { group })
    } catch (error) {
      console.error(error)
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
