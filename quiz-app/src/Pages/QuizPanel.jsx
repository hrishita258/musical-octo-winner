import {
  Avatar,
  Button,
  Card,
  Col,
  Drawer,
  Image,
  message,
  PageHeader,
  Progress,
  Row
} from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRequest } from '../axios/axiosMethods'
import PageLayout from '../components/PageLayout'
import { useAppState } from '../state/AppState'

const STATUS_BADGES = [
  { name: 'Completed', bgColor: '#0cb66e', color: '#FFF' },
  {
    name: 'Not Answered',
    bgColor: '#e7eaef',
    color: '#142439'
  },
  { name: 'Current', bgColor: '#142439', color: '#FFF' }
]

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const toggleFullScreen = () => {
  useEffect(() => {
    var doc = window.document
    var docEl = doc.documentElement

    var requestFullScreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullScreen ||
      docEl.msRequestFullscreen
    console.log('hh')

    requestFullScreen.call(docEl)
  }, [])
}

var INITIAL_COUNT = 0

const QuizPanel = () => {
  const [quizData, setQuizData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [secondsRemaining, setSecondsRemaining] = useState(0)
  const [open, setOpen] = useState(false)

  const params = useParams()
  const { appState } = useAppState()

  const secondsToDisplay = secondsRemaining % 60
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60

  useEffect(() => {
    document.addEventListener('fullscreenerror', function (err) {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    getRequest('quizzes/' + params.quizId)
      .then(response => {
        if (response.status === 200) {
          if (response.data.status) {
            setQuizData(response.data.result)
            setSecondsRemaining(response.data.result.duration * 60)
            INITIAL_COUNT = response.data.result.duration * 60
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

  useInterval(() => {
    if (secondsRemaining > 0) {
      setSecondsRemaining(secondsRemaining - 1)
    } else {
      console.log('stopped')
    }
  }, 1000)

  const twoDigits = num => String(num).padStart(2, '0')
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
          <div className="quiz-panel-countdown-container">
            <Progress
              status="active"
              type="circle"
              width={58}
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068'
              }}
              percent={parseInt((100 * secondsRemaining) / INITIAL_COUNT)}
              style={{ marginTop: '3px' }}
            />
            <div style={{ padding: 0 }}>
              <small>Time Remaining</small>
              <div className="countdown-wrapper">
                <div className="time-section">
                  <div className="time">
                    {twoDigits(
                      (minutesRemaining - (minutesRemaining % 60)) / 60
                    )}
                  </div>
                  <small className="time-text">Hrs</small>
                </div>
                <div className="time-section">
                  <div className="time">:</div>
                </div>
                <div className="time-section">
                  <div className="time">
                    {twoDigits(
                      ((secondsRemaining - secondsToDisplay) / 60) % 60
                    )}
                  </div>
                  <small className="time-text">Min</small>
                </div>
                <div className="time-section">
                  <div className="time">:</div>
                </div>
                <div className="time-section">
                  <div className="time">{twoDigits(secondsRemaining % 60)}</div>
                  <small className="time-text">Sec</small>
                </div>
              </div>
            </div>
            <div className="quiz-panel-rule-button">
              <Button type="primary" onClick={() => setOpen(true)}>
                Rules
              </Button>
            </div>
          </div>
        </div>
      </PageHeader>
      <div style={{ padding: '1rem' }}>
        <Row gutter={5} style={{ height: 'calc(100vh - 100px)' }}>
          <Col span={4}>
            <Card style={{ position: 'relative', height: '100%' }}>
              <div className="quiz-panel-status-badges-container">
                {STATUS_BADGES.map(h => (
                  <div key={h.name}>
                    <small>{h.name}</small>
                    <div className="quiz-panel-status-badges-item-container">
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

              <p className="quiz-panel-sidebar-total-questions">
                <b>
                  {quizData && quizData.Questions && quizData.Questions.length}{' '}
                  Questions
                </b>
              </p>
              <div className="quiz-panel-indextags-container">
                {quizData &&
                  quizData.Questions &&
                  quizData.Questions?.map((q, s) => (
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
            <Card>
              <Button id="fullscreen" onClick={toggleFullScreen()}>
                go full screen
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
      {/* drawer */}
      <Drawer placement="right" closable={false} open={open}>
        <div
          style={{
            paddingLeft: '16px',
            borderLeft: '2px solid #1c4980',
            marginBottom: '25px'
          }}
        >
          <h2 style={{ color: '#1c4980', fontSize: '18px' }}>
            Assessment Guidelines
          </h2>
          <p>
            Kindly read through the following key instructions and important
            guidelines for this assessment:
          </p>
        </div>
        <div style={{}}>
          <h4
            style={{
              color: '#1c4980',
              fontSize: '16px',
              borderLeft: '2px solid #1c4980',
              paddingLeft: '16px'
            }}
          >
            Assessment Guidelines
          </h4>
          <ul class="browser-default" style={{ paddingLeft: '33px' }}>
            <li className="rules-panel-list">
              <strong>Assessment Window: </strong> 16 Nov 22, 09:08 PM IST to 22
              Nov 22, 09:08 PM IST
            </li>
            <li className="rules-panel-list">
              <strong> Assessment Duration: </strong> 00:30:00 (hh:mm:ss)
            </li>
            <li className="rules-panel-list">
              <strong>Total Questions to be answered:</strong> 20 Questions
            </li>
            <li className="rules-panel-list">
              You can attempt the assessment anytime between the provided
              assessment window.
            </li>
            <li className="rules-panel-list">
              Please ensure that you attempt the assessment in one sitting as
              once you start the assessment, the timer won’t stop.
            </li>
            <li className="rules-panel-list">
              You will have to finish the assessment before 22 Nov 22, 09:08 PM
              IST. To get the complete assessment duration, you need to start
              the assessment latest by 22 Nov 22, 08:38 PM IST. Otherwise,
              you’ll get less time to complete the assessment.
            </li>
          </ul>
        </div>
      </Drawer>
    </PageLayout>
  )
}

export default QuizPanel
