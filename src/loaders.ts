import { LoaderFunctionArgs } from 'react-router-dom'
import { getCharacter } from './lib/getCharacter'
import { getData } from './lib/getData'
import { getRandomChars } from './lib/getRandomCharacters'

export async function rootLoader() {
  const data = await getRandomChars(6)

  return data
}

export async function charactersLoader({ request }: LoaderFunctionArgs) {
  const data = await getData(request.url, 'character', [
    'page',
    'name',
    'gender',
    'status'
  ])

  return data
}

export async function episodesLoader({ request }: LoaderFunctionArgs) {
  const data = await getData(request.url, 'episode', [
    'page',
    'name',
    'episode'
  ])

  return data
}

export async function locationsLoader({ request }: LoaderFunctionArgs) {
  const data = await getData(request.url, 'location', [
    'page',
    'name',
    'type',
    'dimension'
  ])

  return data
}

export async function characterLoader({ params }: LoaderFunctionArgs) {
  const data = await getCharacter(Number(params.id!))

  return data
}
