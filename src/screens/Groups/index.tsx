import { Button, GroupCard, Header, Highlight, ListEmpty } from '@/components'
import { Container } from './styles'
import { FlatList } from 'react-native'
import { useState } from 'react'

export function Groups() {
  const [groups, setGroups] = useState<Array<string>>([])

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button title="Criar nova turma" />
    </Container>
  )
}
