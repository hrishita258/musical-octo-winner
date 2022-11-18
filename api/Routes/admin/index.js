import express from 'express'
import CollegeRoutes from './College.js'
import QuizzesRoutes from './Quizzes.js'
import UserRoutes from './Users.js'

const router = express.Router()

router.use('/colleges', CollegeRoutes)
router.use('/users', UserRoutes)
router.use('/quizzes', QuizzesRoutes)

export default router
