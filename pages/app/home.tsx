import { Center, Text, Spinner } from '@chakra-ui/react'

import { useUser } from '@/services/user'

const Home = () => {
  const { user, isLoading } = useUser()

  return (
    <Center height='100vh' p={100}>
      {isLoading ? <Spinner /> : <Text>{JSON.stringify(user)}</Text>}
    </Center>
  )
}

export default Home
