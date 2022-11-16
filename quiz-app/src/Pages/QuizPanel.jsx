import { Button, Card, Col, Layout, Row } from 'antd'
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
      <Layout.Header style={{ backgroundColor: '#FFF' }}>
        something is going here
      </Layout.Header>
      <div style={{ padding: '1rem' }}>
        <Row gutter={5} style={{ height: 'calc(100vh - 100px)' }}>
          <Col span={5}>
            <Card title="" style={{ position: 'relative', height: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px',
                  borderBottom: '2px solid #e8e8e8'
                }}
              >
                <div>
                  <small>Completed</small>
                  <div
                    style={{
                      height: '23px',
                      width: '23px',
                      marginTop: '3px',
                      borderRadius: '6px',
                      backgroundColor: '#52c41a'
                    }}
                  ></div>
                </div>
                <div>
                  <small>Not Answered</small>
                  <div
                    style={{
                      height: '23px',
                      width: '23px',
                      marginTop: '3px',
                      borderRadius: '6px',
                      backgroundColor: '#fa8c16'
                    }}
                  ></div>
                </div>
                <div>
                  <small>Current</small>
                  <div
                    style={{
                      height: '23px',
                      width: '23px',
                      marginTop: '3px',
                      borderRadius: '6px',
                      backgroundColor: 'black'
                    }}
                  ></div>
                </div>
              </div>

              <p
                style={{
                  margin: '0px auto',
                  textAlign: 'center',
                  borderBottom: '2px solid #e8e8e8',
                  padding: '10px'
                }}
              >
                <b>25 Questions</b>
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '210px',
                  overflow: 'auto',
                  marginTop: '10px'
                }}
              >
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3,
                  4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9
                ].map(s => (
                  // <Badge size="default" color="orange" count={s}></Badge>
                  <div
                    style={{
                      height: '30px',
                      width: '30px',
                      borderRadius: '50%',
                      margin: '0.4rem',
                      background: '#fa8c16',
                      // #52c41a
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: '#FFF',
                      fontSize: '15px'
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
          <Col span={19}>
            <Card>this</Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}

export default QuizPanel
