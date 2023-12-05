import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Aside } from './Aside'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout: FC = () => (
  <>
    <div className='flex min-h-screen flex-col'>
      <Header />
      <div className='grid flex-grow grid-cols-12'>
        <Aside className='col-start-1 col-end-3' />
        <main className='col-start-3 col-end-13'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  </>
)
