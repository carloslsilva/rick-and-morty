import { zodResolver } from '@hookform/resolvers/zod'
import type { ChangeEvent, KeyboardEvent } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { useDebouncedCallback } from 'use-debounce'
import { z } from 'zod'

const Schema = z.object({
  name: z.string(),
  gender: z.enum(['', 'male', 'female', 'genderless', 'unknown']),
  status: z.enum(['', 'alive', 'dead', 'unknown'])
})

type SearchType = z.infer<typeof Schema>

export function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { setValue, register } = useForm<SearchType>({
    resolver: zodResolver(Schema),
    defaultValues: { name: '', gender: '', status: '' }
  })

  useEffect(() => {
    const keys: ('name' | 'gender' | 'status')[] = ['name', 'status', 'gender']
    const params = new URLSearchParams(searchParams)
    keys.map(key => {
      const value = params.get(key)
      if (value) setValue(key, value)
    })
  }, [searchParams, setValue])

  const handleChange = useDebouncedCallback(
    (
      key: 'name' | 'status' | 'gender',
      event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      const params = new URLSearchParams(searchParams)
      const value = event.target.value

      params.set('page', '1')

      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }

      setSearchParams(params)
    },
    500
  )

  const handleKey = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') e.preventDefault()
  }

  return { register, handleChange, handleKey }
}
