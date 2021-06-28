import useSWR from 'swr'

import { User } from '@/types/user'

export const useUser = () => {
  const { data, error } = useSWR<User>('/v1/me')

  return {
    user: data,
    isLoading: !error && !data
  }
}
