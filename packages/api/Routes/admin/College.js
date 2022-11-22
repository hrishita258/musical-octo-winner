import express from 'express'
import postgres from '../../db/Prisma.js'
const router = express.Router()

router.get('/', async (req, res) => {
  const colleges = await postgres.college.findMany({
    include: { specializations: true }
  })
  res.status(200).json({ status: 200, result: colleges })
})

router.get('/hh', (req, res) => {
  res.send('working')
})

export default router
