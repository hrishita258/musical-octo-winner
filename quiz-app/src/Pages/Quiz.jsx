import {
  Avatar,
  Button,
  Col,
  Descriptions,
  Divider,
  Form,
  Input,
  message,
  Result,
  Row
} from 'antd'

import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout'

const Quiz = () => {
  const [quizData, setQuizData] = useState(null)
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const [form] = Form.useForm()

  const BREADCRUMBS = [
    {
      name: 'Home',
      link: {
        route: '/',
        key: 1
      }
    },
    {
      name: 'Quizzes',
      link: {
        route: '/quizzes',
        key: 2
      }
    },
    { name: quizData ? quizData?.name : params.id }
  ]

  useEffect(() => {
    fetch('http://localhost:4000/admin/quizzes/' + params.quizId)
      .then(res => res.json())
      .then(response => {
        if (response.status === 200) {
          console.log(response)
          setQuizData(response.result)
          setLoading(false)
        }
      })
      .catch(err => {
        setLoading(false)
        message.error('internal server error please try agin later')
      })
  }, [params])

  return (
    <PageLayout breadcrumbs={BREADCRUMBS} loading={loading}>
      {quizData ? (
        <div>
          <Descriptions
            title="Quiz Info"
            size="small"
            column={24}
            contentStyle={{ textAlign: 'center' }}
          >
            <Descriptions.Item
              span={4}
              label={<span style={{ color: 'gray' }}>Status</span>}
            >
              {quizData?.isPublished ? (
                <>
                  <span
                    style={{
                      height: '9px',
                      width: '20px',
                      background: '#b7eb8f',
                      alignSelf: 'center',
                      marginTop: 4,
                      borderRadius: 20,
                      marginRight: 7
                    }}
                  ></span>
                  <small style={{ alignSelf: 'center', marginTop: 4 }}>
                    Published
                  </small>
                </>
              ) : (
                <>
                  <span
                    style={{
                      height: '9px',
                      width: '20px',
                      background: '#ffa39e',
                      alignSelf: 'center',
                      marginTop: 4,
                      borderRadius: 20,
                      marginRight: 7
                    }}
                  ></span>
                  <small style={{ alignSelf: 'center', marginTop: 4 }}>
                    Pending
                  </small>
                </>
              )}
            </Descriptions.Item>
            <Descriptions.Item
              span={6}
              label={<span style={{ color: 'gray' }}>Created by</span>}
            >
              <small style={{ alignSelf: 'center', marginTop: 4 }}>
                {quizData.User.name}
              </small>
            </Descriptions.Item>

            <Descriptions.Item
              span={6}
              label={<span style={{ color: 'gray' }}>Created at</span>}
            >
              <small style={{ alignSelf: 'center', marginTop: 4 }}>
                {moment(new Date(quizData.createdAt)).format(
                  'MMMM Do YYYY, h:mm:ss a'
                )}
              </small>
            </Descriptions.Item>
            <Descriptions.Item
              span={6}
              label={<span style={{ color: 'gray' }}>Published at</span>}
            >
              <small style={{ alignSelf: 'center', marginTop: 4 }}>
                {quizData.publishedAt
                  ? moment(new Date(quizData.publishedAt)).format(
                      'MMMM Do YYYY, h:mm:ss a'
                    )
                  : '-'}
              </small>
            </Descriptions.Item>
          </Descriptions>
          <div style={{ background: 'rgb(244 246 248)', padding: '1rem' }}>
            <Form
              layout="vertical"
              form={form}
              initialValues={{
                ...quizData,
                college: quizData.College.name,
                specialization: quizData.Specialization.name
              }}
            >
              <Row gutter={20}>
                <Col span={7}>
                  <Form.Item label="Quiz Name" name="name">
                    <Input placeholder="name" />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item label="Specialization" name="specialization">
                    <Input placeholder="specialization" />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item label="College" name="college">
                    <Input placeholder="college" />
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item label="Duration" name="duration">
                    <Input placeholder="duration" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Description" name="description">
                    <Input.TextArea placeholder="description"></Input.TextArea>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
          <Divider orientation="left">Questions</Divider>
          <div style={{}}>
            {quizData.Questions?.map((q, i) => (
              <div
                key={q.id}
                style={{
                  marginBottom: '25px',
                  padding: '2rem 6rem',
                  backgroundColor: '#FFF',
                  boxShadow: '0 4px 24px 0 rgb(34 41 47 / 4%)',
                  border: '1px solid #f0f0f0'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <small>Question {i + 1}</small>
                </div>
                <p
                  style={{ fontWeight: 600, fontSize: '1rem', color: 'black' }}
                  dangerouslySetInnerHTML={{ __html: q.question }}
                ></p>
                {q.Choices?.map((choice, j) => (
                  <div
                    key={choice.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 20,
                      fontWeight: 500,
                      marginBottom: 15
                    }}
                  >
                    <Avatar
                      shape="square"
                      style={
                        choice.isCorrect
                          ? {
                              background: '#f6ffed',
                              color: '#389e0d',
                              border: '1px solid #b7eb8f'
                            }
                          : ''
                      }
                      size={30}
                    >
                      {String.fromCharCode(65 + j)}
                    </Avatar>
                    <p
                      dangerouslySetInnerHTML={{ __html: choice.text }}
                      style={{
                        color: choice.isCorrect ? '#389e0d' : '',
                        margin: 0
                      }}
                    ></p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
          extra={
            <Link to={`/quizzes`}>
              <a style={{ color: 'gray' }} href="">
                <Button type="primary">Back Quizzes</Button>
              </a>
            </Link>
          }
        />
      )}
    </PageLayout>
  )
}

export default Quiz
