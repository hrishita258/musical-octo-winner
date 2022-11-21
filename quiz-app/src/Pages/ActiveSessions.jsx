import { DesktopOutlined } from '@ant-design/icons'
import { Button, Card, Col, message, Row } from 'antd'
import DeviceDetector from 'device-detector-js'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { getRequest } from '../axios/axiosMethods'
import PageLayout from '../components/PageLayout'

const TITLE = 'Active Sessions'

const BREADCRUMBS = [
  {
    name: 'Home',
    link: {
      route: '/',
      key: '1'
    }
  },
  {
    name: 'Account'
  },
  {
    name: TITLE
  }
]

const ActiveSessions = () => {
  const [activeSessions, setActiveSessions] = useState()
  const [loading, setLoading] = useState(true)

  const deviceDetector = new DeviceDetector()

  const session = activeSessions?.map(ses => {
    const parsed = deviceDetector.parse(ses.userAgent)
    return { ...ses, parsed }
  })
  useEffect(() => {
    getRequest('activeSessions')
      .then(response => {
        if (response.status === 200) {
          if (response.data.status) {
            setActiveSessions(response.data.result)
          }
          setLoading(false)
        } else {
        }
      })
      .catch(err => {
        setLoading(false)
        message.error('internal server error please try agin later')
      })
  }, [])

  return (
    <PageLayout breadcrumbs={BREADCRUMBS} loading={loading}>
      <Row gutter={30}>
        {session?.map(session => (
          <Col span={6} key={session.id}>
            <Card>
              <h5>
                <b>Started on :</b>
                {moment(session.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
              </h5>
              <h5>
                <b>Last Seen :</b>
                {moment(session.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}
              </h5>
              <h3 style={{ color: '#00a8ff' }}>Client</h3>
              <div>Name : {session.parsed.client?.name}</div>
              <div>Type : {session.parsed.client?.type}</div>
              <div style={{ marginBottom: 15 }}>
                Version : {session.parsed.client?.version}
              </div>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100px',
                    width: '50px',
                    marginRight: '10px'
                  }}
                >
                  <DesktopOutlined
                    style={{ fontSize: '50px', color: '#fa8c16' }}
                  />
                </div>
                <div>
                  <h3 style={{ color: '#00a8ff' }}>Device</h3>
                  <div style={{ marginBottom: 15 }}>
                    Type : {session.parsed.device?.type}
                  </div>
                </div>
              </div>
              <h3 style={{ color: '#00a8ff' }}>OS</h3>
              <div>Name : {session.parsed.os?.name}</div>
              <div>Platform : {session.parsed.os?.platform}</div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end'
                }}
              >
                <Button
                  type="primary"
                  onClick={() => deleteSession(session.id)}
                  disabled={session.token ? true : false}
                >
                  {session.token ? 'Current' : 'Remove'}
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}

export default ActiveSessions
