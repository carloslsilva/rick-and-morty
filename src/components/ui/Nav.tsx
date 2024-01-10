import { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  next: string
  prev: string
}

export const Nav: FC<Props> = ({ next, prev }) => (
  <div className='text-primary-100'>
    {prev && <Link to={prev}>Prev</Link>}
    {next && <Link to={next}>Next</Link>}
  </div>
)
