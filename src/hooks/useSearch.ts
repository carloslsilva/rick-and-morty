import { zodResolver } from '@hookform/resolvers/zod'
import type { KeyboardEvent } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { z } from 'zod'

const Schema = z.object({
  name: z.string(),
  gender: z.enum(['', 'male', 'female', 'genderless', 'unknown']),
  status: z.enum(['', 'alive', 'dead', 'unknown'])
})

type SearchType = z.infer<typeof Schema>

export function useSearch() {
  const location = useLocation()
  const navigate = useNavigate()
  const { handleSubmit, reset, register } = useForm<SearchType>({
    resolver: zodResolver(Schema),
    defaultValues: { name: '', gender: '', status: '' }
  })

  const onSubmit = handleSubmit(data => {
    let url = location.pathname

    for (const [key, value] of Object.entries(data)) {
      if (value.length > 0) {
        url += url === '/characters' ? `?${key}=${value}` : `&${key}=${value}`
      }
    }

    navigate(url)
  })

  const onKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') e.preventDefault()
  }

  const onReset = () => reset()

  return { onSubmit, onReset, onKeyDown, register }
}
