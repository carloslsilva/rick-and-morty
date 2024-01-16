import { useSearch } from '../hooks/useSearch'

export const Search = () => {
  const { handleChange, handleKey } = useSearch()

  return (
    <form className='flex flex-col gap-2 sm:flex-row' onKeyDown={handleKey}>
      <input
        className='flex-grow rounded-lg bg-primary-200 px-4 py-2 text-primary-500 outline-none focus:bg-primary-100'
        placeholder='Search by name...'
        autoComplete='off'
        onChange={e => handleChange('name', e)}
      />
      <select
        className='appearance-none rounded-lg bg-primary-200 px-4 py-2 text-primary-500 outline-none hover:bg-primary-300'
        onChange={e => handleChange('status', e)}
      >
        <option value=''>Status...</option>
        <option value='alive'>Alive</option>
        <option value='dead'>Dead</option>
        <option value='unknown'>Unknown</option>
      </select>
      <select
        className='appearance-none rounded-lg bg-primary-200 px-4 py-2 text-primary-500 outline-none hover:bg-primary-300'
        onChange={e => handleChange('gender', e)}
      >
        <option value=''>Gender...</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
        <option value='genderless'>Genderless</option>
        <option value='unknown'>Unknown</option>
      </select>
    </form>
  )
}
