import { useLoaderData } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { useInfo } from '../hooks/useInfo'
import type { Location } from '../lib/types'

export default function Locations() {
  const { results: locations } = useLoaderData() as { results: Location[] }
  const { next, prev } = useInfo()

  return (
    <>
      <Nav next={next} prev={prev} />
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
