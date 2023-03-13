import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { SearchPostForm } from './styles'

interface SearchFormProps {
  fetchPosts: (query?: string) => Promise<void>
}

const schema = z.object({
  query: z.string(),
})

type SearchFormData = z.infer<typeof schema>

export function SearchForm({ fetchPosts }: SearchFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(schema),
  })

  const handleSearchForm = useCallback(async (data: SearchFormData) => {
    await fetchPosts(data.query)
    reset()
  }, [])

  return (
    <SearchPostForm onSubmit={handleSubmit(handleSearchForm)}>
      <input
        {...register('query')}
        type="text"
        name="query"
        id="search"
        placeholder="Buscar conteúdo"
      />
      <button type="submit" hidden></button>
    </SearchPostForm>
  )
}
