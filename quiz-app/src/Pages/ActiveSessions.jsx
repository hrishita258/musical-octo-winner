import { Button, Card, Col, Row } from 'antd'
import DeviceDetector from 'device-detector-js'
import { PageLayout } from '../../components/PageLayout'
import { useAppState } from '../../state/AppState'

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

export const ActiveSessions = () => {
  const { appState } = useAppState()

  const deviceDetector = new DeviceDetector()

  const session = data?.activeSessions?.map(ses => {
    const parsed = deviceDetector.parse(ses.userAgent)
    return { ...ses, parsed }
  })

  return (
    <PageLayout breadcrumbs={BREADCRUMBS}>
      <Row gutter={16}>
        {session?.map(session => (
          <div key={session.id}>
            <Col span={8}>
              <Card style={{ width: 300, margin: 10 }}>
                <h4>Started on : {session.createdAt}</h4>
                <h4>Last Seen : {session.updatedAt}</h4>
                <h3 style={{ color: '#00a8ff' }}>Client</h3>
                <div>Name : {session.parsed.client?.name}</div>
                <div>Type : {session.parsed.client?.type}</div>
                <div style={{ marginBottom: 15 }}>
                  Version : {session.parsed.client?.version}
                </div>
                <h3 style={{ color: '#00a8ff' }}>Device</h3>
                <div style={{ marginBottom: 15 }}>
                  Type : {session.parsed.device?.type}
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
          </div>
        ))}
      </Row>
    </PageLayout>
  )
}
