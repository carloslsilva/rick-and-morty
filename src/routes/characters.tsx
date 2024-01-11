import { useLoaderData } from 'react-router-dom'
import { CharacterCard } from '../components/ui/CharacterCard'
import { CharacterSearchForm } from '../components/ui/CharacterSearchForm'
import { Nav } from '../components/ui/Nav'
import { useInfo } from '../hooks/useInfo'
import type { Character } from '../lib/types'

export default function Characters() {
  const { results: characters } = useLoaderData() as { results: Character[] }
  const { next, prev } = useInfo()
  return (
    <main className='bg-primary-800'>
      <div className='container mx-auto px-8'>
        <Nav next={next} prev={prev} />
        <CharacterSearchForm />
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
          {characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </main>
  )
}
