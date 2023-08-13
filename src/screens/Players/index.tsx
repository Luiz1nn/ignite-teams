import { ButtonIcon, Filter, Header, Highlight, Input } from '@/components'
import { Container, Form, HeaderList, NumberOfPlayers } from './styles'
import { FlatList } from 'react-native'
import { useState } from 'react'

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState(['Luis', 'Fernando'])

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
    </Container>
  )
}
