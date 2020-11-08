import { useGetUsersQuery } from 'lib/graphql/projectGraphql'
import React, { useEffect } from 'react'

export const MainPage = () => {
  const { data, error, loading } = useGetUsersQuery()

  useEffect(() => {
    console.log(data)
  }, [])
  return (
    <>
      {data?.users.length ? (
        <h1>
          {data?.users[0]?.name} was the number {data?.users[0]?.id}
        </h1>
      ) : (
        <h1>There is no users on the database</h1>
      )}
    </>
  )
}
