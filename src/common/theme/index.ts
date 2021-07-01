import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

import Text from './components/textStyles'
import Spinner from './components/spinnerStyles'

import styles from './globalStyles'

export const theme = extendTheme(withDefaultColorScheme({ colorScheme: 'teal' }), {
  styles,
  components: {
    Text,
    Spinner
  }
})
