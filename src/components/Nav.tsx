import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Info } from '../lib/types'

type Props = {
  info: Info
}

export const Nav: FC<Props> = ({ info }) => {
  const location = useLocation()

  const getPage = (url: string | null) => {
    if (!url) return null
    return new URL(url).searchParams.get('page')
  }

  const n = getPage(info.next)
  const p = getPage(info.prev)

  const updatePage = (page: string | null) => {
    if (!page) return location.pathname
    const urlSearchParams = new URLSearchParams(location.search)
    urlSearchParams.set('page', page)
    return location.pathname + '?' + urlSearchParams.toString()
  }

  return (
    <div>
      {p && <Link to={updatePage(p)}>Prev</Link>}
      {n && <Link to={updatePage(n)}>Next</Link>}
    </div>
  )
}
