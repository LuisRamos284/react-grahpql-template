import { useState } from 'react'

export const CustomHook = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()
  const [data, setData] = useState<number>(0)

  const yourFunction = async () => {
    setLoading(true)
    return new Promise<number>(async (resolve, reject) => {
      try {
        const response = await fetch('yourUrl')
        if (!response.ok) {
          throw Error('HTTP')
        }
        //THIS IS JUST AN EXAMPLE
        resolve(1)
      } catch (error) {
        setError(error)
        reject(error)
      }
    })
  }

  return { yourFunction, error, data }
}
