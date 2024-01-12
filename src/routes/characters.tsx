import { useLoaderData } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import { Nav } from '../components/ui/Nav'
import { SearchForm } from '../components/ui/SearchForm'
import { useInfo } from '../hooks/useInfo'
import type { Character } from '../lib/types'

export default function Characters() {
  const { results: characters } = useLoaderData() as { results: Character[] }
  const { next, prev } = useInfo()
  return (
    <Container variant='long' as='main'>
      <SearchForm />
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
        {characters.map(character => (
          <Card key={character.id} character={character} />
        ))}
      </div>
      <Nav next={next} prev={prev} />
    </Container>
  )
}
