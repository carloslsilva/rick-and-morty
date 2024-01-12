import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const BackButton: FC = () => {
  const navigate = useNavigate()
  return (
    <button
      className='rounded-lg bg-amber-500 px-8 py-2 font-semibold'
      onClick={() => navigate(-1)}
    >
      Go back
    </button>
  )
}
