import React from 'react'
import { Route, Routes as HHRoutes } from 'react-router-dom'
import ActiveSessions from '../Pages/ActiveSessions'
import Colleges from '../Pages/Colleges'
import Dashboard from '../Pages/Dashboard'
import Quiz from '../Pages/Quiz'
import QuizPanel from '../Pages/QuizPanel'
import QuizQuestionEdit from '../Pages/QuizQuestionsEdit'
import Quizzes from '../Pages/Quizzes'
import Users from '../Pages/Users'

export const Routes = () => {
  return (
    <HHRoutes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/colleges" element={<Colleges />} />
      <Route path="/users" element={<Users />} />
      <Route path="/quizzes" element={<Quizzes />} />
      <Route path="/quizzes/:quizId" element={<Quiz />}></Route>
      <Route
        path="/quizzes/:quizId/edit"
        element={<QuizQuestionEdit />}
      ></Route>
      <Route path="/quizzes/:quizId/quizpanel" element={<QuizPanel />}></Route>
      <Route
        path="/account/activeSessions"
        element={<ActiveSessions />}
      ></Route>
    </HHRoutes>
  )
}
