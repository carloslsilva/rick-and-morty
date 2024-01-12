import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export const Layout: FC = () => (
  <div className='flex min-h-screen flex-col bg-primary-800 text-primary-100'>
    <div className='flex-grow'>
      <Outlet />
    </div>
    <Footer />
  </div>
)
