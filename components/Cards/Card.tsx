import { Flex, FlexProps } from '@chakra-ui/react'

interface CardProps extends FlexProps {}

const Card = (props: CardProps) => <Flex {...props} />

Card.defaultProps = {
  bg: 'white',
  padding: 4,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: 'gray.200'
}

export default Card
