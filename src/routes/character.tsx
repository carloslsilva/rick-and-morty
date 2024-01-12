import { useLoaderData } from 'react-router-dom'
import { BackButton } from '../components/BackButton'
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { HomeLink } from '../components/HomeLink'
import type { CharacterResponse } from '../lib/types'

export default function Character() {
  const response = useLoaderData() as CharacterResponse
  return (
    <>
      <Container
        className='flex flex-col gap-8 py-16 sm:flex-row sm:items-center sm:justify-between'
        variant='long'
        as='header'
      >
        <HomeLink>Rick & Morty</HomeLink>
        <BackButton />
      </Container>
      <Container variant='long' as='main'>
        <Card character={response.character} />
      </Container>
      <Container className='py-16' variant='long' as='section'>
        {response.episodes.map(episode => (
          <div
            className='px-4 py-2 first:rounded-t-lg last:rounded-b-lg odd:bg-primary-700 odd:text-primary-400 even:bg-primary-400 even:text-primary-700'
            key={episode.id}
          >
            <span>{`${episode.episode} - ${episode.name}`}</span>
          </div>
        ))}
      </Container>
    </>
  )
}
