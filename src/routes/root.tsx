import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLoaderData } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import { Character } from '../lib/types'

export default function Root() {
  const characters = useLoaderData() as Character[]
  return (
    <>
      <Container
        className='flex items-center justify-center py-48'
        variant='long'
        as='main'
        light
      >
        <h1 className='text-9xl font-bold'>Rick & Morty</h1>
      </Container>
      <Container className='pb-8 pt-24' variant='long' as='section'>
        <div className='grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2 xl:grid-cols-3'>
          {characters.map(character => (
            <Card key={character.id} character={character} link />
          ))}
        </div>
      </Container>
      <Container
        className='flex items-center justify-end py-4'
        variant='long'
        as='header'
      >
        <Link
          className='flex items-center justify-center gap-2 hover:text-amber-500 active:animate-ping'
          to='/characters'
        >
          <span>Explore all</span>
          <FontAwesomeIcon icon={faSearch} size='lg' />
        </Link>
      </Container>
    </>
  )
}
