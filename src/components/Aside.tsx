import clsx from 'clsx'
import { FC } from 'react'
import { NavLink as Link } from 'react-router-dom'
import { routes } from '../lib/routes'
import { Route } from '../lib/types'

type AsideProps = {
  className?: string
}

export const Aside: FC<AsideProps> = ({ className }) => (
  <aside className={clsx('bg-amber-100', className)}>
    <nav>
      <ul>
        {routes.map(route => (
          <li key={route.path}>
            <NavLink route={route} />
          </li>
        ))}
      </ul>
    </nav>
  </aside>
)

type NavLinkProps = {
  route: Route
}

const NavLink: FC<NavLinkProps> = ({ route }) => (
  <Link
    className={({ isActive, isPending }) =>
      clsx(isActive && 'font-semibold', isPending && 'italic')
    }
    to={route.path}
  >
    {route.label}
  </Link>
)
