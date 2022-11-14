import React from 'react'
import { useParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
const QuizQuestionsEdit = () => {
  const [questionsData, setQuestionsData] = useState(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:4000/admin/quizzes')
      .then(res => res.json())
      .then(response => {
        if (response.status === 200) {
          setQuizzesData(response.result)
          setLoading(false)
        }
      })
      .catch(err => {
        setLoading(false)
        message.error('internal server error please try agin later')
      })
  }, [])
  const { id } = useParams()
  return (
    <PageLayout loading={loading} breadcrumbs={BREAD}>
      <h1>QuizQuestionsEdit {id}</h1>
    </PageLayout>
  )
}
