import { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  next: string | null
  prev: string | null
}

export const Nav: FC<Props> = ({ next, prev }) => (
  <div>
    {prev && <Link to={prev}>Prev</Link>}
    {next && <Link to={next}>Next</Link>}
  </div>
)
