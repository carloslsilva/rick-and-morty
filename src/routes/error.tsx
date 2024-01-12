import { Link, useNavigate } from 'react-router-dom'

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <>
      <div className='flex h-screen flex-col items-center justify-center bg-primary-800 text-primary-100'>
        <h1 className='mb-4 text-4xl font-bold text-amber-500'>Error</h1>
        <p>Sorry, the page/resource you're looking for doesn't exist.</p>
        <div className='mt-4 flex flex-col items-center justify-center gap-1'>
          <p>You might want to go to</p>
          <div className='flex flex-row gap-4'>
            <Link to='/' className='text-primary-400 hover:text-amber-500'>
              Home
            </Link>
            <button
              className='text-primary-400 hover:text-amber-500'
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
