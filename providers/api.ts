import axios from 'axios'
import Router from 'next/router'

import { clearToken, getToken } from '@/utils/auth'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

api.interceptors.request.use((config) => {
  const token = getToken()

  return {
    ...config,
    headers: {
      ...config.headers,
      ...(token && { Authorization: `Bearer ${token}` })
    }
  }
})

api.interceptors.response.use(
  (response) => response?.data,
  (error) => {
    if (error?.response?.status !== 401 || ['/login'].includes(window.location.pathname)) {
      return Promise.reject(error)
    }
    clearToken()
    Router.push('/login')
  }
)
