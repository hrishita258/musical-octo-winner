const express = require('express')
const router = express.Router()

router.use('/colleges', require('./College'))
router.use('/users', require('./Users'))
router.use('/quizzes', require('./Quizzes'))

module.exports = router
