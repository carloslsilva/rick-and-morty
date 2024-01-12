import { useLoaderData } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import { HomeLink } from '../components/ui/HomeLink'
import { Nav } from '../components/ui/Nav'
import { SearchForm } from '../components/ui/SearchForm'
import { useInfo } from '../hooks/useInfo'
import type { Character } from '../lib/types'

export default function Characters() {
  const { results: characters } = useLoaderData() as { results: Character[] }
  const { next, prev } = useInfo()

  return (
    <>
      <Container
        className='flex flex-row items-center justify-between py-16'
        variant='long'
        as='header'
      >
        <HomeLink>Rick & Morty</HomeLink>
        <Nav next={next} prev={prev} />
      </Container>
      <Container variant='long' as='section'>
        <SearchForm />
        <div className='grid grid-cols-1 gap-8 py-8 lg:grid-cols-2 xl:grid-cols-3'>
          {characters.map(character => (
            <Card key={character.id} character={character} link />
          ))}
        </div>
      </Container>
    </>
  )
}
