import express from 'express'
import postgres from '../../db/Prisma.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const users = await postgres.user.findMany({
    select: {
      _count: true,
      role: true,
      id: true,
      College: {
        select: {
          name: true,
          id: true
        }
      },
      specialization: {
        select: {
          name: true,
          id: true
        }
      },
      contactNumber: true,
      createdAt: true,
      email: true,
      name: true,
      enrollmentYear: true,
      gender: true,
      isActive: true,
      semester: true
    }
  })
  if (!users.length)
    return res
      .status(200)
      .json({ status: 200, msg: 'no users found', result: null })

  res.status(200).json({ status: 200, msg: 'no users found', result: users })
})

export default router
