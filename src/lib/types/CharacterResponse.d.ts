import type { Character, Episode } from '.'

export type CharacterResponse = Omit<Character, 'episode'> & {
  episode: Episode[]
}
