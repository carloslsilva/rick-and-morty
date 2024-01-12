import { FC } from 'react'
import { Link } from 'react-router-dom'
import { getCharacterUrl } from '../lib/getCharacterUrl'
import type { Character } from '../lib/types'

type CardProps = {
  character: Character
  link?: boolean
}

export const Card: FC<CardProps> = ({ character, link }) => {
  return link ? (
    <Link
      className='group hover:scale-105'
      to={getCharacterUrl(character.url) || '#'}
    >
      <Character character={character} />
    </Link>
  ) : (
    <Character character={character} />
  )
}

type CharacterProps = {
  character: Character
}

const Character: FC<CharacterProps> = ({ character }) => (
  <div className='flex flex-col justify-center gap-4 rounded-lg bg-primary-700 md:flex-row md:items-center md:justify-start'>
    <img
      className='h-full w-full rounded-t-lg object-cover md:w-48 md:rounded-none md:rounded-s-lg'
      src={character.image}
      alt={character.name}
    />
    <div className='flex flex-col px-4 pb-4 md:p-0'>
      <Description character={character} />
      <Location label='Last known location:' name={character.location.name} />
      <Location label='First seen in:' name={character.origin.name} />
    </div>
  </div>
)

const Description: FC<CharacterProps> = ({ character }) => (
  <div className='mb-2'>
    <h2 className='text-xl font-bold tracking-tight text-primary-100 group-hover:text-amber-500 md:text-2xl'>
      {character.name}
    </h2>
    <h3 className='text-bold inline-flex items-center gap-2 text-primary-100'>
      <>
        {character.status === 'Alive' && (
          <span className='h-3 w-3 rounded-full bg-green-600' />
        )}
        {character.status === 'Dead' && (
          <span className='h-3 w-3 rounded-full bg-red-600' />
        )}
        {character.status === 'unknown' && (
          <span className='h-3 w-3 rounded-full bg-gray-400' />
        )}
      </>
      <span>{`${character.status} - ${character.species}`}</span>
    </h3>
  </div>
)

type LocationProps = {
  label: string
  name: string
}

const Location: FC<LocationProps> = ({ label, name }) => (
  <div className='flex flex-col text-sm'>
    <span className='text-primary-400'>{label}</span>
    <span className='text-primary-100'>{name}</span>
  </div>
)
