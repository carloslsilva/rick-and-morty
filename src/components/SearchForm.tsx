import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { useSearchForm } from '../hooks/useSearchForm'

export const SearchForm = () => {
  const { onSubmit, onReset, register } = useSearchForm()

  return (
    <form className={clsx('flex flex-col', 'sm:flex-row')} onSubmit={onSubmit}>
      <input
        className='flex-grow rounded-t-lg bg-primary-200 px-4 py-2 text-primary-500 outline-none focus:bg-primary-100 sm:rounded-none sm:rounded-l-lg'
        placeholder='Search by name...'
        autoComplete='off'
        {...register('name')}
      />
      <select
        className='appearance-none bg-primary-200 p-2 text-primary-500 outline-none hover:bg-primary-300'
        {...register('status')}
      >
        <option value=''>Status...</option>
        <option value='alive'>Alive</option>
        <option value='dead'>Dead</option>
        <option value='unknown'>Unknown</option>
      </select>
      <select
        className='appearance-none bg-primary-200 p-2 text-primary-500 outline-none hover:bg-primary-300'
        {...register('gender')}
      >
        <option value=''>Gender...</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
        <option value='genderless'>Genderless</option>
        <option value='unknown'>Unknown</option>
      </select>
      <button
        className='h-8 bg-red-700 text-primary-100 hover:bg-red-800 sm:h-auto sm:w-12'
        onClick={onReset}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <button
        className='h-8 rounded-b-lg bg-amber-500 text-primary-100 hover:bg-amber-600 sm:h-auto sm:w-12 sm:rounded-none sm:rounded-r-lg'
        type='submit'
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  )
}
