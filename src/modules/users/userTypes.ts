export interface User {
  id: string
  email: string
  name: string
  birthdate: string
  role_id: number
  role: UserRole
}

export interface UserRole {
  id: number
  role: string
}
