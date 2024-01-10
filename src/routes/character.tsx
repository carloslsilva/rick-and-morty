import { useLoaderData } from 'react-router-dom'
import type {
  Character as CharacterType,
  Episode as EpisodeType
} from '../lib/types'

export default function Character() {
  const results = useLoaderData() as Omit<CharacterType, 'episode'> & {
    episode: EpisodeType[]
  }

  return (
    <div className='container mx-auto px-4'>
      <h1 className='mb-8 text-3xl'>{results.name}</h1>
      <div className='divide-y-2'>
        {results.episode.map(e => (
          <div className='p-2 odd:bg-slate-100' key={e.id}>
            <span>{`${e.episode} - ${e.name}`}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
