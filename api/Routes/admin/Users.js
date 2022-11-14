const express = require('express')
const router = express.Router()

const { postgres } = require('../../db')

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

module.exports = router
