import { useLoaderData } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { useInfo } from '../hooks/useInfo'
import type { Character } from '../lib/types'

export default function Characters() {
  const { results: characters } = useLoaderData() as { results: Character[] }
  const { next, prev } = useInfo()

  return (
    <>
      <Nav next={next} prev={prev} />
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
