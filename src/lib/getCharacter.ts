import type { CharacterResponse } from './types'

export async function getCharacter(id: number): Promise<CharacterResponse> {
  const characterData = await fetchCharacter(id)

  const episodesData = await Promise.all(
    characterData.episode.map(async (e: string) => await fetchEpisode(e))
  )

  return { ...characterData, episode: episodesData }
}

async function fetchCharacter(id: number) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  )
  const data = await response.json()
  if (!response.ok) throw new Error(data.error)
  return data
}

async function fetchEpisode(url: string) {
  const response = await fetch(url)
  const data = await response.json()
  if (!response.ok) throw new Error(data.error)
  return data
}
