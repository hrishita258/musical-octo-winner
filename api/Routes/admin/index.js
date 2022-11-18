import express from 'express'
import CollegeRoutes from './College.js'
import QuizzesRoutes from './Quizzes.js'

const router = express.Router()
router.use('/colleges', CollegeRoutes)

// router.use('/users', require('./Users'))
router.use('/quizzes', QuizzesRoutes)

export default router
