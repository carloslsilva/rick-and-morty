import { LoaderFunctionArgs } from 'react-router-dom'
import { getData } from './lib/getData'

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
