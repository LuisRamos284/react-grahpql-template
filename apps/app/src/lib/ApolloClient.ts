import { HttpLink, from, split, ApolloClient } from 'apollo-boost'
import { WebSocketLink } from 'apollo-link-ws'
import { GRAPHQL_ENDPOINT_HTTPS, GRAPHQL_ENDPOINT_WSS } from 'env'
import { getMainDefinition } from 'apollo-utilities'
import { InMemoryCache } from 'apollo-cache-inmemory'

const createApolloClient = (token?: string) => {
  const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT_HTTPS!,
    headers: {
      authorization: token ? `Bearer ${token}` : '',
      'x-hasura-admin-secret': 'myadminsecretkey',
    },
  })
  const wsLink = new WebSocketLink({
    uri: GRAPHQL_ENDPOINT_WSS!,
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          authorization: token ? `Bearer ${token}` : '',
        },
      },
    },
  })
  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink,
    httpLink,
  )
  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  })
}

export default createApolloClient
