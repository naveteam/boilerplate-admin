import useSWR from 'swr'

import { User } from './userTypes'

export const useUsers = () => {
  const { data, error } = useSWR<User[]>('/v1/users')

  return {
    users: data,
    isLoading: !error && !data
  }
}
