import { GroupCard, Header, Highlight } from '@/components'
import { Container } from './styles'
import { FlatList } from 'react-native'
import { useState } from 'react'

export function Groups() {
  const [groups, setGroups] = useState<Array<string>>(['Galerinha do bem'])

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  )
}
