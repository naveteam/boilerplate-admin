import { useState } from 'react'
import useSWR from 'swr'

import { User } from './userTypes'

interface UsersResponse {
  page: number
  pageCount: number
  results: User[]
  total: number
}

export const useUsers = () => {
  const [page, setPage] = useState(1)

  const { data, error } = useSWR<UsersResponse>(`/v1/users?page=${page}`)

  const nextPage = () => {
    if (page < data.pageCount) {
      setPage(page + 1)
    }
  }

  return {
    users: data?.results ?? [],
    isLoading: !error && !data,
    nextPage
  }
}
