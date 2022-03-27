import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import client from '../lib/apolloClient'
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
