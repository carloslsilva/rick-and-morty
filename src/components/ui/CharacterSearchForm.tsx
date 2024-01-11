import { useCharacterSearchForm } from '../../hooks/useCharacterSearchForm'

export const CharacterSearchForm = () => {
  const { onSubmit, onReset, register } = useCharacterSearchForm()

  return (
    <form onSubmit={onSubmit} className='flex flex-col space-y-4 py-8'>
      <label className='flex flex-col space-y-1'>
        <span>Name:</span>
        <input
          className='rounded border border-gray-300 p-2'
          placeholder='Input a name...'
          autoComplete='off'
          {...register('name')}
        />
      </label>
      <label className='flex flex-col space-y-1'>
        <span>Gender:</span>
        <select
          {...register('gender')}
          className='rounded border border-gray-300 p-2'
        >
          <option value=''>Select ...</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='genderless'>Genderless</option>
          <option value='unknown'>Unknown</option>
        </select>
      </label>
      <label className='flex flex-col space-y-1'>
        <span>Status:</span>
        <select
          {...register('status')}
          className='rounded border border-gray-300 p-2'
        >
          <option value=''>Select ...</option>
          <option value='alive'>Alive</option>
          <option value='dead'>Dead</option>
          <option value='unknown'>Unknown</option>
        </select>
      </label>
      <button
        className='rounded bg-amber-500 py-2 text-primary-100'
        type='submit'
      >
        Search
      </button>
      <button
        className='rounded bg-red-600 py-2 text-primary-100'
        onClick={onReset}
      >
        Clear Fields
      </button>
    </form>
  )
}
