import type { LoaderFunctionArgs } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import { Nav } from '../components/Nav'
import type { Character, Info } from '../lib/types'

export async function loader({ request }: LoaderFunctionArgs) {
  const fetchUrl = new URL('https://rickandmortyapi.com/api/character')
  const filterParams = ['page', 'name', 'gender', 'status']
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

export default function Characters() {
  const { results: characters, info } = useLoaderData() as {
    results: Character[]
    info: Info
  }

  return (
    <>
      <Nav info={info} />
      <h1 className='mb-8 text-3xl font-bold'>Characters</h1>
      <div className='divide-y-2'>
        {characters.map(character => (
          <div key={character.id}>
            <h2 className='text-xl font-semibold'>{character.name}</h2>
            <h3>
              {character.status} | {character.gender}
            </h3>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </div>
    </>
  )
}
