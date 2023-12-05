import type { LoaderFunctionArgs } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import { Nav } from '../components/Nav'
import type { Episode, Info } from '../lib/types'

export async function loader({ request }: LoaderFunctionArgs) {
  const fetchUrl = new URL('https://rickandmortyapi.com/api/episode')
  const filterParams = ['page', 'name', 'episode']
  const requestParams = new URL(request.url).searchParams
  filterParams.forEach(param => {
    const value = requestParams.get(param)
    if (value) fetchUrl.searchParams.set(param, value)
  })

  const response = await fetch(fetchUrl)
  const data = await response.json()
  if (!response.ok) throw new Error(data.error)
  console.log(data)
  return data
}

export default function Episodes() {
  const { results: episodes, info } = useLoaderData() as {
    results: Episode[]
    info: Info
  }

  return (
    <>
      <Nav info={info} />
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
