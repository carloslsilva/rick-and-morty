import type { ChangeEvent, KeyboardEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDebouncedCallback } from 'use-debounce'

export function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChange = useDebouncedCallback(
    (
      key: 'name' | 'status' | 'gender',
      event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      const params = new URLSearchParams(searchParams)
      const value = event.target.value

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

  return { handleChange, handleKey }
}
