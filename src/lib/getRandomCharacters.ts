export async function getRandomChars(quantity: number) {
  const response = await fetch('https://rickandmortyapi.com/api/character/')
  if (!response.ok) return []
  const data = await response.json()

  const count = data.info.count
  const randomIds = []
  for (let i = 0; i < quantity; i++) {
    randomIds.push(Math.floor(Math.random() * count) + 1)
  }

  const randomCharacters = Promise.all(
    randomIds.map(async id => await getCharacterById(id))
  )

  return randomCharacters
}

async function getCharacterById(id: number) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  )
  if (!response.ok) return null
  const data = await response.json()
  return data
}
