import useSWR, { mutate } from 'swr'

import { User } from '@users/userTypes'
import { api } from '@common/providers/api'

import { setToken, clearToken } from './authToken'
import { AuthCredentials } from './authTypes'

export const useAuth = () => {
  const login = async (credentials: AuthCredentials) => {
    const { access_token } = await api.post('/v1/users/login', credentials)
    setToken(access_token)
    mutate('/v1/me')
  }

  const logout = () => {
    clearToken()
    mutate('/v1/me', null, false)
  }

  return { login, logout }
}

export const useLoggedUser = () => {
  const { data, error } = useSWR<User>('/v1/me')

  return {
    user: data,
    isLoading: !error && !data
  }
}
