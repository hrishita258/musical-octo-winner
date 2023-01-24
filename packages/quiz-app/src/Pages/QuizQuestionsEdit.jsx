import {
  BorderInnerOutlined,
  CheckOutlined,
  CloseOutlined,
  DeleteTwoTone,
  HighlightOutlined
} from '@ant-design/icons'
import { Button, Card, Typography } from 'antd'
import { convert } from 'html-to-text'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRequest } from '../axios/axiosMethods'
import PageLayout from '../components/PageLayout'
import QuillEditor from '../components/QuillEditor'

const QuizQuestionsEdit = () => {
  const [questionsData, setQuestionsData] = useState(null)
  const [selectedCorrectOption, setSelectedCorrectOption] = useState(null)

  const [loading, setLoading] = useState(true)
  const params = useParams()
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
    { name: questionsData ? questionsData?.name : params.quizId }
  ]

  useEffect(() => {
    getRequest('quizzes/' + params.quizId).then(res => {
      setQuestionsData(res.data.result)
      setLoading(false)
    })
  }, [params])

  const updateOption = (questionIndex, optionIndex, option) => {
    const newQuestions = [...questionsData.Questions]
    newQuestions[questionIndex].Choices[optionIndex] = {
      ...newQuestions[questionIndex].Choices[optionIndex],
      ...option
    }
    setQuestionsData({ ...questionsData, Questions: newQuestions })
  }

  const addOption = questionIndex => {
    const newQuestions = [...questionsData.Questions]
    const newOption = { id: Date.now(), text: '', isCorrect: false }
    newQuestions[questionIndex].Choices.push(newOption)
    setQuestionsData({ ...questionsData, Questions: newQuestions })
  }

  console.log(questionsData)
  return (
    <PageLayout loading={loading} breadcrumbs={BREADCRUMBS}>
      <div
        style={{ borderBottom: '1px solid lightgray', marginBottom: '1rem' }}
      >
        <h1 style={{ fontSize: '20px' }}>Questions Builder</h1>
        <p>add new questions to the quiz or update them as per your need</p>
      </div>
      {questionsData?.Questions.map((ques, index) => (
        <Card
          key={ques.id}
          style={{
            padding: '0px 7rem'
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <BorderInnerOutlined
                  style={{
                    fontSize: '25px',
                    color: 'gray',
                    marginRight: '10px'
                  }}
                />
                <span style={{ fontSize: '14px', fontWeight: 500 }}>
                  Question {index + 1}
                </span>
              </div>
              <DeleteTwoTone
                twoToneColor="red"
                style={{ fontSize: '16px', cursor: 'pointer' }}
              />
            </div>
            <QuillEditor question={ques.question} />
            <div>
              {ques.Choices?.map((choice, j) => (
                <Card
                  key={choice.id}
                  style={{ marginBottom: 15, boxShadow: 'none' }}
                  bodyStyle={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    fontWeight: 500,
                    padding: 7
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <BorderInnerOutlined
                      style={{
                        fontSize: '23px',
                        color: 'gray',
                        marginRight: 10
                      }}
                    />
                    <span style={{ fontSize: '14px', color: 'gray' }}>
                      {String.fromCharCode(65 + j)}{' '}
                    </span>
                  </div>
                  <Typography.Paragraph
                    style={{ fontSize: '14px', width: '80%', margin: 0 }}
                    editable={{
                      icon: <HighlightOutlined />,
                      tooltip: 'click to edit text'
                    }}
                    onChange={text => updateOption(index, j, { text })}
                  >
                    {convert(choice.text)}
                  </Typography.Paragraph>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <Button
                      style={{
                        backgroundColor: choice.isCorrect
                          ? '#50cd89'
                          : '#e8fff3',
                        color: choice.isCorrect ? '#FFF' : '#50cd89',
                        borderColor: '#b7eb8f',
                        height: 30,
                        width: 30,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '20px'
                      }}
                      onClick={() => setSelectedCorrectOption(j)}
                    >
                      <CheckOutlined />
                    </Button>
                    <Button type="text">
                      <CloseOutlined />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </PageLayout>
  )
}

export default QuizQuestionsEdit
