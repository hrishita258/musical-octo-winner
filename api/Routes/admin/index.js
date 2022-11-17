import express from 'express'
import CollegeRoutes from './College.js'

const router = express.Router()
router.use('/colleges', CollegeRoutes)

// router.use('/users', require('./Users'))
// router.use('/quizzes', require('./Quizzes'))

export default router
