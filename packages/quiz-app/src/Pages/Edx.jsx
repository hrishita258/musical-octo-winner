import React, { useEffect, useState } from 'react'
import PageLayout from '../components/PageLayout'

const BREADCRUMBS = [
  {
    name: 'Home',
    link: {
      route: '/',
      key: 1
    }
  },
  {
    name: 'Edx'
  }
]
const Edx = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      )
      const json = await response.json()
      setData(json)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) return 'Loading...'
  if (error) return 'Error!'
  if (!data) return null

  return (
    <PageLayout breadcrumbs={BREADCRUMBS}>
      <h1>Edx</h1>
    </PageLayout>
  )
}

export default Edx
