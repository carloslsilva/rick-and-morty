import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCharacterSearchForm } from '../../hooks/useCharacterSearchForm'

export const CharacterSearchForm = () => {
  const { onSubmit, onReset, register } = useCharacterSearchForm()

  return (
    <form className='flex flex-row py-12' onSubmit={onSubmit}>
      <input
        className='flex-grow rounded-l-lg bg-primary-100 px-4 py-2 text-primary-500 outline-none '
        placeholder='Search by name...'
        autoComplete='off'
        {...register('name')}
      />
      <select
        className='appearance-none bg-primary-100 p-2 text-primary-600 outline-none hover:bg-primary-200'
        {...register('status')}
      >
        <option className='hover:bg-primary-400' value=''>
          Status...
        </option>
        <option className='hover:bg-primary-400' value='alive'>
          Alive
        </option>
        <option className='hover:bg-primary-400' value='dead'>
          Dead
        </option>
        <option className='hover:bg-primary-400' value='unknown'>
          Unknown
        </option>
      </select>
      <select
        className='appearance-none bg-primary-100 p-2 text-primary-600 outline-none hover:bg-primary-200'
        {...register('gender')}
      >
        <option className='hover:bg-primary-400' value=''>
          Gender...
        </option>
        <option className='hover:bg-primary-400' value='male'>
          Male
        </option>
        <option className='hover:bg-primary-400' value='female'>
          Female
        </option>
        <option className='hover:bg-primary-400' value='genderless'>
          Genderless
        </option>
        <option className='hover:bg-primary-400' value='unknown'>
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
