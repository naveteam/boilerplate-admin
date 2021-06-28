import { mutate } from 'swr'

import { api } from '@/providers/api'
import { setToken, clearToken } from '@/utils/auth'
import { UserCredentials } from '@/types/user'

export const useAuth = () => {
  const login = async (credentials: UserCredentials) => {
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
