import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { z } from 'zod'

const CharacterSearchFormSchema = z.object({
  name: z.string(),
  gender: z.enum(['', 'male', 'female', 'genderless', 'unknown']),
  status: z.enum(['', 'alive', 'dead', 'unknown'])
})

type CharacterSearch = z.infer<typeof CharacterSearchFormSchema>

export function useCharacterSearchForm() {
  const location = useLocation()
  const navigate = useNavigate()
  const { handleSubmit, reset, register } = useForm<CharacterSearch>({
    resolver: zodResolver(CharacterSearchFormSchema),
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

  const onReset = () => reset()

  return { onSubmit, onReset, register }
}
