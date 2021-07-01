import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SWRConfig } from 'swr'

import { theme } from '@common/theme'
import { api } from '@common/providers/api'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SWRConfig value={{ fetcher: api }}>
        <Component {...pageProps} />
      </SWRConfig>
    </ChakraProvider>
  )
}

export default MyApp
