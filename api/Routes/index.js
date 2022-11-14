const express = require('express')
const { authCheck } = require('../middlewares')
const router = express.Router()

router.use('/admin', authCheck, require('./admin'))
router.use('/spoc', require('./spoc'))
router.use('/faculty', require('./faculty'))
router.use('/student', require('./student'))

module.exports = router
