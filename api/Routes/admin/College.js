const express = require('express')
const router = express.Router()
const { postgres } = require('../../db')

router.get('/', async (req, res) => {
  const colleges = await postgres.college.findMany()
  res.status(200).json({ status: 200, result: colleges })
})

module.exports = router
