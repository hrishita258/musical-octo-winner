import express from 'express'
import puppeteer from 'puppeteer'
import postgres from '../../db/Prisma.js'

const router = express.Router()

router.get('/', async (req, res) => {
  let query = req.query
  const result = await postgres.quiz.findMany({
    where: query,
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
