import clsx from 'clsx'
import { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  next: string
  prev: string
}

export const Nav: FC<Props> = ({ next, prev }) => {
  return (
    <div>
      <Link
        className={clsx(
          'rounded-l-lg bg-amber-500 px-8 py-2 font-semibold',
          prev !== '#' && 'hover:bg-amber-600',
          prev === '#' && 'cursor-default bg-primary-700 text-primary-500'
        )}
        to={prev}
      >
        Prev
      </Link>

      <Link
        className={clsx(
          'rounded-r-lg bg-amber-500 px-8 py-2 font-semibold',
          next !== '#' && 'hover:bg-amber-600',
          next === '#' && 'cursor-default bg-primary-700 text-primary-500'
        )}
        to={next}
      >
        Next
      </Link>
    </div>
  )
}
