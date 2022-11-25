import { Button, Card, Col, Image, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { getRequest } from '../axios/axiosMethods'
import PageLayout from '../components/PageLayout'

const Hackathons = () => {
  const [page, setPage] = useState(() => 1)
  const [hackathons, setHackathons] = useState(() => [])
  const [loading, setLoading] = useState(() => true)

  const BREADCRUMBS = [
    {
      name: 'Home',
      link: {
        route: '/',
        key: 1
      }
    },
    {
      name: 'Hackathons'
    }
  ]

  useEffect(() => {
    document.title = 'Hackathons'
    getRequest('quizzes/hackathons/get?page=' + page).then(res => {
      const { result } = res.data
      if (res.status === 200)
        if (res.data.status === 200) {
          setHackathons(JSON.parse(result)?.hackathons)
          setLoading(false)
        }
    })
  }, [page])

  return (
    <PageLayout breadcrumbs={BREADCRUMBS} loading={loading}>
      <h1>Hackathons</h1>
      <div style={{ maxWidth: '1400px', margin: '0px auto' }}>
        <Row gutter={16}>
          <Col span={6}>
            <Card style={{ height: 'calc(100vh - 200px)' }}></Card>
          </Col>
          <Col span={18}>
            {hackathons.map(hackathon => (
              <a href={hackathon.url} key={hackathon.id} target="__blank">
                <Card key={hackathon.id} bodyStyle={{ padding: 10 }}>
                  <div style={{ display: 'flex', gap: 20 }}>
                    <div
                      style={{
                        display: 'flex',
                        gap: 20,
                        alignItems: 'center'
                      }}
                    >
                      <Image
                        width={130}
                        preview={false}
                        src={hackathon.thumbnail_url}
                      />
                      <div>
                        <h3>{hackathon.title}</h3>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                          }}
                        ></div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                          }}
                        ></div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </Card>
              </a>
            ))}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button onClick={() => setPage(prev => prev + 1)}>
                Load more
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}

export default Hackathons
