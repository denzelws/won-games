import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'

import { useMemo } from 'react'
import apolloCache from './apolloCache'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: apolloCache
  })
}

export function initializeApollo(initialState = null) {
  // verify if exists, if not create another one
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  // restoring the data cache
  if (initialState) {
    apolloClientGlobal.restore(initialState)
  }

  // initializing at ssr with clean cache
  if (typeof window === 'undefined') return apolloClientGlobal
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}