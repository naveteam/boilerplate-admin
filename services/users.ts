import useSWR from 'swr'

import { User } from '@/types/user'

export const useUsers = () => {
  const { data, error } = useSWR<User[]>('/v1/users')

  return {
    users: data,
    isLoading: !error && !data
  }
}
