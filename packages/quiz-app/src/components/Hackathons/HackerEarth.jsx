import { Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { getRequest } from '../../axios/axiosMethods'

const HackerEarth = () => {
  const [hackathons, setHackathons] = useState(() => [])
  const [loading, setLoading] = useState(() => true)

  useEffect(() => {
    getRequest('opportunity/hackerearth/challenges')
      .then(res => {
        if (res.status === 200) {
          if (res.data.status === 200) {
            console.log(res.data.result)
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div style={{ margin: '0px auto', maxWidth: '1180px' }}>
      <Row gutter={25}></Row>
    </div>
  )
}

export default HackerEarth
