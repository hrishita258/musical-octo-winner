const express = require('express')
const router = express.Router()
const { postgres } = require('../../db')

router.get('/', async (req, res) => {
  const result = await postgres.quiz.findMany({
    select: {
      _count: true,
      name: true,
      isPublished: true,
      Specialization: {
        select: {
          name: true,
          id: true
        }
      },
      score: true,
      College: {
        select: {
          name: true,
          id: true
        }
      },
      createdAt: true,
      description: true,
      id: true,
      duration: true,
      publishedAt: true,
      User: {
        select: {
          name: true,
          id: true
        }
      }
    }
  })
  if (!result.length)
    return res.status(200).json({
      result: null,
      msg: 'data not found',
      status: 400
    })

  res
    .status(200)
    .json({ result, msg: 'successfully retrived projects', status: 200 })
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  const quiz = await postgres.quiz.findFirst({
    where: {
      id
    },
    include: {
      Questions: {
        include: {
          Choices: true
        }
      },
      User: {
        select: {
          name: true
        }
      },
      College: {
        select: {
          name: true
        }
      },
      Specialization: {
        select: {
          name: true
        }
      }
    }
  })
  res.status(200).json({ result: quiz, msg: 'done', status: 200 })
})

module.exports = router
