export function getCharacterUrl(url: string) {
  const match = url.match(/\/(\d+)$/)
  const number = match ? match[1] : null
  return number ? `/characters/${number}` : '#'
}
