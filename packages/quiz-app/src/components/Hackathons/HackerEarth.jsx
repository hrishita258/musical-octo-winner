import { Card, Col, Image, Row } from 'antd'
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
            setHackathons(res.data.result.results)
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  console.log(hackathons, 'hacker earth')
  return (
    <div style={{ margin: '0px auto', maxWidth: '1280px' }}>
      <Row gutter={25}>
        {hackathons.map(hackathon => (
          <Col span={6} key={hackathon?.id}>
            <Card
              cover={<Image alt={hackathon?.title} src={hackathon?.imageUrl} />}
            ></Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HackerEarth
