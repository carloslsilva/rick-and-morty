export async function getData(
  url: string,
  endpoint: string,
  filterParams: string[]
) {
  const fetchUrl = new URL(`https://rickandmortyapi.com/api/${endpoint}`)
  const requestParams = new URL(url).searchParams
  filterParams.forEach(filterParam => {
    const value = requestParams.get(filterParam)
    if (value) fetchUrl.searchParams.set(filterParam, value)
  })

  const response = await fetch(fetchUrl)
  const data = await response.json()
  if (!response.ok) throw new Error(data.error)

  return data
}
