import React from 'react'
import { Route, Routes as HHRoutes } from 'react-router-dom'
import Colleges from '../Pages/Colleges'
import Dashboard from '../Pages/Dashboard'
import Quiz from '../Pages/Quiz'
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
    </HHRoutes>
  )
}
