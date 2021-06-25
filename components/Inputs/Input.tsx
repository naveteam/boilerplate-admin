import { forwardRef, LegacyRef } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input as ChakraInput,
  FormControlProps,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

type InputProps = ChakraInputProps &
  FormControlProps & {
    label?: string
    error?: string
  }

const Input = forwardRef<unknown, InputProps>((props: InputProps, ref) => {
  const { id, name, label, type, error, ...rest } = props

  return (
    <FormControl id={id || name} isInvalid={!!error} {...rest}>
      <FormLabel>{label}</FormLabel>
      <ChakraInput name={name} type={type} ref={ref as LegacyRef<HTMLInputElement>} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
})

Input.displayName = 'Input'

export default Input
