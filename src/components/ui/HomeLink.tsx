import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: ReactNode
}
export const HomeLink: FC<Props> = ({ children }) => (
  <Link to='/'>
    <h1 className='text-5xl font-bold leading-none tracking-tight text-primary-300 hover:text-amber-500'>
      {children}
    </h1>
  </Link>
)
