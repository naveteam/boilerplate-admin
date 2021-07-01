import { useRouter } from 'next/router'

const UserForm = () => {
  const {
    query: { userId }
  } = useRouter()

  return <div />
}

export default UserForm
