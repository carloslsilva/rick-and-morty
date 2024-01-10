import { useLoaderData } from 'react-router-dom'
import { Nav } from '../components/ui/Nav'
import type { Location } from '../lib/types'

export default function Locations() {
  const { results: locations } = useLoaderData() as { results: Location[] }

  return (
    <>
      <Nav />
      <h1 className='mb-8 text-3xl font-bold'>Locations</h1>
      <div className='divide-y-2'>
        {locations.map(location => (
          <div key={location.id}>
            <h2 className='text-xl font-semibold'>{location.name}</h2>
            <h3>
              {location.type} | {location.dimension}
            </h3>
            <p>{location.residents[0]}</p>
          </div>
        ))}
      </div>
    </>
  )
}
