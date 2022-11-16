import {
  Avatar,
  Button,
  Card,
  Col,
  Image,
  PageHeader,
  Progress,
  Row
} from 'antd'
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
      <PageHeader
        style={{
          backgroundColor: '#FFF',
          padding: '0px 15px 5px 15px',
          height: '67px',
          boxShadow:
            '0 2px 6px 0 rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              gap: 8,
              alignItems: 'center'
            }}
          >
            <Avatar
              size={55}
              src={
                <Image
                  preview={false}
                  src="https://joeschmoe.io/api/v1/random"
                  style={{ width: 55 }}
                />
              }
            />
            <div>
              <span>Hrishita Bhandari</span>
              <span style={{ display: 'block' }}>
                <small>Candidate ID:</small> Hrishita258@technonjr.org
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Progress
              status="active"
              type="circle"
              width={58}
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068'
              }}
              percent={90}
              style={{ marginTop: '3px' }}
            />
            <div style={{ padding: 0 }}>
              <small>Time Remaining</small>
              <div className="countdown-wrapper">
                <div className="time-section">
                  <div className="time">01</div>
                  <small className="time-text">Hrs</small>
                </div>
                <div className="time-section">
                  <div className="time">:</div>
                </div>
                <div className="time-section">
                  <div className="time">19</div>
                  <small className="time-text">Min</small>
                </div>
                <div className="time-section">
                  <div className="time">:</div>
                </div>
                <div className="time-section">
                  <div className="time">25</div>
                  <small className="time-text">Sec</small>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Button type="primary">Rules</Button>
            </div>
          </div>
        </div>
      </PageHeader>
      <div style={{ padding: '1rem' }}>
        <Row gutter={5} style={{ height: 'calc(100vh - 100px)' }}>
          <Col span={4}>
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
                {Array.from({ length: 25 }).map((q, s) => (
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
                    <span>{s + 1}</span>
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
