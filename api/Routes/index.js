import express from 'express'
import AdminRoutes from '../Routes/admin/index.js'
const router = express.Router()

router.use('/admin', AdminRoutes)
// router.use('/spoc', require('./spoc'))
// router.use('/faculty', require('./faculty'))
// router.use('/student', require('./student'))

export default router
