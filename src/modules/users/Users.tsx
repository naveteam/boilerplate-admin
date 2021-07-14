import { Table, Thead, Tr, Th, Tbody, Td, Center, Spinner } from '@chakra-ui/react'

import { useUsers } from './usersServices'

const Users = () => {
  const { users, isLoading } = useUsers()

  return (
    <Center height='100vh' p={40}>
      {isLoading && <Spinner />}

      {!isLoading && (
        <Table>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users?.map((user) => (
              <Tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>25.4</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Center>
  )
}

export default Users
