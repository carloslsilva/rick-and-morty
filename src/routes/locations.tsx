import type { LoaderFunctionArgs } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import { Nav } from '../components/Nav'
import type { Info, Location } from '../lib/types'

export async function loader({ request }: LoaderFunctionArgs) {
  const fetchUrl = new URL('https://rickandmortyapi.com/api/location')
  const filterParams = ['page', 'name', 'type', 'dimension']
  const requestParams = new URL(request.url).searchParams
  filterParams.forEach(param => {
    const value = requestParams.get(param)
    if (value) fetchUrl.searchParams.set(param, value)
  })

  const response = await fetch(fetchUrl)
  const data = await response.json()
  if (!response.ok) throw new Error(data.error)

  return data
}

export default function Locations() {
  const { results: locations, info } = useLoaderData() as {
    results: Location[]
    info: Info
  }

  return (
    <>
      <Nav info={info} />
      <h1 className='mb-8 text-3xl font-bold'>Locations</h1>
      <div className='divide-y-2'>
        {locations.map(location => (
          <div key={location.id}>
            <h2 className='text-xl font-semibold'>{location.name}</h2>
            <h3>
              {location.type} | {location.dimension}
            </h3>
          </div>
        ))}
      </div>
    </>
  )
}
