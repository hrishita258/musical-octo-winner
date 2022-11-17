import {
  Avatar,
  Button,
  Card,
  Col,
  Image,
  message,
  PageHeader,
  Progress,
  Row
} from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRequest } from '../axios/axiosMethods'
import PageLayout from '../components/PageLayout'
import { useAppState } from '../state/AppState'

const QuizPanel = () => {
  const [quizData, setQuizData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [seconds, setSeconds] = useState(60)
  const [minutes, setMinutes] = useState(0)
  const params = useParams()
  const { appState } = useAppState()

  useEffect(() => {
    getRequest('quizzes/' + params.quizId)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          if (response.data.status) {
            setQuizData(response.data.result)
            setMinutes(response.data.result.duration)
          }
          setLoading(false)
        } else {
        }
      })
      .catch(err => {
        setLoading(false)
        message.error(
          err.toString() || 'internal server error please try agin later'
        )
      })
  }, [params])

  var myIntervel
  useEffect(() => {
    myIntervel = setInterval(() => {
      if (seconds > 0) {
        setSeconds(s => s - 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myIntervel)
        } else {
          setMinutes(m => m - 1)
          setSeconds(59)
        }
      }
    }, 1000)
  }, [])
  return (
    <PageLayout noStyle loading={loading}>
      <PageHeader className="quiz-panel-pageheader">
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
                  src={
                    appState.profileImg
                      ? appState.profileImg
                      : 'https://joeschmoe.io/api/v1/random'
                  }
                  style={{ width: 55 }}
                />
              }
            />
            <div>
              <span>{appState.fullname}</span>
              <span
                style={{
                  display: 'block',
                  color: 'rgb(156 163 175 / 1)'
                }}
              >
                <small>Candidate ID:</small> {appState.email}
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
            <Card style={{ position: 'relative', height: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px',
                  borderBottom: '1px solid #ddd'
                }}
              >
                {[
                  { name: 'Completed', bgColor: '#0cb66e', color: '#FFF' },
                  {
                    name: 'Not Answered',
                    bgColor: '#e7eaef',
                    color: '#142439'
                  },
                  { name: 'Current', bgColor: '#142439', color: '#FFF' }
                ].map(h => (
                  <div key={h.name}>
                    <small>{h.name}</small>
                    <div
                      style={{
                        display: 'flex',
                        gap: '5px',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: h.bgColor,
                          color: h.color
                        }}
                        className="quiz-panel-status-badge"
                      ></div>
                      <span>1</span>
                    </div>
                  </div>
                ))}
              </div>

              <p
                style={{
                  margin: '0px auto',
                  textAlign: 'center',
                  borderBottom: '1px solid #ddd',
                  padding: '10px'
                }}
              >
                <b>25 Questions</b>
              </p>
              <div className="quiz-panel-indextags-container">
                {Array.from({ length: 60 }).map((q, s) => (
                  <div key={s} className="quiz-panel-indextags">
                    <span>{s + 1}</span>
                  </div>
                ))}
              </div>
              <Button
                type="primary"
                block
                danger
                className="quiz-panel-submit-btn"
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
