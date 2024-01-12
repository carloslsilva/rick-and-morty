import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSearchForm } from '../../hooks/useSearchForm'

export const SearchForm = () => {
  const { onSubmit, onReset, register } = useSearchForm()

  return (
    <form className='flex flex-row' onSubmit={onSubmit}>
      <input
        className='flex-grow rounded-l-lg bg-primary-200 px-4 py-2 text-primary-500 outline-none focus:bg-primary-100'
        placeholder='Search by name...'
        autoComplete='off'
        {...register('name')}
      />
      <select
        className='appearance-none bg-primary-200 p-2 text-primary-600 outline-none hover:bg-primary-300'
        {...register('status')}
      >
        <option className='' value=''>
          Status...
        </option>
        <option className='' value='alive'>
          Alive
        </option>
        <option className='' value='dead'>
          Dead
        </option>
        <option className='' value='unknown'>
          Unknown
        </option>
      </select>
      <select
        className='appearance-none bg-primary-200 p-2 text-primary-600 outline-none hover:bg-primary-300'
        {...register('gender')}
      >
        <option className='' value=''>
          Gender...
        </option>
        <option className='' value='male'>
          Male
        </option>
        <option className='' value='female'>
          Female
        </option>
        <option className='' value='genderless'>
          Genderless
        </option>
        <option className='' value='unknown'>
          Unknown
        </option>
      </select>
      <button
        className='inline-flex w-12 items-center justify-center bg-red-700 text-primary-100 hover:bg-red-800'
        onClick={onReset}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <button
        className='inline-flex w-12 items-center justify-center rounded-r-lg bg-amber-500 text-primary-100 hover:bg-amber-600'
        type='submit'
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  )
}
