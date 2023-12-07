import { useLoaderData } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { useInfo } from '../hooks/useInfo'
import type { Episode } from '../lib/types'

export default function Episodes() {
  const { results: episodes } = useLoaderData() as { results: Episode[] }
  const { next, prev } = useInfo()

  return (
    <>
      <Nav next={next} prev={prev} />
      <h1 className='mb-8 text-3xl font-bold'>Episodes</h1>
      <div className='divide-y-2'>
        {episodes.map(episode => (
          <div key={episode.id}>
            <h2 className='text-xl font-semibold'>{episode.name}</h2>
            <h3>
              {episode.air_date} | {episode.episode}
            </h3>
          </div>
        ))}
      </div>
    </>
  )
}
