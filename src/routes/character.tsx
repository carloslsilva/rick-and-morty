import { useLoaderData } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import type { CharacterResponse } from '../lib/types'

export default function Character() {
  const response = useLoaderData() as CharacterResponse
  return (
    <Container variant='long'>
      <div className='divide-y-2'>
        {response.episodes.map(episode => (
          <div className='p-2 odd:bg-slate-100' key={episode.id}>
            <span>{`${episode.episode} - ${episode.name}`}</span>
          </div>
        ))}
      </div>
    </Container>
  )
}
