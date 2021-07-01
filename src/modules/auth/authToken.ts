import Cookie from 'js-cookie'

export const getToken = () => Cookie.get('token')

export const setToken = (token: string) => (document.cookie = `token=${token}; path=/`)

export const clearToken = () => (document.cookie = 'token=; path=/')
