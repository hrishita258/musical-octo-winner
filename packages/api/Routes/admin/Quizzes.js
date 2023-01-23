import express from 'express'
import puppeteer from 'puppeteer'
import postgres from '../../db/Prisma.js'

const router = express.Router()

router.get('/', async (req, res) => {
  console.log(req.query)
  const page = req.query.page || 1
  const itemsPerPage = parseInt(req.query.itemsPerPage || 25)
  let skip = (page - 1) * itemsPerPage
  let query = req.query

  delete query.page
  delete query.itemsPerPage

  if (Object.keys(query).length) {
    skip = 0
  }

  console.log({ itemsPerPage, skip })

  const totalItems = await postgres.quiz.count({ where: query })
  const result = await postgres.quiz.findMany({
    where: query,
    select: {
      _count: true,
      name: true,
      isPublished: true,
      image: true,
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
    },
    skip: skip,
    take: itemsPerPage
  })
  if (!result.length)
    return res.status(200).json({
      result: null,
      msg: 'data not found',
      status: 400
    })

  res.status(200).json({
    result,
    msg: 'successfully retrived projects',
    status: 200,
    totalItems
  })
})

router.get('/filters', async (req, res) => {
  const filters = await postgres.quiz.findMany({
    select: {
      College: {
        select: {
          name: true,
          id: true
        }
      },
      User: {
        select: {
          name: true,
          id: true
        }
      },
      Specialization: {
        select: {
          name: true,
          id: true
        }
      }
    },
    distinct: ['collegeId', 'specializationId', 'createdById']
  })

  res.status(200).json({ result: filters, msg: 'done', status: 200 })
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  console.log(id)
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

router.get('/hackathons/get', async (req, res) => {
  try {
    const pageN = req.query.page || 1
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://devpost.com/api/hackathons?page=' + pageN)

    await page.waitForSelector('pre')
    let element = await page.$('pre')
    let value = await page.evaluate(el => el.textContent, element)
    await browser.close()
    if (value)
      return res.status(200).json({ result: value, msg: 'done', status: 200 })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: null, msg: 'error', status: 500 })
  }
})

export default router
