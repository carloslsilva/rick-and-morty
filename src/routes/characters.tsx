import { useLoaderData } from 'react-router-dom'
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { HomeLink } from '../components/HomeLink'
import { Nav } from '../components/Nav'
import { SearchForm } from '../components/SearchForm'
import { useInfo } from '../hooks/useInfo'
import type { Character } from '../lib/types'

export default function Characters() {
  const { results: characters } = useLoaderData() as { results: Character[] }
  const { next, prev } = useInfo()

  return (
    <>
      <Container
        className='flex flex-col gap-8 py-16 sm:flex-row sm:items-center sm:justify-between'
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
