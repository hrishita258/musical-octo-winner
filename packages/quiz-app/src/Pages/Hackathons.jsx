import {
  CalendarTwoTone,
  FlagTwoTone,
  GlobalOutlined,
  HomeTwoTone,
  TagsTwoTone
} from '@ant-design/icons'
import { Button, Card, Col, Image, Row, Tag } from 'antd'
import { convert } from 'html-to-text'
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
          setHackathons([...hackathons, ...JSON.parse(result)?.hackathons])
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
                        alignItems: 'center',
                        minWidth: '70%',
                        borderRight: '1px solid #e8e8e8',
                        paddingRight: 10
                      }}
                    >
                      <Image
                        width={200}
                        preview={false}
                        src={hackathon.thumbnail_url}
                      />
                      <div style={{ width: '100%' }}>
                        <h3 style={{ fontSize: '1.2rem' }}>
                          {hackathon.title}
                        </h3>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: 10
                          }}
                        >
                          <div style={{ width: '100%' }}>
                            <div style={{ marginBottom: 20 }}>
                              {hackathon.open_state === 'open' ? (
                                <Tag color="green">
                                  {hackathon.time_left_to_submission}
                                </Tag>
                              ) : hackathon.open_state === 'upcoming' ? (
                                <Tag color={'orange'}>Upcoming</Tag>
                              ) : (
                                <Tag color="red">Ended</Tag>
                              )}
                            </div>
                            <div
                              style={{
                                fontWeight: 700,
                                fontSize: '1rem',
                                marginLeft: '2px'
                              }}
                            >
                              {convert(hackathon.prize_amount)}{' '}
                              <span
                                style={{ fontWeight: 'normal', color: 'gray' }}
                              >
                                in prizes
                              </span>
                            </div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              width: '100%'
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                gap: 7,
                                marginBottom: 20
                              }}
                            >
                              {hackathon.displayed_location.icon === 'globe' ? (
                                <GlobalOutlined />
                              ) : (
                                <HomeTwoTone />
                              )}
                              <span>
                                {hackathon.displayed_location.location}
                              </span>
                            </div>
                            <div>
                              <b>{hackathon.registrations_count}</b>
                              <span style={{ marginLeft: 10 }}>
                                participant
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: 15
                      }}
                    >
                      <div>
                        <FlagTwoTone />
                        <Tag color="blue" style={{ marginLeft: 10 }}>
                          {hackathon.organization_name}
                        </Tag>
                      </div>
                      <div>
                        <CalendarTwoTone />
                        <span style={{ marginLeft: 10 }}>
                          {hackathon.submission_period_dates}
                        </span>
                      </div>
                      <div style={{ display: 'flex', gap: 10 }}>
                        <TagsTwoTone />
                        <div
                          style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}
                        >
                          {hackathon.themes.map(tag => (
                            <Tag key={tag.id} color="magenta">
                              {tag.name}
                            </Tag>
                          ))}
                        </div>
                      </div>
                    </div>
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
