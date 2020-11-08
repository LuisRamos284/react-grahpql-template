import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Router } from 'react-router-dom'
import createApolloClient from '../lib/ApolloClient'
import { hist } from '../lib/utils/History'
import { MainPage } from 'views/Main/Main'

export const RootComponent: React.FC<any> = ({ children, ...props }) => {
  const apolloClient = createApolloClient()
  return (
    <ApolloProvider client={apolloClient}>
      <Router history={hist}>
        <MainPage />
      </Router>
    </ApolloProvider>
  )
}
