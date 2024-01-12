import { useLoaderData, useLocation } from 'react-router-dom'
import { Info } from '../lib/types'

export function useInfo() {
  const location = useLocation()
  const { info } = useLoaderData() as { info: Info }

  const getPageFromUrl = (url: string | null) =>
    url ? new URL(url).searchParams.get('page') : null

  const getUrl = (page: string | null) => {
    if (!page) return '#'

    const urlSearchParams = new URLSearchParams(location.search)
    urlSearchParams.set('page', page)

    return location.pathname + '?' + urlSearchParams.toString()
  }

  const next = getUrl(getPageFromUrl(info.next))
  const prev = getUrl(getPageFromUrl(info.prev))

  return { next, prev }
}
