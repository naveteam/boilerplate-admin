import { Center, Text, Spinner } from '@chakra-ui/react'

import { useLoggedUser } from '@/services/auth'

const Home = () => {
  const { user, isLoading } = useLoggedUser()

  return (
    <Center height='100vh' p={100}>
      {isLoading ? <Spinner /> : <Text>{JSON.stringify(user)}</Text>}
    </Center>
  )
}

export default Home
