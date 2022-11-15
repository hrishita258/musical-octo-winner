import { Button, Card, Col, Row } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React from 'react'
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
    name: 'Quizzes'
  }
]
const QuizPanel = () => {
  return (
    <PageLayout noStyle breadcrumbs={BREADCRUMBS}>
      <Header></Header>
      <div style={{ padding: '1rem' }}>
        <Row gutter={5} style={{ height: 'calc(100vh - 100px)' }}>
          <Col span={4}>
            <Card title="" style={{ position: 'relative', height: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(s => (
                  // <Badge size="default" color="orange" count={s}></Badge>
                  <div
                    style={{
                      height: '35px',
                      width: '35px',
                      borderRadius: '50%',
                      margin: '0.5rem',
                      background: '#fa8c16',
                      // #52c41a
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: '#FFF',
                      fontSize: '19px'
                    }}
                  >
                    <span>{s}</span>
                  </div>
                ))}
              </div>
              <Button
                type="primary"
                block
                danger
                style={{
                  position: 'absolute',
                  bottom: 10,
                  right: 7,
                  width: '95%',
                  alignSelf: 'center'
                }}
              >
                Submit
              </Button>
            </Card>
          </Col>
          <Col span={20}>
            <Card>this</Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}

export default QuizPanel
