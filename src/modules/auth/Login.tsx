import Router from 'next/router'
import { Center, Text, Button, useToast } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { Card, Input } from '@common/components'

import { useAuth } from './authServices'
import { loginResolver } from './authYupResolvers'
import { AuthCredentials } from './authTypes'

const Login = () => {
  const toast = useToast()

  const { register, handleSubmit, formState } = useForm<AuthCredentials>({ resolver: loginResolver })
  const { errors, isSubmitting } = formState

  const { login } = useAuth()

  const onSubmit = handleSubmit(async (values) => {
    try {
      await login(values)
      Router.push('/')
    } catch (error) {
      toast({ title: 'Ops!', description: 'Credenciais inválidas', status: 'error' })
    }
  })

  return (
    <Center height='100vh'>
      <Card width={500} direction='column' as='form' onSubmit={onSubmit}>
        <Text fontSize='xl' align='center' mb={10}>
          Login
        </Text>
        <Input
          label='Email'
          name='email'
          {...register('email')}
          placeholder='example@email.com'
          type='email'
          error={errors.email?.message}
          mb={5}
        />
        <Input
          label='Senha'
          name='password'
          {...register('password')}
          placeholder='******'
          type='password'
          error={errors.password?.message}
          mb={10}
        />
        <Button type='submit' isLoading={isSubmitting}>
          Entrar
        </Button>
      </Card>
    </Center>
  )
}

export default Login
