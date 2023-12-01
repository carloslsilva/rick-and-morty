import { Outlet } from 'react-router-dom'
import { Aside } from '../components/Aside'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export default function Root() {
  return (
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
}
