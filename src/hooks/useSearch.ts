import { zodResolver } from '@hookform/resolvers/zod'
import type { KeyboardEvent } from 'react'
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
  const { setValue, watch, register } = useForm<SearchType>({
    resolver: zodResolver(Schema),
    defaultValues: { name: '', gender: '', status: '' }
  })

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    const keys: ('name' | 'gender' | 'status')[] = ['name', 'status', 'gender']
    keys.map(key => {
      const value = params.get(key)
      if (value) setValue(key, value)
    })
  }, [searchParams, setValue])

  const debouncedCallback = useDebouncedCallback(
    (data: { [key: string]: string }) => {
      const params = new URLSearchParams(searchParams)
      params.set('page', '1')
      for (const [key, value] of Object.entries(data)) {
        if (value) {
          params.set(key, value)
        } else {
          params.delete(key)
        }
      }
      setSearchParams(params)
    },
    300
  )

  useEffect(() => {
    const subscription = watch(data => {
      debouncedCallback(data)
    })
    return () => subscription.unsubscribe()
  }, [debouncedCallback, watch])

  const handleKey = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') e.preventDefault()
  }

  return { register, handleKey }
}
